import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NatsService } from 'src/config';
import { LoginUserDTO, RegisterUserDTO } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { Token, User } from './decorators';
import { CurrentUser } from './interfaces/current-user.interface';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NatsService) private readonly client: ClientProxy) {}

  @Post('register')
  registerUser(@Body() registerUserDTO: RegisterUserDTO) {
    try {
      return this.client.send('auth_register_user', registerUserDTO);
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Post('login')
  loginUser(@Body() loginUserDTO: LoginUserDTO) {
    try {
      return this.client.send('auth_login_user', loginUserDTO);
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyToken(@User() user: CurrentUser, @Token() token: string) {
    try {
      return { user, token };
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
