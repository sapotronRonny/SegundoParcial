import { Module } from '@nestjs/common';
import { TipoDeExamenService } from './tipo_de_examen.service';
import { TipoDeExamenGateway } from './tipo_de_examen.gateway';

@Module({
  providers: [TipoDeExamenGateway, TipoDeExamenService],
})
export class TipoDeExamenModule {}
