import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConnectionDto } from './dto/connection.dto';
import { machineIdSync } from 'node-machine-id';
import ecovacsDeebot, { EcoVacsAPI } from 'ecovacs-deebot';
import { plainToClass, plainToInstance } from 'class-transformer';
import { EcoVacsLoginInfo } from './dto/eco-vacs-login-info';

@Injectable()
export class LoginService {
  private logger = new Logger(LoginService.name);

  async login(connection: ConnectionDto) {
    try {
      const deviceId = EcoVacsAPI.getDeviceId(connection.deviceId, 0);
      const continent =
        ecovacsDeebot.countries[
          connection.countryCode.toUpperCase()
        ].continent.toLowerCase();
      const api = new EcoVacsAPI(deviceId, connection.countryCode, continent);
      const password_hash = EcoVacsAPI.md5(connection.password);
      await api.connect(connection.email, password_hash);
      return plainToInstance(EcoVacsLoginInfo, {
        ...api,
        version: api.getVersion(),
      });
    } catch (e) {
      this.logger.log(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async tryConnection(connection: ConnectionDto) {
    try {
      const countryCode = 'de'; // If it doesn't appear to work try "ww", their world-wide catchall.
      const device_id = EcoVacsAPI.getDeviceId(machineIdSync(), 0);
      const continent =
        ecovacsDeebot.countries[
          countryCode.toUpperCase()
        ].continent.toLowerCase();
      // Leave blank or use 'eco-vacs.com' for Ecovacs login
      // or use 'yeedi.com' for yeedi login (available since version 0.8.3-alpha.2)
      const authDomain = '';

      const api = new EcoVacsAPI(device_id, countryCode, continent, authDomain);
      const password_hash = EcoVacsAPI.md5(connection.password);
      if ((await api.connect(connection.email, password_hash)) === 'ready') {
        const devices = await api.devices();
        const vacuum = devices[0];
        const vacBot = api.getVacBot(
          api.uid,
          EcoVacsAPI.REALM,
          api.resource,
          api.user_access_token,
          vacuum,
          continent,
        );
        return vacuum;
      }
    } catch (e) {
      this.logger.error(e.message);
    }
  }
}
