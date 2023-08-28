import { Controller, Get, Query } from '@nestjs/common';
import { DirecoesService } from './direcoes.service';

@Controller('direcoes')
export class DirecoesController {
    constructor(private service: DirecoesService) {}
    @Get()
    obterDirecoes(@Query('idOrigem') idOrigem: string, @Query('idDestino') idDestino: string) {
        return this.service.obterDirecoes(idOrigem, idDestino)
    }
}
