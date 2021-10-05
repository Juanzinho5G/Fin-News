import { Test, TestingModule } from '@nestjs/testing';
import { RedatorService } from './redator.service';

describe('RedatorService', () => {
  let service: RedatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedatorService],
    }).compile();

    service = module.get<RedatorService>(RedatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
