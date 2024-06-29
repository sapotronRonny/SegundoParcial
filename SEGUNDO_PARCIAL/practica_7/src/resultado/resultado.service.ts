import { Injectable } from '@nestjs/common';
import { CreateResultadoInput } from './dto/create-resultado.input';
import { UpdateResultadoInput } from './dto/update-resultado.input';
import { Resultado } from './entities/resultado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { TipoDeExaman } from 'src/tipo_de_examen/entities/tipo_de_examan.entity';

@Injectable()
export class ResultadoService {
  constructor(
    @InjectRepository(Resultado)
    private readonly resultadoRepository: Repository<Resultado>,
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
    @InjectRepository(TipoDeExaman)
    private readonly examenRepository: Repository<TipoDeExaman>,
  ) {}

  async create(createResultadoDto: CreateResultadoInput): Promise<any> {
    const paciente = await this.pacienteRepository.findOneBy({ id: createResultadoDto.paciente_id });
    const examen = await this.examenRepository.findOneBy({ id: createResultadoDto.examen_id });

    if (!paciente || !examen) {
      throw new Error('paciente o examen no encontrada');
    }

    const resultado = this.resultadoRepository.create({
      ...createResultadoDto,
      paciente: paciente,
      tipodeexaman: examen,
    });

    const savedPreparacion = await this.resultadoRepository.save(resultado);
    return this.toResponseDto(savedPreparacion);
  }
  
  async findAll(estado: string): Promise<Resultado[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.resultadoRepository.find({ where: whereCondition });
  }
  

  async findOne(id: number): Promise<any> {
    const registro = await this.resultadoRepository.findOne({
      where: { id: id },
      relations: ['paciente', 'examen'],
    });
    if (!registro) {
      throw new Error('Registro no encontrado');
    }
    return this.toResponseDto(registro);
  }

  async update(id: number, updateResultadoDto: UpdateResultadoInput): Promise<any> {
    const resultado = await this.resultadoRepository.findOneBy({ id: id });

    if (!resultado) {
      throw new Error('Registro no encontrado');
    }

    const paciente = await this.pacienteRepository.findOneBy({ id: updateResultadoDto.paciente_id });
    const examen = await this.examenRepository.findOneBy({ id: updateResultadoDto.examen_id});

    if (!paciente || !examen) {
      throw new Error('paciente o examen no encontrada');
    }

    const updatedResultado = {
      ...resultado,
      ...updateResultadoDto,
      paciente: paciente,
      examen: examen,
    };

    await this.resultadoRepository.save(updatedResultado);
    return this.toResponseDto(updatedResultado);
  }

  async remove(id: number): Promise<any> {
    await this.resultadoRepository.update(id, { estado: 'eliminado' });
    const resultado = await this.resultadoRepository.findOne({
      where: { id: id },
      relations: ['paciente', 'examen'],
    });
    return this.toResponseDto(resultado);
  }

  private toResponseDto(resultado: Resultado): any {
    return {
      id: resultado.id,
      fecha: resultado.Resultado_test,
      hora: resultado.valor_paga,
      ubicacion: resultado.observaciones,
      pacienteid: resultado.paciente ? resultado.paciente.id : null,
      examenid: resultado.tipodeexaman ? resultado.tipodeexaman.id : null,
      estado: resultado.estado,

    };
  }
}
