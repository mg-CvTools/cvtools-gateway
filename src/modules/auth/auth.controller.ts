import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    // TODO: Implement via RabbitMQ
    return { message: 'Registration endpoint - not implemented yet' };
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    // TODO: Implement via RabbitMQ
    return { message: 'Login endpoint - not implemented yet' };
  }
}
