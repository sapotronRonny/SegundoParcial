import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEnum, IsNumber } from 'class-validator';

export class CreateTestDto {
    @IsNumber()
    @IsOptional()
    id_examen?: number;

    @IsString()
    @IsNotEmpty()
    Descripcion: string;

    @IsString()
    @IsNotEmpty()
    Indicaciones: string;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
