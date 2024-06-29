import { CreateTipoDeExamanInput } from './create-tipo_de_examan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTipoDeExamanInput extends PartialType(CreateTipoDeExamanInput) {
  @Field(() => Int)
  id: number;
}
