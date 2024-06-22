import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paciente } from './entities/paciente.entity';

@Module({
  controllers: [PacienteController],
  imports: [TypeOrmModule.forFeature([ paciente ])],
  exports: [TypeOrmModule],
  providers: [PacienteService],
})
export class PacienteModule {}
