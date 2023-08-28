import { Test, TestingModule } from '@nestjs/testing';
import { RotasMotoristaService } from './rotas-motorista.service';

describe('RotasMotoristaService', () => {
  let service: RotasMotoristaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RotasMotoristaService],
    }).compile();

    service = module.get<RotasMotoristaService>(RotasMotoristaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
