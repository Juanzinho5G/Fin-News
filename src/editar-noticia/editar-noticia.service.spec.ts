import { Test, TestingModule } from '@nestjs/testing';
import { EditarNoticiaService } from './editar-noticia.service';

describe('EditarNoticiaService', () => {
  let service: EditarNoticiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditarNoticiaService],
    }).compile();

    service = module.get<EditarNoticiaService>(EditarNoticiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
