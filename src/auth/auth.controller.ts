import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NatsService } from 'src/config';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NatsService) private readonly client: ClientProxy) {}

  @Post('register')
  registerUser() {
    return this.client.send("auth_register_user", {})
  }

  @Post('login')
  loginUser() {
    return this.client.send("auth_login_user", {})
  }

  @Get('verify')
  verifyToken() {
    return this.client.send("auth_verify_token", {})
  }
}
