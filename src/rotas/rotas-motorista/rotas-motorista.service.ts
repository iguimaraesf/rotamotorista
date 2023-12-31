import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/prisma.service'

@Injectable()
export class RotasMotoristaService {
    constructor(private prismaService: PrismaService) {}

    async criarOuAtualizar(dto: { id_rota: string; lat: number; lng: number }) {
/*
        this.prismaService.rotaMotorista.count({
            where: {
                id_rota: dto.id_rota
            }
        })
*/
        return await this.prismaService.rotaMotorista.upsert({
            include: {
                rota: true,
            },
            where: {
                id_rota: dto.id_rota
            },
            create: {
                id_rota: dto.id_rota,
                pontos: {
                    set: {
                        localidade: {
                            lat: dto.lat,
                            lng: dto.lng,
                        },
                    },
                },
            },
            update: {
                pontos: {
                    set: {
                        localidade: {
                            lat: dto.lat,
                            lng: dto.lng,
                        },
                    },
                },
            },
        })
    }
}
