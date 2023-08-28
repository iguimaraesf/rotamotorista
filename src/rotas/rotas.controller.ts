import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RotasService } from './rotas.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { RotaSerializer } from './rota.serializer'

@Controller('rotas')
export class RotasController {
  constructor(private readonly rotasService: RotasService) {}

  @Post()
  create(@Body() createRotaDto: CreateRotaDto) {
    return this.rotasService.create(createRotaDto);
  }

  @Get()
  async findAll() {
    const rotas = await this.rotasService.findAll();
    return rotas.map((r) => new RotaSerializer(r))
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const rota = await this.rotasService.findOne(id)
    return new RotaSerializer(rota)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRotaDto: UpdateRotaDto) {
    return this.rotasService.update(+id, updateRotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rotasService.remove(+id);
  }
}
