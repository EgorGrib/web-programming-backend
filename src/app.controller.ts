import {Controller, Get, Render} from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  root() {
    return;
  }
}

@Controller('/index')
export class IndexController {

  @Get()
  @Render('index')
  root() {
    return;
  }
}

@Controller('/ipad')
export class IpadController {

  @Get()
  @Render('ipad')
  ipad() {
    return;
  }
}

@Controller('/iphone')
export class IphoneController {

  @Get()
  @Render('iphone')
  iphone() {
    return;
  }
}

@Controller('/macbook')
export class MacbookController {

  @Get()
  @Render('macbook')
  macbook() {
    return;
  }
}

@Controller('/support')
export class SupportController {

  @Get()
  @Render('support')
  support() {
    return;
  }
}

@Controller('/watch')
export class WatchController {

  @Get()
  @Render('watch')
  watch() {
    return;
  }
}