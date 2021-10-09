import { ConflictException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { RedatorService } from 'src/redator/redator.service';
import { CriarNoticiaDto } from './dto/criar-noticia.dto';
import { noticiasRepository } from './noticias.repository';

@Injectable()
export class NoticiasService {
    constructor(
        private readonly noticia:noticiasRepository,
        private readonly redator: RedatorService
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

    async getAllByUser(user){
    const user1 = await this.redator.findOne(user.id)
        return await this.noticia.find({user:user1})
    }

    async iniciarEdicao(id,user){   
        const user1 = await this.redator.findOne(user.id)
        const {affected} = await this.noticia.update({id:id},{user})
        if(affected == 1){
            return {sucess:true}
        }else{
            throw new ConflictException("não é possível editar a noticia")
        }
    }

    async terminarEdicao(id,user){   
        const user1 = await this.redator.findOne(user.id)
        const {affected} = await this.noticia.update({id:id, user:user1},{UpdateAt:new Date()})
        if(affected == 1){
            return {sucess:true}
        }else{
            throw new ConflictException("não é possível editar a noticia")
        }
    }
}
