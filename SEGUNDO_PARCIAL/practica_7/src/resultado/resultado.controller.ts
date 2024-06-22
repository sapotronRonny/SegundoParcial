import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

@Controller('Resultado')
export class ResultadoController {
  constructor(private readonly ResultadoService: ResultadoService) {}

  @Post()
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.ResultadoService.create(createResultadoDto);
  }

  @Get()
  findAll() {
    return this.ResultadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ResultadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultadoDto: UpdateResultadoDto) {
    return this.ResultadoService.update(+id, updateResultadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ResultadoService.remove(+id);
  }
}