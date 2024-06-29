import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PacienteService } from './paciente.service';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';

@Resolver(() => Paciente)
export class PacienteResolver {
  constructor(private readonly pacienteService: PacienteService) {}

  @Mutation(() => Paciente)
  createPaciente(@Args('createPacienteInput') createPacienteInput: CreatePacienteInput) {
    return this.pacienteService.create(createPacienteInput);
  }

  @Query(() => [Paciente], { name: 'paciente' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string) {
    return this.pacienteService.findAll(estado);
  }

  @Query(() => Paciente, { name: 'paciente' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pacienteService.findOne(id);
  }

  @Mutation(() => Paciente)
  updatePaciente(@Args('updatePacienteInput') updatePacienteInput: UpdatePacienteInput) {
    return this.pacienteService.update(updatePacienteInput.id, updatePacienteInput);
  }

  @Mutation(() => Paciente)
  removePaciente(@Args('id', { type: () => Int }) id: number) {
    return this.pacienteService.remove(id);
  }
}
