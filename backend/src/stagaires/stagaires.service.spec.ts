import { Test, TestingModule } from '@nestjs/testing';
import { StagairesService } from './stagaires.service';

describe('StagairesService', () => {
  let service: StagairesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StagairesService],
    }).compile();

    service = module.get<StagairesService>(StagairesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
