import { Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonService } from './common.service';
import { DeviceIdDto } from './dto/device-id.dto';

@ApiTags('common')
@Controller(`eco-vacs/v1/common`)
export class CommonController {
  constructor(private commonService: CommonService) {}

  @Get('/device-id')
  @ApiResponse({
    description: 'get node-machine device id',
    status: HttpStatus.OK,
  })
  @ApiOperation({
    description: '로그인에 필요한 deviceId를 조회 힌다.',
  })
  async getDeviceId(): Promise<DeviceIdDto> {
    return this.commonService.getDeviceId();
  }

  @Get('country-code')
  @ApiQuery({
    name: 'name',
    description: 'kr',
    type: String,
    example: 'kr',
  })
  async getCountryCode(@Query('name') name: string) {
    return this.commonService.getCountries();
  }
}
