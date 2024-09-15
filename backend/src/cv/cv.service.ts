
import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { createReadStream } from 'fs';
import { extname } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import * as pdfParse from 'pdf-parse';
import { PrismaService } from 'src/prisma/prisma.service';
const pipelineAsync = promisify(pipeline);
@Injectable()
export class CvService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCvDto: CreateCvDto) {
    return 'This action adds a new cv';
  }

  async calculateMatchScore(cvText: string, offerId: string): Promise<{ matchScore: number; commonWords: string[] }> {
    // Fetch the offer details with related skills from the database
    const offer = await this.prisma.offer.findUnique({
      where: { id: offerId },
      include: {
        offerSkills: {
          include: {
            Skills: true,
          },
        },
      },
    });

    if (!offer) {
      throw new Error('Offer not found');
    }

    const skillsWords = offer.offerSkills.map((offerSkill) => offerSkill.Skills.name.toLowerCase().split(" "));
   

    // Count the number of common words between description and skills
    const { commonWords, count } = this.countCommonWords(skillsWords.flat(), cvText);

    return { matchScore: count, commonWords };
  }

  private extractWordsFromText(text: string): string[] {
    return text
      .toLowerCase()
      .match(/\b\w+\b/g) || [];
  }

  private countCommonWords(words2: any, cvText: string): { commonWords: string[], count: number } {
    const cvWords = this.extractWordsFromText(cvText.toLowerCase());
  

    const commonWords = cvWords.filter(word => words2.includes(word));

    const removeRepetition = new Set(commonWords);
    return { commonWords: Array.from(removeRepetition), count: removeRepetition.size };
  }

  findAll() {
    return `This action returns all cv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}
