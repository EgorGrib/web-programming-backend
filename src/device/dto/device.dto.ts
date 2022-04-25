import {IsInt, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DeviceDto {
    @ApiProperty({ name: 'title', type: 'string', description: 'Title of device' })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ name: 'description', type: 'string', description: 'Description of device' })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({ name: 'price', type: 'integer', description: 'Price of device' })
    @IsNotEmpty()
    @IsInt()
    price: number;

    @ApiProperty({ name: 'basketId', type: 'integer', description: "Id user's basket" })
    @IsInt()
    basketId: number;
}