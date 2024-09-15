import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { CreateDemandeDto, UpdateScoreDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("demande")
@Controller('demande')
export class DemandeController {
  constructor(private readonly demandeService: DemandeService) {}

  @Post()
  create(@Body() createDemandeDto: CreateDemandeDto) {
    return this.demandeService.create(createDemandeDto);
  }

  @Get()
  findAll() {
    return this.demandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateScoreDto) {
    return this.demandeService.update(id, dto);
  }
  @Patch('updateDem/:id')
  updateDem(@Param('id') id: string, @Body() dto: UpdateDemandeDto) {
    return this.demandeService.updateDem(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeService.remove(+id);
  }
}
