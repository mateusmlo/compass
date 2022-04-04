import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  Query,
  Req,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { SanitizePipe } from 'src/pipes/sanitize.pipe';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('/register')
  @UsePipes(new SanitizePipe(CreateClientDto))
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientService.createClient(createClientDto);
  }

  @Get()
  searchClientByName(@Req() req: Request): Promise<Client> {
    return this.clientService.findClientByFullName(req.query);
  }

  @Get('/:id')
  searchClientByID(@Param('id') id: number): Promise<Client> {
    return this.clientService.findClientByID(id);
  }

  @Put('/update/:id')
  @UsePipes(new SanitizePipe(UpdateClientDto))
  updateClientName(
    @Param('id') id: number,
    @Body() UpdateClientDto: UpdateClientDto,
  ): Promise<Client> {
    return this.clientService.updateClientName(id, UpdateClientDto);
  }

  @Delete('/delete/:id')
  deleteClient(@Param('id') id: number) {
    return this.clientService.deleteClient(id);
  }
}
