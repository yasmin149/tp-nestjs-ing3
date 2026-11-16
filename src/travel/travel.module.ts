import { Module } from '@nestjs/common';
import { TravelService } from './travel.service.js';
import { TravelController } from './travel.controller.js';

@Module({
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
