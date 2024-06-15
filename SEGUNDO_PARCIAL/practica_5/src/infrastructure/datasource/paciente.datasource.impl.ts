import { prisma } from '../../data/postgres';
import { CreatePacienteDto, PacienteDatasource , PacienteEntity, UpdatePacienteDto } from '../../domain';




export class PacienteDatasourceImpl implements PacienteDatasource {

  async create( createPacienteDto: CreatePacienteDto ): Promise<PacienteEntity> {
    const paciente = await prisma.paciente.create({
      data: createPacienteDto!
    });

    return PacienteEntity.fromObject( paciente );
  }

  async getAll(): Promise<PacienteEntity[]> {
    const pacientes = await prisma.paciente.findMany();
    return pacientes.map( ciudadano => PacienteEntity.fromObject(ciudadano) );
  }

  async findById( id: number ): Promise<PacienteEntity> {
    const paciente = await prisma.paciente.findFirst({
      where: { id_paciente: id }
    });

    if ( !paciente ) throw `Ciudadano with id ${ id } not found`;
    return PacienteEntity.fromObject(paciente);
  }

  async updateById( updatePacienteDto: UpdatePacienteDto ): Promise<PacienteEntity> {
    await this.findById( updatePacienteDto.id_paciente );
    
    const updatedPaciente = await prisma.paciente.update({
      where: { id_paciente: updatePacienteDto.id_paciente },
      data: updatePacienteDto!.values
    });

    return PacienteEntity.fromObject(updatedPaciente);
  }

  async deleteById( id: number ): Promise<PacienteEntity> {
    await this.findById( id );
    const deleted = await prisma.paciente.delete({
      where: { id_paciente:id }
    });

    return PacienteEntity.fromObject( deleted );
  }

}