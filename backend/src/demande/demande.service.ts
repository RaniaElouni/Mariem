import { Injectable } from '@nestjs/common';
import { CreateDemandeDto, UpdateScoreDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Demande } from './entities/demande.entity';
import { MailService } from 'src/mail/mail.service';
import { Status } from '@prisma/client';
@Injectable()
export class DemandeService {
  constructor(private prisma: PrismaService , private readonly nodeMailerService: MailService) {}

  async create(createDemandeDto: CreateDemandeDto) {
    const { offerId, ...rest } = createDemandeDto;
    return this.prisma.demande.create({ data: createDemandeDto });
  }

  async findAll() {
    return await this.prisma.demande.findMany({include:{Offer:{include:{offerSkills:{include:{Skills:true}}}}}})
  }

  findOne(id: number) {
    return `This action returns a #${id} demande`;
  }

  async update(id: string, dto: UpdateScoreDto) {
    const {score}=dto
    const response = await this.prisma.demande.update({
      where: { id },
      data: {score},
    });
    console.log(response,"reponse score");
    
    return response
  }
  async updateDem(id: string, dto: UpdateDemandeDto) {
    const {email,name,lastName,...rest}=dto
   
    const response = await this.prisma.demande.update({
      where: { id },
      data: {...rest},
    });
    console.log(response,"reponse score");
    if (dto.status === Status.accepted) {
      await this.nodeMailerService.mailAcceptedDemande(email,lastName,name);
    } else{
      await this.nodeMailerService.mailRefusedDemande(email,lastName,name);}
    return response
  }


  

  remove(id: number) {
    return `This action removes a #${id} demande`;
  }
}
