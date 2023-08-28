import { Injectable } from '@nestjs/common';
import { DirectionsRequest, Client as GoogleMapsClient, TravelMode } from '@googlemaps/google-maps-services-js'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class DirecoesService {
    constructor(private googleMapsClient: GoogleMapsClient, private configService: ConfigService) {}

    async obterDirecoes(idOrigem: string, idDestino: string) {
        const k = this.configService.get<string>('GOOGLE_MAPS_API_KEY') || ''
        const requestParams: DirectionsRequest['params'] = {
            origin: `place_id:${idOrigem}`,
            destination: `place_id:${idDestino}`,
            mode: TravelMode.driving,
            key: k
        }
        const { data } = await this.googleMapsClient.directions({
            params: requestParams
        })
        return {
            ...data,
            request: {
                origin: {
                    place_id: requestParams.origin,
                    location: {
                        lat: data.routes[0].legs[0].start_location.lat,
                        lng: data.routes[0].legs[0].start_location.lng,
                    },
                },
                destination: {
                    place_id: requestParams.destination,
                    location: {
                        lat: data.routes[0].legs[0].end_location.lat,
                        lng: data.routes[0].legs[0].end_location.lng,
                    },
                },
                mode: requestParams.mode,
            }
        }
    }
}
