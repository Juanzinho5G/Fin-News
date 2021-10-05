import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Redator } from './redator.model';
import { RedatorController } from './redator.controller';
import { RedatorService } from './redator.service';
import { RedatorRepository } from './redator.repository';

@Module({
  imports:[TypeOrmModule.forFeature([RedatorRepository])],
  controllers: [RedatorController],
  providers: [RedatorService],
  exports:[RedatorService]
})
export class RedatorModule {}
