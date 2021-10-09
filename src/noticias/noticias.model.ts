import { Redator } from 'src/redator/redator.model';
import {Column,Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name:'noticia'})
export class Noticia{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    titulo:string
    @Column()
    descricao:string
    @Column()
    texto_completo:string
    @Column()
    versao:number

    @ManyToOne(type => Redator, user => user.noticia)
    user:Redator

    @Column({nullable: true})
    UpdateAt:Date
}