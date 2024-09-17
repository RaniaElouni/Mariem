import { Injectable } from '@nestjs/common';
import { CreateStagaireDto } from './dto/create-stagaire.dto';
import { UpdateStagaireDto } from './dto/update-stagaire.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StagairesService {
  constructor(private prisma: PrismaService) {}
 async create(createStagaireDto: CreateStagaireDto) {
    return await this.prisma.intern.create({data:createStagaireDto})
  }

 async findAll() {
    return await this.prisma.intern.findMany({
      include : {
        encadrant : true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} stagaire`;
  }

  update(id: number, updateStagaireDto: UpdateStagaireDto) {
    return `This action updates a #${id} stagaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} stagaire`;
  }
}
