import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class EcoVacsLoginInfo {
  @ApiProperty({
    name: 'version',
    type: String,
    description: 'Get the version of the package',
  })
  @IsString()
  @Expose({ name: 'version' })
  version: string;

  @ApiProperty({
    name: 'deviceId',
    type: String,
    description: 'the id of the device',
  })
  @IsString()
  @Expose({ name: 'deviceId' })
  deviceId: string;

  @ApiProperty({
    name: 'country',
    type: String,
    description:
      'the country code of the country where the Ecovacs account is registered',
  })
  @IsString()
  @Expose({ name: 'country' })
  country: string;

  @ApiProperty({
    name: 'authDomain',
    type: String,
    description: 'the domain for the authentication API',
  })
  @IsString()
  @Expose({ name: 'authDomain' })
  authDomain: string;

  @ApiProperty({
    name: 'resource',
    type: String,
    description: 'the resource of the vacuum',
  })
  @IsString()
  @Expose({ name: 'resource' })
  resource: string;

  @ApiProperty({
    name: 'uid',
    type: String,
    description: '',
  })
  @IsString()
  @Expose({ name: 'uid' })
  uid: string;

  @ApiProperty({
    name: 'authCode',
    type: String,
    description: 'authentication',
  })
  @IsString()
  @Expose({ name: 'authCode' })
  authCode: string;

  @ApiProperty({
    name: 'userAccessToken',
    type: String,
    description: 'access token',
  })
  @IsString()
  @Expose({ name: 'user_access_token' })
  userAccessToken: string;
}
