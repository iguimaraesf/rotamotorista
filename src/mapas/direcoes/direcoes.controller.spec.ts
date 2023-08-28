import { Test, TestingModule } from '@nestjs/testing';
import { DirecoesController } from './direcoes.controller';

describe('DirecoesController', () => {
  let controller: DirecoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirecoesController],
    }).compile();

    controller = module.get<DirecoesController>(DirecoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
