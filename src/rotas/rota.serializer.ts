import { DirectionsResponseData } from "@googlemaps/google-maps-services-js";
import { Rota } from "@prisma/client";

export class RotaSerializer implements Omit<Rota, 'direcoes'> {
    origem: { 
        nome: string,
        localidade: {
            lat: number;
            lng: number;
        };
    };
    destino: {
        nome: string,
        localidade: {
            lat: number;
            lng: number;
        };
    };
    id: string;
    nome: string;
    distancia: number;
    duracao: number;
    created_at: Date;
    updated_at: Date;
    direcoes: DirectionsResponseData & { request: any };

    constructor(rota: Rota) {
        this.id = rota.id
        this.nome = rota.nome
        this.origem = rota.origem
        this.destino = rota.destino
        this.distancia = rota.distancia
        this.duracao = rota.duracao
        this.created_at = rota.created_at
        this.updated_at = rota.updated_at
        this.direcoes = JSON.parse(rota.direcoes as string)
    }
}