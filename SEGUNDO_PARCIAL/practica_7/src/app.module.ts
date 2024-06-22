import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { PacienteModule } from './paciente/paciente.module';
import { ResultadoModule } from './resultado/resultado.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    port: +process.env.PORT,
    url: process.env.DB_URL,
    autoLoadEntities: true,
    synchronize: false,
  }),
    PacienteModule,
    ResultadoModule,
    TestModule,],

    exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
