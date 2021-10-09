import { Module } from '@nestjs/common';
import { NoticiasModule } from 'src/noticias/noticias.module';
import { RedatorModule } from 'src/redator/redator.module';
import { EditarNoticiaController } from './editar-noticia.controller';
import { EditarNoticiaService } from './editar-noticia.service';

@Module({
  imports:[RedatorModule,NoticiasModule],
  controllers: [EditarNoticiaController],
  providers: [EditarNoticiaService]
})
export class EditarNoticiaModule {}
