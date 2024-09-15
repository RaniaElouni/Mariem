import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CvController],
  providers: [CvService,PrismaService],
})
export class CvModule {}
