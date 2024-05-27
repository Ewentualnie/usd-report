import { PartialType } from '@nestjs/mapped-types';
import { CreateUsdToolDto } from './create-usd_tool.dto';

export class UpdateUsdToolDto extends PartialType(CreateUsdToolDto) {}
