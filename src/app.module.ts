
import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TravelModule } from './travel/travel.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [TravelModule,
    ConfigModule.forRoot({
    isGlobal: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
