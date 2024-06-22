import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: 'Paciente' })
export class Paciente {
    @PrimaryGeneratedColumn('uuid')
    id_paciente: string;

    @Column('text', {
        unique: false,
    })
    CI_paciente: string;

    @Column('text', {
        unique: false,
    })
    nombre: string;

    @Column('text', {
        unique: false,
    })
    estado: boolean;

    Paciente?: Paciente[]
}