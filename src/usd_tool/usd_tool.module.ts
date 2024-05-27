import { Module } from '@nestjs/common';
import { UsdToolService } from './usd_tool.service';
import { UsdToolController } from './usd_tool.controller';

@Module({
  controllers: [UsdToolController],
  providers: [UsdToolService]
})
export class UsdToolModule {}
