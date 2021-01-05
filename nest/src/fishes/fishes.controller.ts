import {
	Body,
	Controller,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { FishesService } from './fishes.service';
import { Pagination } from 'nestjs-typeorm-paginate/index';
import { FishEntity } from './fish.entity';
import { CreateFishDto } from './dto/create-fish.dto';

@Controller('fishes')
export class FishesController {
	constructor(private readonly fishesService: FishesService) {}

	@Get()
	getAllFishes(
		@Query('page') page: number = 1,
		@Query('limit') limit: number = 6
	): Promise<Pagination<FishEntity>> {
		return this.fishesService.getAllFishes({ page, limit });
	}

	@Post()
	createFish(@Body() createFishDto: CreateFishDto): Promise<FishEntity> {
		return this.fishesService.createFish(createFishDto);
	}
}
