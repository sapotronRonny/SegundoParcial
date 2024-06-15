import { prisma } from '../../data/postgres';
import { CreateResultadoDto, ResultadoDatasource , ResultadoEntity, UpdateResultadoDto } from '../../domain';




export class ResultadoDatasourceImpl implements ResultadoDatasource {

  async create(createResultadoDto: CreateResultadoDto): Promise<ResultadoEntity> {
    const resultado = await prisma.resultado.create({
      data: createResultadoDto
    });

    return ResultadoEntity.fromObject( resultado );
  }

  async getAll(): Promise<ResultadoEntity[]> {
    const Resultados = await prisma.resultado.findMany();
    return Resultados.map( ciudadano => ResultadoEntity.fromObject(ciudadano) );
  }

  async findById( id: number ): Promise<ResultadoEntity> {
    const Resultado = await prisma.resultado.findFirst({
      where: { id }
    });

    if ( !Resultado ) throw `Ciudadano with id ${ id } not found`;
    return ResultadoEntity.fromObject(Resultado);
  }

  async updateById( updateResultadoDto: UpdateResultadoDto ): Promise<ResultadoEntity> {
    await this.findById( updateResultadoDto.id );
    
    const updatedResultado = await prisma.resultado.update({
      where: { id: updateResultadoDto.id },
      data: updateResultadoDto!.values
    });

    return ResultadoEntity.fromObject(updatedResultado);
  }

  async deleteById( id: number ): Promise<ResultadoEntity> {
    await this.findById( id );
    const deleted = await prisma.resultado.delete({
      where: { id }
    });

    return ResultadoEntity.fromObject( deleted );
  }

}