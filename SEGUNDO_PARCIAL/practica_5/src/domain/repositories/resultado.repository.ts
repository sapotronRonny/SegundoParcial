import { CreateResultadoDto, UpdateResultadoDto } from '../dtos';
import { ResultadoEntity } from '../entities/resultado.entity';



export abstract class ResultadoRepository {

  abstract create( createPreguntaDto: CreateResultadoDto ): Promise<ResultadoEntity>;
  abstract getAll(): Promise<ResultadoEntity[]>;
  abstract findById( id: number ): Promise<ResultadoEntity>;
  abstract updateById( updatePreguntaDto: UpdateResultadoDto ): Promise<ResultadoEntity>;
  abstract deleteById( id: number ): Promise<ResultadoEntity>;

}