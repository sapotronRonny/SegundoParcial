import { Module } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { ResultadoController } from './resultado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';
import { paciente } from 'src/paciente/entities/paciente.entity';
import { Test } from 'src/test/entities/test.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Resultado, paciente, Test]) ],
  controllers: [ResultadoController],
  providers: [ResultadoService],
})
export class ResultadoModule {}
