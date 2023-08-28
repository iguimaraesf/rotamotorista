import { Module } from '@nestjs/common';
import { RotasService } from './rotas.service';
import { RotasController } from './rotas.controller';
import { MapasModule } from 'src/mapas/mapas.module';
import { RotasMotoristaService } from './rotas-motorista/rotas-motorista.service';

@Module({
  imports: [MapasModule],
  controllers: [RotasController],
  providers: [RotasService, RotasMotoristaService],
})
export class RotasModule {}
