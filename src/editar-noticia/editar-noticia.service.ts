import { Injectable } from '@nestjs/common';
import { NoticiasService } from 'src/noticias/noticias.service';

@Injectable()
export class EditarNoticiaService {

    constructor(private noticias:NoticiasService){}
   
   async Editar(id,user){
        return await this.noticias.iniciarEdicao(id,user)
   } 

   async Concluir(id,user){
      return this.noticias.terminarEdicao(id,user)
   }

   async getAllByUser(user){    
    return this.noticias.getAllByUser(user)
   }
}
