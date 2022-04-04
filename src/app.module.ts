import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { ClientModule } from './client/client.module';
import { dbConfig } from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get<number>('pgPort'),
        username: configService.get<string>('pgUser'),
        password: configService.get<string>('pgPassword'),
        database: configService.get<string>('db'),
        host: configService.get<string>('pgHost'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CityModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
