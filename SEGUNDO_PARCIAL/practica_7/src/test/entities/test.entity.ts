import { Resultado } from 'src/resultado/entities/resultado.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'test'})
export class Test {

    @PrimaryGeneratedColumn()
    id_examen: number;

    @Column()
        Descripcion: string;

    @Column()
        Indicaciones: string;

    @OneToMany(() => Resultado, registro => registro.Test)
    resultado: Resultado[];

    @Column('text')
    estado: string;
}
