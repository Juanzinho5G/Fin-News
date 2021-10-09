import { Test, TestingModule } from '@nestjs/testing';
import { EditarNoticiaController } from './editar-noticia.controller';

describe('EditarNoticiaController', () => {
  let controller: EditarNoticiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditarNoticiaController],
    }).compile();

    controller = module.get<EditarNoticiaController>(EditarNoticiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
