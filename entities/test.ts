import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    col1: string;

    @Column({
        type: 'integer',
    })
    col2: number;
}
