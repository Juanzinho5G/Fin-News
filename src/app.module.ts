import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedatorModule } from './redator/redator.module';
import { NoticiasModule } from './noticias/noticias.module';
import { AuthModule } from './auth/auth.module';
import { EditarNoticiaModule } from './editar-noticia/editar-noticia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      port: 5432,
      username:'postgres',
      password:'root',
      database: 'finNews',
      autoLoadEntities:true,
      synchronize:true
    }),
    RedatorModule,
    NoticiasModule,
    AuthModule,
    EditarNoticiaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
