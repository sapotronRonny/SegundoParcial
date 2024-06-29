import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteInput): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(paciente);
  }

  async findAll(estado: string): Promise<Paciente[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.pacienteRepository.find({ where: whereCondition });
  }

  async findOne(id: number): Promise<Paciente> {
    return this.pacienteRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCocineroDto: UpdatePacienteInput): Promise<Paciente> {
    await this.pacienteRepository.update(id, updateCocineroDto);
    return this.pacienteRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Paciente> {
    await this.pacienteRepository.update(id, { estado: 'eliminado' });
    return this.pacienteRepository.findOneBy({ id: id });
  }
}
