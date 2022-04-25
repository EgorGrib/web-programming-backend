import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DeviceModule } from './device/device.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, DeviceModule, BasketModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
