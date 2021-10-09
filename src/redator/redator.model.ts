import { Noticia } from 'src/noticias/noticias.model';
import {Column,Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

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

    @OneToMany(type => Noticia, noticia =>noticia.user,{eager:true})
    noticia:Noticia[]
}