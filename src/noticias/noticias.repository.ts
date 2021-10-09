
import { NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CriarNoticiaDto } from "./dto/criar-noticia.dto";
import { Noticia } from "./noticias.model";

@EntityRepository(Noticia)
export class noticiasRepository extends Repository<Noticia> {
    
    async criarNoticia(newNoticia:CriarNoticiaDto){
        
        const {titulo,descricao,texto_completo} = newNoticia
        let noticia = this.create({
            titulo,
            descricao,
            texto_completo
        })

        return await this.save(noticia)
    }

    async atualizarNoticia(id,noticia:CriarNoticiaDto){
        let noti;
        try{
            noti = await this.findOneOrFail(id)
        }catch(erro){
            throw new NotFoundException();
        }
        this.merge(noti,noticia);
        return await this.save(noti)
    }

    async ListarTodas(){
        return this.createQueryBuilder('noticia').getMany()
    }

    async SelecionarPorId(id){
        try{
           let noticia = await this.findOneOrFail(id)
            return noticia;
        }catch(erro){
            throw  new NotFoundException();
        }
    }
}