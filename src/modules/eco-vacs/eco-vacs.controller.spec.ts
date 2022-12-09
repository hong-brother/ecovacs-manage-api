import { Test, TestingModule } from '@nestjs/testing';
import { EcoVacsController } from './eco-vacs.controller';

describe('EcoVacsController', () => {
  let controller: EcoVacsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcoVacsController],
    }).compile();

    controller = module.get<EcoVacsController>(EcoVacsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
