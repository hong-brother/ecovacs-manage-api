import { Test, TestingModule } from '@nestjs/testing';
import { EcovasController } from './ecovas.controller';

describe('EcovasController', () => {
  let controller: EcovasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcovasController],
    }).compile();

    controller = module.get<EcovasController>(EcovasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
