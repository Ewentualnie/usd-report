import { Test, TestingModule } from '@nestjs/testing';
import { UsdToolService } from './usd_tool.service';

describe('UsdToolService', () => {
  let service: UsdToolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsdToolService],
    }).compile();

    service = module.get<UsdToolService>(UsdToolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
