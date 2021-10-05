import { Injectable } from '@nestjs/common';
import { CriarNoticiaDto } from './dto/criar-noticia.dto';
import { noticiasRepository } from './noticias.repository';

@Injectable()
export class NoticiasService {
    constructor(
        private readonly noticia:noticiasRepository
        ){}

    async criarNoticia(newNoticia: CriarNoticiaDto){
       return  await this.noticia.criarNoticia(newNoticia);
    }

    async editarNoticia(id,noticia:CriarNoticiaDto){
        return await this.noticia.atualizarNoticia(id,noticia)
    }

    async listarTodas(){
        return await this.noticia.ListarTodas()
    }

    async Selecionar(id){
        return await this.noticia.SelecionarPorId(id)
    }
}
