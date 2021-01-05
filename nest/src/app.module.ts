import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishesModule } from './fishes/fishes.module';

@Module({
	imports: [TypeOrmModule.forRoot(), FishesModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
