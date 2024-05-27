import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsdToolService } from './usd_tool.service';
import { CreateUsdToolDto } from './dto/create-usd_tool.dto';
import { UpdateUsdToolDto } from './dto/update-usd_tool.dto';

@Controller('usd-tool')
export class UsdToolController {
  constructor(private readonly usdToolService: UsdToolService) {}

  @Post()
  create(@Body() createUsdToolDto: CreateUsdToolDto) {
    return this.usdToolService.create(createUsdToolDto);
  }

  @Get()
  findAll() {
    return this.usdToolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usdToolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsdToolDto: UpdateUsdToolDto) {
    return this.usdToolService.update(+id, updateUsdToolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usdToolService.remove(+id);
  }
}
