import { Controller, Get, Post, Body, Query, UsePipes } from '@nestjs/common';
import { SanitizePipe } from 'src/pipes/sanitize.pipe';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './entities/city.entity';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post('/register')
  // discards any props not present in the DTO
  @UsePipes(new SanitizePipe(CreateCityDto))
  registerCity(@Body() createCityDto: CreateCityDto): Promise<City> {
    return this.cityService.registerCity(createCityDto);
  }

  @Get()
  searchCity(@Query('name') name: string): Promise<City> {
    return this.cityService.findCityByName(name);
  }

  @Get('/state')
  searchState(@Query('name') name: string): Promise<City[]> {
    return this.cityService.findCityByState(name);
  }
}
