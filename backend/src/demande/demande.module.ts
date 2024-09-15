import { Module } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { DemandeController } from './demande.controller';
import { PrismaService } from 'src/prisma/prisma.service';

import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [DemandeController],
  providers: [DemandeService,PrismaService,MailService],
})
export class DemandeModule {}
