import { Repository } from "typeorm";
import { CriarNoticiaDto } from "./dto/criar-noticia.dto";
import { Noticia } from "./noticias.model";
export declare class noticiasRepository extends Repository<Noticia> {
    criarNoticia(newNoticia: CriarNoticiaDto): Promise<Noticia>;
    atualizarNoticia(id: any, noticia: CriarNoticiaDto): Promise<any>;
    ListarTodas(): Promise<Noticia[]>;
    SelecionarPorId(id: any): Promise<Noticia>;
}
