import { Test, TestingModule } from '@nestjs/testing';
import { DirecoesService } from './direcoes.service';

describe('DirecoesService', () => {
  let service: DirecoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirecoesService],
    }).compile();

    service = module.get<DirecoesService>(DirecoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
