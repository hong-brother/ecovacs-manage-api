import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { machineIdSync } from 'node-machine-id';
import ecovacsDeebot, { EcoVacsAPI } from 'ecovacs-deebot';
import { DeviceIdDto } from './dto/device-id.dto';
import { Builder } from 'builder-pattern';
import { CountryCodeType } from '../../codes/country-code.type';
import { ConnectionDto } from '../login/dto/connection.dto';
import { AppConfig } from '../../config/app.config';

@Injectable()
export class CommonService {
  private logger = new Logger(CommonService.name);
  private api;

  constructor(private appConfig: AppConfig) {}

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

  // connectionEcoVacs(
  //   deviceId: string,
  //   countryCode: string,
  //   hashPassword: string,
  //   email: string,
  // ) {
  //   const continent =
  //     ecovacsDeebot.countries[
  //       countryCode.toUpperCase()
  //     ].continent.toLowerCase();
  //   const api = new EcoVacsAPI(deviceId, countryCode, continent);
  //   api.connect(email, hashPassword);
  //   return api;
  // }

  async getDeviceInfo() {
    try {
      if (!this.appConfig.isCreateEcoVacsInstance) {
        throw new Error('You Must login');
      }
      const api = this.appConfig.ecoVacsInstance;
      return api.devices();
    } catch (e) {
      this.logger.log(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getDeviceStatus() {
    try {
      if (!this.appConfig.isCreateEcoVacsInstance) {
        throw new Error('You Must login');
      }
      const api = this.appConfig.ecoVacsInstance;
      const deivce = await api.devices();
      switch (await deivce[0]['status']) {
        case 0:
          return 'ready';
        default:
          return 'None';
      }
    } catch (e) {
      this.logger.log(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
