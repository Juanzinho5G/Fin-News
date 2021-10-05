import {Column,Entity, PrimaryGeneratedColumn} from 'typeorm';

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
}