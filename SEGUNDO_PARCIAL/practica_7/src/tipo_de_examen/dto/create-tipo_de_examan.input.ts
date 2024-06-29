import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTipoDeExamanInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  Descripcion: string;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  Indicaciones: string;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
}
