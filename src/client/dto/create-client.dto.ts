import { Expose } from 'class-transformer';
import { IsDate, IsEnum, IsNumber, IsString, MaxLength } from 'class-validator';
import { City } from 'src/city/entities/city.entity';
import { Genders } from '../enums/genders.enum';

export class CreateClientDto {
  @IsString()
  @MaxLength(30)
  @Expose()
  name: string;

  @IsString()
  @MaxLength(50)
  @Expose()
  surname: string;

  @IsEnum(Genders, { message: 'Invalid gender' })
  @Expose()
  gender: Genders;

  @Expose()
  birthDate: string;

  @Expose()
  city: string;
}
