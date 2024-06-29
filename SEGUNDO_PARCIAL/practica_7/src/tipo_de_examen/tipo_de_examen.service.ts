import { Injectable } from '@nestjs/common';
import { CreateTipoDeExamanInput } from './dto/create-tipo_de_examan.input';
import { UpdateTipoDeExamanInput } from './dto/update-tipo_de_examan.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDeExaman } from './entities/tipo_de_examan.entity';

@Injectable()
export class TipoDeExamenService {
  constructor(
    @InjectRepository(TipoDeExaman)
    private readonly examenRepository: Repository<TipoDeExaman>,
  ) {}

  async create(CreateTipoDeExamanInput: CreateTipoDeExamanInput): Promise<TipoDeExaman> {
    const persona = this.examenRepository.create(CreateTipoDeExamanInput);
    return this.examenRepository.save(persona);
  }

  async findAll(estado: string): Promise<TipoDeExaman[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.examenRepository.find({ where: whereCondition });
  }

  async findOne(id: number): Promise<TipoDeExaman> {
    return this.examenRepository.findOneBy({ id: id });
  }

  async update(id: number, updatePersonaInput: UpdateTipoDeExamanInput): Promise<TipoDeExaman> {
    await this.examenRepository.update(id, updatePersonaInput);
    return this.examenRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<TipoDeExaman> {
    await this.examenRepository.update(id, { estado: 'eliminado' });
    return this.examenRepository.findOneBy({ id: id });
  }
}
