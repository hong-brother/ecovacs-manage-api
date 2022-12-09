import { ApiProperty } from '@nestjs/swagger';
import { isEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class ConnectionDto {
  @ApiProperty({
    name: 'deviceId',
    type: String,
    description: 'deviceId',
    example: 'ef547833ddc50f756e41529ec7e71f26',
  })
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @ApiProperty({
    name: 'countryCode',
    type: String,
    description: 'country-code',
    example: 'kr',
  })
  @IsString()
  @IsNotEmpty()
  countryCode: string;

  @ApiProperty({
    name: 'continent',
    type: String,
    description: '',
    example: '',
  })
  @IsString()
  @IsOptional()
  continent: string;

  @ApiProperty({
    name: 'authDomain',
    type: String,
    description: '',
    example: '',
  })
  @IsString()
  @IsOptional()
  authDomain: string;

  @ApiProperty({
    name: 'email',
    type: String,
    description: '',
    example: '',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    name: 'password',
    type: String,
    description: '',
    example: '',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
