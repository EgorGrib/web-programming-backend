import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {BasketService} from "./basket.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Basket} from "@prisma/client";
import {BasketDto} from "./dto/basket.dto";


@ApiTags('basket')
@Controller('basket')
export class BasketController {
    constructor(private readonly basketService: BasketService) {}

    @ApiOperation({
        summary: 'Get all baskets',
    })
    @Get()
    async getArticles(): Promise<Basket[]> {
        return await this.basketService.getBaskets();
    }

    @ApiOperation({
        summary: 'Get basket by id',
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid id format',
    })
    @Get(':id')
    async getBasket(@Param('id', ParseIntPipe) id: number): Promise<Basket> {
        return await this.basketService.getBasket(id);
    }

    @ApiOperation({
        summary: 'Get a basket of user by user id'
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid id format',
    })
    @Get()
    getBasketOfUser(@Param('User', ParseIntPipe) id: number) {
        return this.basketService.getBasketOfUser(id);
    }

    @ApiOperation({
        summary: 'Create a user basket by specifying a list of devices and id of user'
    })
    @ApiResponse({
        status: 201,
        description: 'Basket created',
    })
    @Post()
    createBasket(@Body() basketDto: BasketDto) {
        return this.basketService.createBasket(basketDto);
    }

    @ApiOperation({
        summary: 'Update basket by id',
    })
    @Post(':id/update')
    async updateBasket(
        @Param('id', ParseIntPipe) id: number,
        @Body() basketDto: BasketDto,
    ): Promise<Basket> {
        return await this.basketService.updateBasket(id, basketDto);
    }

    @ApiOperation({
        summary: 'Delete basket by id',
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid id format',
    })
    @Delete(':id/delete')
    async deleteArticle(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.basketService.deleteBasket(id);
    }
}