import {  IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePacienteDto {
    @IsString()
    @IsNotEmpty()
    id_paciente?: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    CI_paciente: string;


    @IsString()
    @MinLength(1)
    nombre: string;

    @IsBoolean()
    @IsNotEmpty()
    estado: boolean;
}
