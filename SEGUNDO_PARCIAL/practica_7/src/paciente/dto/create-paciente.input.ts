import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber} from 'class-validator';

@InputType()
export class CreatePacienteInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  nombre: string;


  @Field(() => Int)
  @IsNumber()
  CI_paciente: number;


  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  estado: string;
}
