import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RotasModule } from './rotas/rotas.module';
import { ConfigModule } from '@nestjs/config';
import { MapasModule } from './mapas/mapas.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, RotasModule, MapasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
