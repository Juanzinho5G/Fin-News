import { Redator } from 'src/redator/redator.model';
import { EditarNoticiaService } from './editar-noticia.service';
export declare class EditarNoticiaController {
    private edit;
    constructor(edit: EditarNoticiaService);
    Editar(id: any, user: Redator): Promise<{
        sucess: boolean;
    }>;
    Concluir(id: any, user: Redator): Promise<{
        sucess: boolean;
    }>;
    getUserEditando(user: Redator): Promise<import("../noticias/noticias.model").Noticia[]>;
}
