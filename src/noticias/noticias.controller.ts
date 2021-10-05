import { Body, Controller, Get, Param, Post, Put, UseGuards  } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/ jwt-auth.guard';
import { CriarNoticiaDto } from './dto/criar-noticia.dto';
import { NoticiasService } from './noticias.service';

@UseGuards(JwtAuthGuard)    
@Controller('noticias')
export class NoticiasController {
    constructor(private noticia:NoticiasService){}

    @Post('/criar')
    async criarNoticia(@Body() body:CriarNoticiaDto){
    return await this.noticia.criarNoticia(body)
    }
    
    @Put('/:id')
    async editarNoticia(@Param('id')id, @Body()body:CriarNoticiaDto){
        return await this.noticia.editarNoticia(id,body);
    }

    @Get("/listar")
    async listarTodas(){
        return await this.noticia.listarTodas()
    }

    @Get(":id")
    async selecionarNoticia(@Param('id')id:string){
        return await this.noticia.Selecionar(id);
    }
}
