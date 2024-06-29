import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Resultado } from 'src/resultado/entities/resultado.entity';
import { Entity, Column,OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'paciente' })
export class Paciente {
  @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
        nombre: string;
    
    @Column()
    @Field(() => Int)
        CI_paciente: number; 

    @OneToMany(
      () => Resultado, 
      resultado => resultado.paciente,
      {cascade: true})
    resultado: Resultado[];
 
    @Column()
    @Field(() => String)
    estado: string;
}
