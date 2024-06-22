import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-Resultado.dto';
import { UpdateResultadoDto } from './dto/update-Resultado.dto';
import { Resultado } from './entities/Resultado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paciente } from 'src/paciente/entities/paciente.entity';
import { Test } from 'src/test/entities/test.entity';

@Injectable()
export class ResultadoService {
  constructor(
    @InjectRepository(Resultado)
    private readonly ResultadoRepository: Repository<Resultado>,
    @InjectRepository(paciente)
    private readonly pacienteRepository: Repository<paciente>,
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  async create(createResultadoDto: CreateResultadoDto): Promise<any> {
    const paciente = await this.pacienteRepository.findOneBy({ id_paciente: createResultadoDto.paciente_id});
    const test = await this.testRepository.findOneBy({ id_examen: createResultadoDto.examen_id });

    if (!paciente || !test) {
      throw new Error('paciente o test no encontrada');
    }

    const Resultado = this.ResultadoRepository.create({
      ...createResultadoDto,
      paciente: paciente,
      Test: Test,
    });

    const savedPreparacion = await this.ResultadoRepository.save(Resultado);
    return this.toResponseDto(savedPreparacion);
  }
  
  async findAll(): Promise<any[]> {
    const Resultado = await this.ResultadoRepository.find({ relations: ['paciente', 'test'] });
    return Resultado.map(Resultado => this.toResponseDto(Resultado));
  }

  async findOne(id: number): Promise<any> {
    const Resultado = await this.ResultadoRepository.findOne({
      where: { id: id },
      relations: ['paciente', 'test'],
    });
    if (!Resultado) {
      throw new Error('Resultado no encontrado');
    }
    return this.toResponseDto(Resultado);
  }

  async update(id: number, updateResultadoDto: UpdateResultadoDto): Promise<any> {
    const Resultado = await this.ResultadoRepository.findOneBy({ id: id });

    if (!Resultado) {
      throw new Error('Resultado no encontrado');
    }

    const paciente = await this.pacienteRepository.findOneBy({ id_paciente: updateResultadoDto.paciente_id });
    const test = await this.testRepository.findOneBy({ id_examen: updateResultadoDto.examen_id});

    if (!paciente || !test) {
      throw new Error('paciente o test no encontrada');
    }

    const updatedResultado = {
      ...Resultado,
      ...updateResultadoDto,
      paciente: paciente,
      test: test,
    };

    await this.ResultadoRepository.save(updatedResultado);
    return this.toResponseDto(updatedResultado);
  }

  async remove(id: number): Promise<any> {
    await this.ResultadoRepository.update(id, { estado: 'eliminado' });
    const Resultado = await this.ResultadoRepository.findOne({
      where: { id: id },
      relations: ['paciente', 'test'],
    });
    return this.toResponseDto(Resultado);
  }

  private toResponseDto(Resultado: Resultado): any {
    return {
      id: Resultado.id,
      Resultado_test: Resultado.Resultado_test,
      valor_paga: Resultado.valor_paga,
      observaciones: Resultado.observaciones,
      paciente_id: Resultado.paciente ? Resultado.paciente.id_paciente : null,
      testid: Resultado.Test ? Resultado.Test.id_examen : null,
      estado: Resultado.estado,

    };
  }
  
}