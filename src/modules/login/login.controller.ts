import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ConnectionDto } from './dto/connection.dto';
import { LoginService } from './login.service';

@Controller('eco-vas/login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post('connection')
  @ApiBody({ type: ConnectionDto })
  async getDevice(@Body() connectionDto: ConnectionDto) {
    return this.loginService.tryConnection(connectionDto);
  }
}
