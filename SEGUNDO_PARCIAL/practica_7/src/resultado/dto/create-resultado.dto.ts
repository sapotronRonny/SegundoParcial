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
    @IsNotEmpty()
    paciente_id: number;

    @IsNumber()
    @IsNotEmpty()
    examen_id: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}