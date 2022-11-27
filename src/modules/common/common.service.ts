import { Injectable } from '@nestjs/common';
import { machineIdSync } from 'node-machine-id';
import { EcoVacsAPI } from 'ecovacs-deebot';
import { DeviceIdDto } from './dto/device-id.dto';
import { Builder } from 'builder-pattern';

@Injectable()
export class CommonService {
  async getDeviceId(): Promise<DeviceIdDto> {
    // The first vacuum from your account
    const deviceId = EcoVacsAPI.getDeviceId(machineIdSync(), 0);
    return Builder(DeviceIdDto).deviceId(deviceId).build();
  }

  async getCountries() {
    return 'kr';
  }
}
