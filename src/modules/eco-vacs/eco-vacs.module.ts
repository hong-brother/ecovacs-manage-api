import { Module } from '@nestjs/common';
import { EcoVacsController } from './eco-vacs.controller';

@Module({
  controllers: [EcoVacsController],
})
export class EcoVacsModule {}
