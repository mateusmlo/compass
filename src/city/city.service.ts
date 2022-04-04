import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(@InjectRepository(City) private repo: Repository<City>) {}

  async registerCity(createCityDto: CreateCityDto): Promise<City> {
    const isRegistered = await this.repo.count({
      where: {
        ...createCityDto,
      },
    });

    // avoid unique key constraint violation
    if (isRegistered === 1)
      throw new ConflictException(
        'A city with this name has already been registered',
      );

    const newCity = this.repo.create(createCityDto);

    return await this.repo.save(newCity);
  }

  async findCityByName(name: string): Promise<City> {
    const city = await this.repo.findOne({
      where: {
        name: Like(name),
      },
    });

    if (city === null) throw new NotFoundException('City not found.');

    return city;
  }

  async findCityByState(state: string): Promise<City[]> {
    const cities = await this.repo.find({
      where: {
        state: Like(state),
      },
    });

    if (cities.length === 0)
      throw new NotFoundException('No cities were found with provided state');

    return cities;
  }
}
