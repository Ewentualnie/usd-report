import { Test, TestingModule } from '@nestjs/testing';
import { UsdToolController } from './usd_tool.controller';
import { UsdToolService } from './usd_tool.service';

describe('UsdToolController', () => {
  let controller: UsdToolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsdToolController],
      providers: [UsdToolService],
    }).compile();

    controller = module.get<UsdToolController>(UsdToolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
