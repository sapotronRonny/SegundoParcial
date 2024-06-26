import {  IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePacienteDto {

    @IsNumber()
    @IsOptional()
    id_paciente?: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    CI_paciente: string;
    
    @IsString()
    @IsNotEmpty()
    estado: string;
}
