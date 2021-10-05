import {
    IsNotEmpty, 
} from 'class-validator';

export class CriarNoticiaDto{
    @IsNotEmpty()
    titulo:string
    @IsNotEmpty()
    descricao:string
    @IsNotEmpty()
    texto_completo:string
}