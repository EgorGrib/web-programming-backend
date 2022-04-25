import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Render} from '@nestjs/common';
import { Device } from '@prisma/client';
import {DeviceService} from "./device.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {DeviceDto} from "./dto/device.dto";


@ApiTags('device')
@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}

    @ApiOperation({
        summary: 'Get all devices'
    })
    @Get()
    async getDevices(): Promise<Device[]> {
        return await this.deviceService.getDevices();
    }

    @ApiOperation({
        summary: 'Get a device by id'
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid id format',
    })
    @Get(':id')
    async getDevice(@Param('id', ParseIntPipe) id: number): Promise<Device> {
        return await this.deviceService.getDevice(id);
    }

    @ApiOperation({
        summary: 'Create a device by title, description and price'
    })
    @ApiResponse({
        status: 201,
        description: 'Device created',
    })
    @Post()
    async create(@Body() deviceDto: DeviceDto): Promise<Device> {
        return await this.deviceService.createDevice(deviceDto);
    }

    @ApiOperation({
        summary: 'Update device by id',
    })
    @Post(':id/update')
    async updateDevice(@Param('id', ParseIntPipe) id: number, @Body() deviceDto: DeviceDto): Promise<Device> {
        return await this.deviceService.updateDevice(id, deviceDto);
    }

    @ApiOperation({
        summary: 'Delete a device by id'
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid id format',
    })
    @Delete(':id')
    async delete(@Param('Device', ParseIntPipe) id: number): Promise<void> {
        return await this.deviceService.deleteDevice(id);
    }
}