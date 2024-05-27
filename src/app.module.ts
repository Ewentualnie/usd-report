import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { UsdToolModule } from './usd_tool/usd_tool.module';

@Module({
  imports: [ReportModule, UsdToolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
