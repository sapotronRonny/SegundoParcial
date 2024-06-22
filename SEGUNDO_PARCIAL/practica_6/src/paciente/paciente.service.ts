import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(paciente)
    private readonly PacienteRepository: Repository<paciente>
  ) {

  }
  async create(CreatePacienteDto: CreatePacienteDto) {
    const paciente = this.PacienteRepository.create(CreatePacienteDto);
    return this.PacienteRepository.save(paciente);
  }

  async findAll(): Promise<paciente[]> {
    return this.PacienteRepository.find();
  }

  async findOne(id_paciente: number): Promise<paciente> {
    return this.PacienteRepository.findOneBy({ id_paciente: id_paciente });
  }

  async update(id_paciente: number, updateCocineroDto: UpdatePacienteDto): Promise<paciente> {
    await this.PacienteRepository.update(id_paciente, updateCocineroDto);
    return this.PacienteRepository.findOneBy({ id_paciente: id_paciente });
  }

  async remove(id_paciente: number): Promise<paciente> {
    await this.PacienteRepository.update(id_paciente, { estado: 'eliminado' });
    return this.PacienteRepository.findOneBy({ id_paciente: id_paciente});
  }
}
