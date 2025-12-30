import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { RabbitMQModule } from './common/rabbitmq/rabbitmq.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule,
     RabbitMQModule, 
     HealthModule, 
     AuthModule
    ],
})
export class AppModule {}
