import { Injectable } from '@nestjs/common';
import { CreateUsdToolDto } from './dto/create-usd_tool.dto';
import { UpdateUsdToolDto } from './dto/update-usd_tool.dto';

@Injectable()
export class UsdToolService {
  create(createUsdToolDto: CreateUsdToolDto) {
    return 'This action adds a new usdTool';
  }

  findAll() {
    return `This action returns all usdTool`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usdTool`;
  }

  update(id: number, updateUsdToolDto: UpdateUsdToolDto) {
    return `This action updates a #${id} usdTool`;
  }

  remove(id: number) {
    return `This action removes a #${id} usdTool`;
  }
}
