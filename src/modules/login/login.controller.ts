import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ConnectionDto } from './dto/connection.dto';
import { LoginService } from './login.service';

@ApiTags('login')
@Controller('eco-vacs/v1/login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('connection')
  @ApiBody({ type: ConnectionDto })
  async ecoVacsLogin(@Body() connectionDto: ConnectionDto) {
    return this.loginService.login(connectionDto);
  }
}
