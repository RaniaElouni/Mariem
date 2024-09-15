import { Test, TestingModule } from '@nestjs/testing';
import { StagairesController } from './stagaires.controller';
import { StagairesService } from './stagaires.service';

describe('StagairesController', () => {
  let controller: StagairesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StagairesController],
      providers: [StagairesService],
    }).compile();

    controller = module.get<StagairesController>(StagairesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
