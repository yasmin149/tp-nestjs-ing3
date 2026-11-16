import { Module } from '@nestjs/common';
import { TravelService } from './travel.service.js';
import { TravelController } from './travel.controller.js';
import { ConfigModule } from '@nestjs/config';
@Module({
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
