import { Module } from '@nestjs/common';
import { TipoDeExamenService } from './tipo_de_examen.service';
import { TipoDeExamenResolver } from './tipo_de_examen.resolver';
import { TipoDeExaman } from './entities/tipo_de_examan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [TipoDeExamenResolver, TipoDeExamenService],
  imports: [ TypeOrmModule.forFeature([TipoDeExaman]) ],
  exports: [ TypeOrmModule ],
})
export class TipoDeExamenModule {}
