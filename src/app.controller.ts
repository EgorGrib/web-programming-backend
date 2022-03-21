import {Controller, Get, Render} from '@nestjs/common';

@Controller()
export class AppController {

  @Get(['/', '/index'])
  @Render('index')
  getIndexPage() {
    return { isLoggedIn : Math.random() < 0.5 };
  }

  @Get('/ipad')
  @Render('ipad')
  getIpadPage() {
    return { isLoggedIn : Math.random() < 0.5 };
  }

  @Get('/iphone')
  @Render('iphone')
  getIphonePage() {
    return { isLoggedIn : Math.random() < 0.5 };
  }

  @Get('/macbook')
  @Render('macbook')
  getMacbookPage() {
    return { isLoggedIn : Math.random() < 0.5 };
  }

  @Get('/support')
  @Render('support')
  getSupportPage() {
    return { isLoggedIn : Math.random() < 0.5 };
  }

  @Get('/watch')
  @Render('watch')
  getWatchPage() {
    return { isLoggedIn : Math.random() < 0.5 };
  }

}
