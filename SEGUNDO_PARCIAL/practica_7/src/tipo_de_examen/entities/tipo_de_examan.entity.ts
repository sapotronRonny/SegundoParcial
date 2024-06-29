import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Resultado } from 'src/resultado/entities/resultado.entity';
import { Entity, Column,OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'tipodeexaman' })
export class TipoDeExaman {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
      Descripcion: string;
  
  @Column()
  @Field(() => String)
      Indicaciones: string; 

  @OneToMany(
    () => Resultado, 
    resultado => resultado.tipodeexaman,
    {cascade: true})
  resultado: Resultado[];

  @Column()
  @Field(() => String)
  estado: string;
}
