import { Module } from '@nestjs/common';
import { LugaresController } from './lugares/lugares.controller';
import { LugaresService } from './lugares/lugares.service';
import { Client as GoogleMapsClient} from '@googlemaps/google-maps-services-js'
import { DirecoesController } from './direcoes/direcoes.controller';
import { DirecoesService } from './direcoes/direcoes.service';

@Module({
  controllers: [LugaresController, DirecoesController],
  providers: [LugaresService, {
    provide: GoogleMapsClient,
    useValue: new GoogleMapsClient(),
  },
  DirecoesService],
  exports: [DirecoesService]
})
export class MapasModule {}
