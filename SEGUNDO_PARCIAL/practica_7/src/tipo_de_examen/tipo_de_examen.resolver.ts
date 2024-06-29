import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TipoDeExamenService } from './tipo_de_examen.service';
import { TipoDeExaman } from './entities/tipo_de_examan.entity';
import { CreateTipoDeExamanInput } from './dto/create-tipo_de_examan.input';
import { UpdateTipoDeExamanInput } from './dto/update-tipo_de_examan.input';

@Resolver(() => TipoDeExaman)
export class TipoDeExamenResolver {
  constructor(private readonly tipoDeExamenService: TipoDeExamenService) {}

  @Mutation(() => TipoDeExaman)
  createTipoDeExaman(@Args('createTipoDeExamanInput') createTipoDeExamanInput: CreateTipoDeExamanInput) {
    return this.tipoDeExamenService.create(createTipoDeExamanInput);
  }

  @Query(() => [TipoDeExaman], { name: 'tipoDeExamen' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado?: string) {
    return this.tipoDeExamenService.findAll(estado);
  }

  @Query(() => TipoDeExaman, { name: 'tipoDeExaman' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tipoDeExamenService.findOne(id);
  }

  @Mutation(() => TipoDeExaman)
  updateTipoDeExaman(@Args('updateTipoDeExamanInput') updateTipoDeExamanInput: UpdateTipoDeExamanInput) {
    return this.tipoDeExamenService.update(updateTipoDeExamanInput.id, updateTipoDeExamanInput);
  }

  @Mutation(() => TipoDeExaman)
  removeTipoDeExaman(@Args('id', { type: () => Int }) id: number) {
    return this.tipoDeExamenService.remove(id);
  }
}
