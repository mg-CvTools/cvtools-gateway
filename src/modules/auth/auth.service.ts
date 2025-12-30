import { Injectable } from '@nestjs/common';
import { RabbitMQService } from '../../common/rabbitmq/rabbitmq.service';
import { AuthPatterns } from '../../common/rabbitmq/rabbitmq.constants';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  async login(loginDto: LoginDto) {
    return this.rabbitMQService.sendToAuth(AuthPatterns.LOGIN, loginDto);
  }

  async register(registerDto: RegisterDto) {
    return this.rabbitMQService.sendToAuth(AuthPatterns.REGISTER, registerDto);
  }
}
