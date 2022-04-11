import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [UserModule, DeviceModule, BasketModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
