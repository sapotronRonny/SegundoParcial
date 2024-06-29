import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateResultadoInput {
  @Field(() => String)
  @IsString()
  Resultado_test: string;

  @Field(() => Int)
  @IsNumber()
  valor_paga: number;

  @Field(() => String)
  @IsString()
  @IsOptional()
  observaciones: string;


  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  paciente_id: number;


  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  examen_id: number;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
}
