import {Controller, Get, Render} from '@nestjs/common';
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
@Controller()
export class AppController {

  @Get(['/', '/index'])
  @Render('index')
  getIndexPage() {
    return { };
  }

  @Get('/ipad')
  @Render('ipad')
  async getIpadPage() {
    const device = await prisma.device.findUnique({where: {
        id: 5
    }});
    return {
      isLoggedIn: false,
      name: device.title,
      description: device.description,
      price: device.price
    };
  }

  @Get('/iphone')
  @Render('iphone')
  async getIphonePage() {
    const device = await prisma.device.findUnique({where: {
        id: 6
    }});
    return {
      isLoggedIn : false,
      name: device.title,
      description: device.description,
      price: device.price
    };
  }

  @Get('/macbook')
  @Render('macbook')
  async getMacbookPage() {
    const device = await prisma.device.findUnique({where: {
        id: 7
      }});
    return {
      isLoggedIn : false,
      name: device.title,
      description: device.description,
      price: device.price
    };
  }

  @Get('/support')
  @Render('support')
  getSupportPage() {
    return { isLoggedIn: false };
  }

  @Get('/watch')
  @Render('watch')
  getWatchPage() {
    return { isLoggedIn: false };
  }

}
