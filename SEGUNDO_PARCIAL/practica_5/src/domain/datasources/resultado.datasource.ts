import { CreateResultadoDto, UpdateResultadoDto } from '../dtos';
import { ResultadoEntity } from '../entities/Resultado.entity';



export abstract class ResultadoDatasource {

  abstract create( createResultadoDto: CreateResultadoDto ): Promise<ResultadoEntity>;
  abstract getAll(): Promise<ResultadoEntity[]>;
  abstract findById( id: number ): Promise<ResultadoEntity>;
  abstract updateById( updateResultadoDto: UpdateResultadoDto ): Promise<ResultadoEntity>;
  abstract deleteById( id: number ): Promise<ResultadoEntity>;

}