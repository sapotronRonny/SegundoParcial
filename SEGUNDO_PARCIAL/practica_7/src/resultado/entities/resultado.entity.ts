import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { TipoDeExaman } from 'src/tipo_de_examen/entities/tipo_de_examan.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'resultado' })
export class Resultado {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
      Resultado_test: string;

  @Column()
  @Field(() => Int)
      valor_paga: number;

  @Column()
  @Field(() => String)
      observaciones: string;
  

  @ManyToOne(
      () => Paciente, 
      paciente => paciente.resultado,
      {eager: true})
     paciente: Paciente;

  @ManyToOne(
      () => TipoDeExaman, 
      tipodeexaman => tipodeexaman.resultado,
      {eager: true})
      tipodeexaman: TipoDeExaman;

  @Column('text')
  @Field(() => String)
      estado: string;
}
