import {Column,Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Redator{
    
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nome:string
    @Column({unique:true})
    email:string
    @Column()
    senha:string
}