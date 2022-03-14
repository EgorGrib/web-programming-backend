import { Module } from '@nestjs/common';
import {
    AppController,
    IndexController,
    IpadController,
    IphoneController,
    MacbookController,
    SupportController,
    WatchController,
} from './app.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    IndexController,
    IpadController,
    IphoneController,
    MacbookController,
    SupportController,
    WatchController,
  ],
  providers: [],
})
export class AppModule {}
