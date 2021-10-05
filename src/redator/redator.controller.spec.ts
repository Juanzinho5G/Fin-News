import { Test, TestingModule } from '@nestjs/testing';
import { RedatorController } from './redator.controller';

describe('RedatorController', () => {
  let controller: RedatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedatorController],
    }).compile();

    controller = module.get<RedatorController>(RedatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
