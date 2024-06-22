import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Resultado } from 'src/resultado/entities/resultado.entity'


@Entity({ name: 'Paciente' })
export class paciente {
    @PrimaryGeneratedColumn()
    id_paciente: number;

    @Column()
        CI_paciente: string;
    
    @Column()
        nombre: string; 

    @OneToMany(() => Resultado, resultado => resultado.paciente)
        resultado: Resultado[];
       


    @Column()
    estado: string;
    
}