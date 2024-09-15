import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StagairesService } from './stagaires.service';
import { CreateStagaireDto } from './dto/create-stagaire.dto';
import { UpdateStagaireDto } from './dto/update-stagaire.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("stagiaires")
@Controller('stagaires')
export class StagairesController {
  constructor(private readonly stagairesService: StagairesService) {}

  @Post()
  create(@Body() createStagaireDto: CreateStagaireDto) {
    return this.stagairesService.create(createStagaireDto);
  }

  @Get()
  findAll() {
    return this.stagairesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stagairesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStagaireDto: UpdateStagaireDto) {
    return this.stagairesService.update(+id, updateStagaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stagairesService.remove(+id);
  }
}
