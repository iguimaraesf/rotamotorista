import { Injectable } from '@nestjs/common';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { DirecoesService } from 'src/mapas/direcoes/direcoes.service';

@Injectable()
export class RotasService {
  constructor(private prismaService: PrismaService, private direcoesService: DirecoesService) {

  }
  async create(createRotaDto: CreateRotaDto) {
    const { available_travel_modes, geocoded_waypoints, routes, request } = 
      await this.direcoesService.obterDirecoes(createRotaDto.source_id, createRotaDto.destination_id)
    const legs = routes[0].legs[0]
    return this.prismaService.rota.create({
      data: {
        nome: createRotaDto.name,
        origem: {
          nome: legs.start_address,
          localidade: {
            lat: legs.start_location.lat,
            lng: legs.start_location.lng,
          }
        },
        destino: {
          nome: legs.end_address,
          localidade: {
            lat: legs.end_location.lat,
            lng: legs.end_location.lng,
          }
        },
        distancia: legs.distance.value,
        duracao: legs.duration.value,
        direcoes: JSON.stringify({
          available_travel_modes,
          geocoded_waypoints,
          routes,
          request,
        }),
      }
    })
  }

  findAll() {
    return this.prismaService.rota.findMany()
  }

  findOne(id: string) {
    return this.prismaService.rota.findUniqueOrThrow({
      where: { id: id }
    })
  }

  update(id: number, updateRotaDto: UpdateRotaDto) {
    return `This action updates a #${id} rota`;
  }

  remove(id: number) {
    return `This action removes a #${id} rota`;
  }
}
