import { CriarNoticiaDto } from './dto/criar-noticia.dto';
import { NoticiasService } from './noticias.service';
export declare class NoticiasController {
    private noticia;
    constructor(noticia: NoticiasService);
    criarNoticia(body: CriarNoticiaDto): Promise<import("./noticias.model").Noticia>;
    editarNoticia(id: any, body: CriarNoticiaDto): Promise<any>;
    listarTodas(): Promise<import("./noticias.model").Noticia[]>;
    selecionarNoticia(id: string): Promise<import("./noticias.model").Noticia>;
}
