import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

const paciente = [
  {
    id:1,
    nombre: 'ronny',
    CI_paciente: 123456789
  },

  {
    id:2,
    nombre: 'ronny',
    CI_paciente: 123456789
  }
]

@Injectable()
export class PacienteService {
  create(createPacienteDto: CreatePacienteDto) {
    paciente.push(createPacienteDto);
    return createPacienteDto;
  }

  findAll() {
    return paciente;
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
