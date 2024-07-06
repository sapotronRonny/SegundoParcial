import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PacienteModule } from './paciente/paciente.module';
import { ResultadoModule } from './resultado/resultado.module';
// import { TipoDeExamenModule } from './tipo_de_examen/tipo_de_examen.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';


@Module({
  imports: [
  

  // TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     url: process.env.DB_URL,
  //     autoLoadEntities: true,
  //     synchronize: false,
  //   }),
   
  ResultadoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
