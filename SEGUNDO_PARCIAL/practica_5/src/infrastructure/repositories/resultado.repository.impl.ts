import { CreateResultadoDto,
        ResultadoDatasource,
        ResultadoEntity,
        UpdateResultadoDto } from '../../domain';
import { ResultadoRepository } from '../../domain/repositories/resultado.repository'        


export class ResultadoRepositoryImpl implements ResultadoRepository {

constructor(
private readonly datasource: ResultadoDatasource,
) { }


create( createResultadoDto: CreateResultadoDto ): Promise<ResultadoEntity> {
return this.datasource.create( createResultadoDto );
}

getAll(): Promise<ResultadoEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<ResultadoEntity> {
return this.datasource.findById( id );
}

updateById( updateResultadoDto: UpdateResultadoDto ): Promise<ResultadoEntity> {
return this.datasource.updateById( updateResultadoDto );
}

deleteById( id: number ): Promise<ResultadoEntity> {
return this.datasource.deleteById( id );
}

}
