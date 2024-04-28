import { Module } from '@nestjs/common';
import { SalleService } from './salle.service';
import { SalleController } from './salle.controller';
import { Salle } from './entities/salle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Salle])],
  controllers: [SalleController],
  providers: [SalleService],
})
export class SalleModule {}
