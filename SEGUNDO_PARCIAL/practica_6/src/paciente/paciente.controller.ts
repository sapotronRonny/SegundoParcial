import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('Paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id_paciente')
  findOne(@Param('id_paciente') id_paciente: string) {
    return this.pacienteService.findOne(+id_paciente);
  }

  @Patch(':id_paciente')
  update(@Param('id_paciente') id_paciente: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(+id_paciente, updatePacienteDto);
  }

  @Delete(':id_paciente')
  remove(@Param('id_paciente') id_paciente: string) {
    return this.pacienteService.remove(+id_paciente);
  }
}
