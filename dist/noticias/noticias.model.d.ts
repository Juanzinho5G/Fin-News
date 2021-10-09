import { Redator } from 'src/redator/redator.model';
export declare class Noticia {
    id: number;
    titulo: string;
    descricao: string;
    texto_completo: string;
    versao: number;
    user: Redator;
    UpdateAt: Date;
}
