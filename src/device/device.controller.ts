import {Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { Device } from '@prisma/client';
import {DeviceService} from "./device.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('device')
@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}

    @ApiOperation({
        summary: 'Get all devices'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Get()
    async listAll(): Promise<Device[]> {
        return await this.deviceService.findAll();
    }

    @ApiOperation({
        summary: 'Get a device by id'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Get(':id')
    async read(@Param('Device') id: number): Promise<Device> {
        return await this.deviceService.findById(id);
    }

    @ApiOperation({
        summary: 'Create a device by title, description and price'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Post()
    async create(title: string, description: string, price: number): Promise<Device> {
        return await this.deviceService.create(title, description, price);
    }

    @ApiOperation({
        summary: 'Delete a device by id of device and id of user'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Delete(':id')
    async delete(@Param('Device') id: number, @Param('User') userId: number): Promise<Device> {
        return await this.deviceService.delete(id, userId);
    }
}
