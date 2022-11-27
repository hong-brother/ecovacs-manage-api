import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeviceIdDto {
  @ApiProperty({
    name: 'deviceId',
    description: 'eco-vas Id',
  })
  @IsString()
  deviceId: string;
}
