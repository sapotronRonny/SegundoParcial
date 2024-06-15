import { prisma } from '../../data/postgres';
import { CreateTestDto, TestDatasource , TestEntity, UpdateTestDto } from '../../domain';




export class TestDatasourceImpl implements TestDatasource {

  async create( createTestDto: CreateTestDto ): Promise<TestEntity> {
    const test = await prisma.tipo_de_examen.create({
      data: createTestDto!
    });

    return TestEntity.fromObject( test );
  }

  async getAll(): Promise<TestEntity[]> {
    const pacientes = await prisma.paciente.findMany();
    return pacientes.map( ciudadano => TestEntity.fromObject(ciudadano) );
  }

  async findById( id_examen: number ): Promise<TestEntity> {
    const test = await prisma.tipo_de_examen.findFirst({
      where: { id_examen: id_examen }
    });

    if ( !test ) throw `Ciudadano with id ${ id_examen } not found`;
    return TestEntity.fromObject(test);
  }

  async updateById( updatePacienteDto: UpdateTestDto ): Promise<TestEntity> {
    await this.findById( updatePacienteDto.id_examen );
    
    const updatedPaciente = await prisma.tipo_de_examen.update({
      where: { id_examen: updatePacienteDto.id_examen },
      data: updatePacienteDto!.values
    });

    return TestEntity.fromObject(updatedPaciente);
  }

  async deleteById( id_examen: number ): Promise<TestEntity> {
    await this.findById( id_examen );
    const deleted = await prisma.tipo_de_examen.delete({
      where: { id_examen:id_examen }
    });

    return PacienteEntity.fromObject( deleted );
  }

}