import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommonService } from './common.service';
import { DeviceIdDto } from './dto/device-id.dto';

@Controller('eco-vas/common')
export class CommonController {
  constructor(private commonService: CommonService) {}
  @Get('/device-id')
  @ApiResponse({
    description: 'get device id',
    status: HttpStatus.OK,
  })
  @ApiOperation({
    description: '로그인에 필요한 deviceId를 조회 힌다.',
  })
  async getDeviceId(): Promise<DeviceIdDto> {
    return this.commonService.getDeviceId();
  }

  @Get('country-code')
  async getCountryCode() {
    return this.commonService.getCountries();
  }
}
