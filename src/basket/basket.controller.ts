import { Controller, Get, Param, Post } from '@nestjs/common';
import {BasketService} from "./basket.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('basket')
@Controller('basket')
export class BasketController {
    constructor(private readonly basketService: BasketService) {}

    @ApiOperation({
        summary: 'Get a basket of user by id of user'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Get()
    getBasketOfUser(@Param('User') id: number) {
        return this.basketService.basketOfUser(id);
    }

    @ApiOperation({
        summary: 'Create a user basket by specifying a list of devices and id of user'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Post()
    createBasket(@Param('User') userId: number, @Param('Device') deviceId: number[]) {
        return this.basketService.createBasket(userId, deviceId);
    }
}
