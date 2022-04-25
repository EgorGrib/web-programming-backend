import {HttpException, Injectable, NotFoundException, NotImplementedException} from '@nestjs/common';
import {Basket, Device, PrismaClient, User} from '@prisma/client';
import {BasketDto} from "./dto/basket.dto";

const prisma = new PrismaClient();

@Injectable()
export class BasketService {

    async getBaskets(): Promise<Basket[]> {
        return await prisma.basket.findMany();
    }

    async getBasket(id: number): Promise<Basket> {
        if (!+id)
            throw new HttpException('Basket id should be a number', 400);
        const basket = await prisma.basket.findUnique({
            where: {
                id: id,
            },
        });
        if (basket) {
            return basket;
        }
        throw new NotFoundException("Basket is not found");
    }

    async getBasketOfUser(userId: number): Promise<Basket> {
        if (!+userId)
            throw new HttpException('User id should be a number', 400);

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) throw new NotFoundException("User is not found");

        return await prisma.basket.findUnique({where: {userId: userId}});
    }

    async createBasket(basketDto: BasketDto): Promise<Basket> {
        const { userId, totalPrice, devices } = basketDto;
        if (!+userId)
            throw new HttpException('User id should be a number', 400);

        return await prisma.basket.create({
            data: {
                userId: userId,
                totalPrice: totalPrice,
            }
        });
    }

    async updateBasket(id: number, basketDto: BasketDto): Promise<Basket> {
        const { userId } = basketDto;
        return await prisma.basket.update({
            where: {
                id: id,
            },
            data: {
                userId: userId,
            },
        });
    }

    async deleteBasket(id: number): Promise<void> {
        const basket = await this.getBasket(id);
        if (basket) {
            await prisma.basket.delete({ where: { id: id } });
        }
    }
}