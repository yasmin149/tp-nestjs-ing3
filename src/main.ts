
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  const config = app.get(ConfigService);
  const port = Number(config.get<string>('PORT') ?? '3000');
  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
} 
bootstrap();
