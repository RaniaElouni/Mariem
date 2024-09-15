import { Module } from '@nestjs/common';
import { StagairesService } from './stagaires.service';
import { StagairesController } from './stagaires.controller';

@Module({
  controllers: [StagairesController],
  providers: [StagairesService],
})
export class StagairesModule {}
