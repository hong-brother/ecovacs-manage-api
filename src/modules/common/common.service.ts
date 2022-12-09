import { Injectable } from '@nestjs/common';
import { machineIdSync } from 'node-machine-id';
import { EcoVacsAPI } from 'ecovacs-deebot';
import { DeviceIdDto } from './dto/device-id.dto';
import { Builder } from 'builder-pattern';
import { CountryCodeType } from '../../codes/country-code.type';

@Injectable()
export class CommonService {
  async getDeviceId(): Promise<DeviceIdDto> {
    // The first vacuum from your account
    const deviceId = EcoVacsAPI.getDeviceId(machineIdSync(), 0);
    return Builder(DeviceIdDto).deviceId(deviceId).build();
  }

  async getCountries() {
    return Object.keys(CountryCodeType).map((name) => {
      return {
        name,
        value: CountryCodeType[name as keyof typeof CountryCodeType],
      };
    });
  }
}
