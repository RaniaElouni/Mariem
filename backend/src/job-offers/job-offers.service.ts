import { Injectable } from '@nestjs/common';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobOffersService {
  constructor(private prisma: PrismaService) {}
  async create(createJobOfferDto: CreateJobOfferDto) {
    return await this.prisma.offer.create({ data: createJobOfferDto });
  }

  findAll() {
    return this.prisma.offer.findMany({
      include: {
        demande: true,
        offerSkills: { include: { Skills:true } },
        services:true
      },
      where:{
        type : "offre d'emploi"
      }
    });
  }
  findAllByService(id:string) {
    return this.prisma.offer.findMany({
      include: {
        demande: true,
        offerSkills: { include: { Skills:true } },
        services:true
      },
      where:{
        services:{
          id:id
        }
      }
    });
  }
  findAllOffreDeStage() {
    return this.prisma.offer.findMany({
      include: {
        demande: true,
        offerSkills: { include: { Skills:true } },
        services:true
      },
      where:{
        type : "offre de stage"
      }
    });
  }

  findOne(id: string) {
    return this.prisma.offer.findUnique({ where: { id } ,include: {
      demande: true,
      offerSkills: { include: { Skills:true } },
      services:true
    }});
  }

  update(id: number, updateJobOfferDto: UpdateJobOfferDto) {
    return `This action updates a #${id} jobOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobOffer`;
  }
}
