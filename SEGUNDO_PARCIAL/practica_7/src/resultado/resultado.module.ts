import { Module } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { ResultadoResolver } from './resultado.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { TipoDeExaman } from 'src/tipo_de_examen/entities/tipo_de_examan.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Resultado, Paciente,TipoDeExaman]) ],
  exports: [ TypeOrmModule ],
  providers: [ResultadoResolver, ResultadoService],
})
export class ResultadoModule {}
