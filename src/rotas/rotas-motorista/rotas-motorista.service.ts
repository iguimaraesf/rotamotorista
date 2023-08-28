import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/prisma.service'

@Injectable()
export class RotasMotoristaService {
    constructor(private prismaService: PrismaService) {}

    criarOuAtualizar(dto: { id_rota: string; lat: number; lng: number }) {
        
    }
}
