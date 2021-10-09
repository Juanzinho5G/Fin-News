import { Get, UseGuards } from '@nestjs/common';
import { Controller, Param, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/ jwt-auth.guard';
import { GetUser } from 'src/auth/get-user-decorator';
import { Redator } from 'src/redator/redator.model';
import { EditarNoticiaService } from './editar-noticia.service';


@UseGuards(JwtAuthGuard)  
@Controller('editar-noticia')
export class EditarNoticiaController {
    
    constructor(
        private edit :EditarNoticiaService
    ){}

    @Post('/editar/:id')
    Editar(@Param('id') id, @GetUser()user:Redator){
        return this.edit.Editar(id,user)
    }

    @Post('/Concluir/:id')
    Concluir(@Param('id') id, @GetUser()user:Redator){
        return this.edit.Concluir(id,user)        
    }

    @UseGuards(JwtAuthGuard) 
    @Get('/editando/user/')
    getUserEditando(@GetUser()user:Redator){
        return this.edit.getAllByUser(user)
    }


}
