import { Controller, Get, Query } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { ConfigService } from '@nestjs/config'

@Controller('lugares')
export class LugaresController {
    constructor(private service: LugaresService, private configService: ConfigService) {}
    @Get()
    acharLugar(@Query('texto') texto: string) {
        var key = this.configService.get<string>('GOOGLE_MAPS_API_KEY')
        return this.service.acharLugar(texto)
        // return `key=${key}; texto=${texto}.`
    }
}
