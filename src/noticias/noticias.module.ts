import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedatorModule } from 'src/redator/redator.module';
import { NoticiasController } from './noticias.controller';
import { noticiasRepository } from './noticias.repository';
import { NoticiasService } from './noticias.service';

@Module({
  imports: [TypeOrmModule.forFeature([noticiasRepository]),
  RedatorModule
],
  controllers: [NoticiasController],
  providers: [NoticiasService],
  exports: [NoticiasService]
})
export class NoticiasModule {}
