import { Expose } from 'class-transformer';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateClientDto {
  @IsString()
  @MaxLength(30)
  @IsOptional()
  @Expose()
  name?: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  @Expose()
  surname?: string;
}
