import { ApiProperty } from '@nestjs/swagger';

export class EcoVacsLoginInfo {
  @ApiProperty({
    name: 'version',
    type: String,
    description: 'Get the version of the package',
  })
  version: string;

  @ApiProperty({
    name: 'deviceId',
    type: String,
    description: 'the id of the device',
  })
  deviceId: string;

  @ApiProperty({
    name: 'country',
    type: String,
    description:
      'the country code of the country where the Ecovacs account is registered',
  })
  country: string;

  @ApiProperty({
    name: 'authDomain',
    type: String,
    description: 'the domain for the authentication API',
  })
  authDomain: string;

  @ApiProperty({
    name: 'resource',
    type: String,
    description: 'the resource of the vacuum',
  })
  resource: string;

  @ApiProperty({
    name: 'uid',
    type: String,
    description: '',
  })
  uid: string;

  @ApiProperty({
    name: 'authCode',
    type: String,
    description: 'authentication',
  })
  authCode: string;

  @ApiProperty({
    name: 'userAccessToken',
    type: String,
    description: 'access token',
  })
  userAccessToken: string;

  @ApiProperty({
    name: 'passwordHash',
    type: String,
    description: 'passwordHash',
  })
  passwordHash: string;
}
