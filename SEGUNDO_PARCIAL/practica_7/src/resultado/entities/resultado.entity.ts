import { paciente } from 'src/paciente/entities/paciente.entity';
import { Test } from 'src/test/entities/test.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name:'resultado' })
export class Resultado {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
        Resultado_test: string;
    
    @Column()
        valor_paga: number;
        
    @Column()
        observaciones: string;    
    

    @ManyToOne(() => paciente, paciente => paciente.resultado)
        paciente: paciente;

    @ManyToOne(() => Test, test => test.resultado)
        Test: Test;

    @Column('text')
        estado: string;
    
}