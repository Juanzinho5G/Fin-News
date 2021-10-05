import { CriarNoticiaDto } from './dto/criar-noticia.dto';
import { noticiasRepository } from './noticias.repository';
export declare class NoticiasService {
    private readonly noticia;
    constructor(noticia: noticiasRepository);
    criarNoticia(newNoticia: CriarNoticiaDto): Promise<import("./noticias.model").Noticia>;
    editarNoticia(id: any, noticia: CriarNoticiaDto): Promise<any>;
    listarTodas(): Promise<import("./noticias.model").Noticia[]>;
    Selecionar(id: any): Promise<import("./noticias.model").Noticia>;
}
