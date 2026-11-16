import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelDto } from './create-travel.dto.js';

export class UpdateTravelDto extends PartialType(CreateTravelDto) {}
