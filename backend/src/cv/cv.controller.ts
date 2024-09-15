import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CvService } from './cv.service';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage  } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as pdfParse from 'pdf-parse';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post("upload")
  @UseInterceptors(
    FileInterceptor('pdf', {
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = 'upload';
          //  Create folder if doesn't exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath);
          }
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          //  Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //  Calling the callback passing the random name generated with
          // the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() dto: any) {
    const { offerId } = dto; 

    const data = {
      description: dto.description,
      alt: dto.alt,
      extension: file.filename.split('.')[1],
      type: file.mimetype,
      frontPath: 'http://localhost:4000/' + 'upload/' + file.filename,
      path: 'upload/' + file.filename,
    };

    if (!offerId) {
      throw new Error('Offer ID is required.');
    }

    const pdffile = fs.readFileSync(data.path);
    const parsedData = await pdfParse(pdffile);
    const pdfText = parsedData.text;

    const { matchScore, commonWords } = await this.cvService.calculateMatchScore(pdfText, offerId);
console.log(matchScore,"match score");
    console.log(commonWords,"common words");
    console.log(data,"data");
    

    return { matchScore, commonWords, data };
  }

  @Get()
  findAll() {
    return this.cvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
    return this.cvService.update(+id, updateCvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvService.remove(+id);
  }
}
