import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FishEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar', { length: 50 })
	name: string;

	@Column('varchar', { length: 200 })
	description: string;

	@Column('numeric')
	price: number;

	@Column('numeric')
	quantity: number;

	@Column('text')
	imageURL: string;
}
