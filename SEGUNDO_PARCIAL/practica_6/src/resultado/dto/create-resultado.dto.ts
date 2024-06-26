import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEnum, IsNumber } from 'class-validator';

export class CreateResultadoDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    Resultado_test: string;

    @IsNumber()
    @IsNotEmpty()
    valor_paga: number;

    @IsString()
    @IsNotEmpty()
    observaciones: string;

    @IsNumber()
    @IsOptional()
    id_paciente: number;

    @IsNumber()
    @IsOptional()
    id_examen: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}