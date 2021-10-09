import { NoticiasService } from 'src/noticias/noticias.service';
export declare class EditarNoticiaService {
    private noticias;
    constructor(noticias: NoticiasService);
    Editar(id: any, user: any): Promise<{
        sucess: boolean;
    }>;
    Concluir(id: any, user: any): Promise<{
        sucess: boolean;
    }>;
    getAllByUser(user: any): Promise<import("../noticias/noticias.model").Noticia[]>;
}
