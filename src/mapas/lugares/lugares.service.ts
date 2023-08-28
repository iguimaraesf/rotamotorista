import { Injectable } from '@nestjs/common';
import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class LugaresService {
    constructor(private googleMapsClient: GoogleMapsClient, private configService: ConfigService) {}

    async acharLugar(texto: string) {
        const { data } = await this.googleMapsClient.findPlaceFromText({
            params: {
                input: texto,
                inputtype: PlaceInputType.textQuery,
                fields: ['place_id', 'formatted_address', 'geometry', 'name'],
                key: this.configService.get<string>('GOOGLE_MAPS_API_KEY'),
            }
        })
        return data
    }
}
