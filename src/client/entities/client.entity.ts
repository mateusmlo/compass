import { City } from 'src/city/entities/city.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genders } from '../enums/genders.enum';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 50 })
  surname: string;

  @Column({ enum: Genders })
  gender: Genders;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column()
  age: number;

  @ManyToOne(() => City)
  @JoinColumn()
  city: City;
}
