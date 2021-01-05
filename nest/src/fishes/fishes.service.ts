import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FishEntity } from './fish.entity';
import { Repository } from 'typeorm';
import { CreateFishDto } from './dto/create-fish.dto';
import {
	paginate,
	Pagination,
	IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class FishesService {
	constructor(
		@InjectRepository(FishEntity)
		private readonly fishesRepository: Repository<FishEntity>
	) {}

	async getAllFishes(
		options: IPaginationOptions
	): Promise<Pagination<FishEntity>> {
		return await paginate<FishEntity>(this.fishesRepository, options);
	}
	async createFish(createFishDto: CreateFishDto): Promise<FishEntity> {
		return await this.fishesRepository.save(createFishDto);
	}
}
