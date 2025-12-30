import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AUTH_SERVICE } from './rabbitmq.constants';

@Injectable()
export class RabbitMQService {
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}

  async sendToAuth<T>(pattern: string, data: any): Promise<T> {
    return firstValueFrom(this.authClient.send<T>(pattern, data));
  }
}
