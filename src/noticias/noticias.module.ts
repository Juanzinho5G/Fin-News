import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticiasController } from './noticias.controller';
import { noticiasRepository } from './noticias.repository';
import { NoticiasService } from './noticias.service';

@Module({
  imports: [TypeOrmModule.forFeature([noticiasRepository])],
  controllers: [NoticiasController],
  providers: [NoticiasService]
})
export class NoticiasModule {}
