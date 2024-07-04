import { Module } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { ResultadoGateway } from './resultado.gateway';

@Module({
  providers: [ResultadoGateway, ResultadoService],
})
export class ResultadoModule {}
