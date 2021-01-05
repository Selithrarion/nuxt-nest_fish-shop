import { Module } from '@nestjs/common';
import { FishesController } from './fishes.controller';
import { FishesService } from './fishes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishEntity } from './fish.entity';

@Module({
	imports: [TypeOrmModule.forFeature([FishEntity])],
	controllers: [FishesController],
	providers: [FishesService],
})
export class FishesModule {}
