import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly PacienteRepository: Repository<Paciente>
  ) {

  }
  async create(CreatePacienteDto: CreatePacienteDto) {
    const ciudadano = this.PacienteRepository.create(CreatePacienteDto);
    return this.PacienteRepository.save(Paciente);
  }

  async findAll() {
    return await this.PacienteRepository.save(Paciente);
  }

  async findOne(id: number) {
    return await this.PacienteRepository.findOneBy({id});
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    const updated= await this.PacienteRepository.update(id,updatePacienteDto);
    if (updated.affected > 0) {
      return await this.findOne(id);
    }
  }

  async remove(id: number) {
    const deleted = await this.ciudadanoRepository.delete(id);
    return deleted;
  }
}
