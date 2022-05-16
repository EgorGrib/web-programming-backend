import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DeviceModule } from './device/device.module';
import { BasketModule } from './basket/basket.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule.forRoot({
    connectionURI: process.env.ConnectionURI,
    apiKey: process.env.SecretApiKey,
    appInfo: {
      appName: "applemarket",
      apiDomain: "http://localhost:3000",
      websiteDomain: "https://applemarketru.herokuapp.com",
      apiBasePath: "/auth",
      websiteBasePath: "/auth",
    }
  }), UserModule, DeviceModule, BasketModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
