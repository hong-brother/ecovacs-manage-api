import { Module } from '@nestjs/common';
import { EcovasController } from './ecovas.controller';

@Module({
  controllers: [EcovasController]
})
export class EcovasModule {}
