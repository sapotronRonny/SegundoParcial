import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResultadoService } from './resultado.service';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoInput } from './dto/create-resultado.input';
import { UpdateResultadoInput } from './dto/update-resultado.input';

@Resolver(() => Resultado)
export class ResultadoResolver {
  constructor(private readonly resultadoService: ResultadoService) {}

  @Mutation(() => Resultado)
  createResultado(@Args('createResultadoInput') createResultadoInput: CreateResultadoInput) {
    return this.resultadoService.create(createResultadoInput);
  }

  @Query(() => [Resultado], { name: 'resultado' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.resultadoService.findAll(estado);
  }

  @Query(() => Resultado, { name: 'resultado' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.resultadoService.findOne(id);
  }

  @Mutation(() => Resultado)
  updateResultado(@Args('updateResultadoInput') updateResultadoInput: UpdateResultadoInput) {
    return this.resultadoService.update(updateResultadoInput.id, updateResultadoInput);
  }

  @Mutation(() => Resultado)
  removeResultado(@Args('id', { type: () => Int }) id: number) {
    return this.resultadoService.remove(id);
  }
}
