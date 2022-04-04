import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { DateTime } from 'luxon';
import { CityService } from 'src/city/city.service';
import { City } from 'src/city/entities/city.entity';
import { ClientSearch } from './enums/client-search.enum';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private repo: Repository<Client>,
    private cityService: CityService,
  ) {}

  async createClient(createClientDto: CreateClientDto) {
    // eslint-disable-next-line prefer-const
    let { name, surname, gender, birthDate, city } = createClientDto;
    //from "dd-mm-yyyy" string to JS Date object
    const formatBirthdate = DateTime.fromFormat(
      birthDate,
      'dd/LL/yyyy',
    ).toJSDate();

    // calculates client's age
    const clientAge = DateTime.now()
      .diff(DateTime.fromJSDate(formatBirthdate), 'years')
      .toHuman({ listStyle: 'short', maximumFractionDigits: 2 })
      .replace(' years', '');

    const clientCity = await this.cityService.findCityByName(city);

    const newClient = this.repo.create({
      name,
      surname,
      gender,
      birthDate: formatBirthdate,
      age: Math.floor(parseFloat(clientAge)),
      city: clientCity,
    });

    return await this.repo.save(newClient);
  }

  async findClientByFullName(query: any): Promise<Client> {
    const isValidQuery = Object.keys(query).every((v) => ClientSearch[v]);

    if (!isValidQuery)
      throw new BadRequestException('Invalid search parameters provided.');

    const client = await this.repo.findOne({
      where: {
        name: Like(query['name']),
        surname: Like(query['surname']),
      },
    });

    if (client === null) throw new NotFoundException('Client not found.');

    return client;
  }

  async findClientByID(id: number): Promise<Client> {
    const client = await this.repo.findOne({
      where: {
        id,
      },
    });

    if (client === null) throw new NotFoundException('Client not found.');

    return client;
  }

  async updateClientName(
    id: number,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const clientToRename = await this.findClientByID(id);

    if (updateClientDto.name !== undefined)
      clientToRename.name = updateClientDto.name;

    if (updateClientDto.surname !== undefined)
      clientToRename.surname = updateClientDto.surname;

    return await this.repo.save(clientToRename);
  }

  async deleteClient(id: number) {
    const wasDeleted = (await this.repo.delete({ id })).affected;

    if (wasDeleted === 0)
      throw new NotFoundException('Client not found. Delete failed.');

    return { message: 'Client deleted succesfully' };
  }
}
