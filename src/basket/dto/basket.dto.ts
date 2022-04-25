import {IsArray, IsInt, IsNotEmpty} from "class-validator";
import {Device} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class BasketDto {
    @ApiProperty({ name: 'userId', type: 'integer', description: 'id of user' })
    @IsNotEmpty()
    @IsInt()
    userId: number;

    @ApiProperty({ name: 'totalPrice', type: 'integer', description: 'Total price of order' })
    @IsInt()
    totalPrice: number;

    @ApiProperty({ name: 'devices', type: 'array', description: 'Title of device' })
    @IsNotEmpty()
    @IsArray()
    devices: Device[];
}