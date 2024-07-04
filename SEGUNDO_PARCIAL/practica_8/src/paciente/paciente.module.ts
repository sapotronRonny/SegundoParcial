import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteGateway } from './paciente.gateway';

@Module({
  providers: [PacienteGateway, PacienteService],
})
export class PacienteModule {}
