import { RedatorService } from 'src/redator/redator.service';
import { CriarNoticiaDto } from './dto/criar-noticia.dto';
import { noticiasRepository } from './noticias.repository';
export declare class NoticiasService {
    private readonly noticia;
    private readonly redator;
    constructor(noticia: noticiasRepository, redator: RedatorService);
    criarNoticia(newNoticia: CriarNoticiaDto): Promise<import("./noticias.model").Noticia>;
    editarNoticia(id: any, noticia: CriarNoticiaDto): Promise<any>;
    listarTodas(): Promise<import("./noticias.model").Noticia[]>;
    Selecionar(id: any): Promise<import("./noticias.model").Noticia>;
    getAllByUser(user: any): Promise<import("./noticias.model").Noticia[]>;
    iniciarEdicao(id: any, user: any): Promise<{
        sucess: boolean;
    }>;
    terminarEdicao(id: any, user: any): Promise<{
        sucess: boolean;
    }>;
}
