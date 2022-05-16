import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Render, UseGuards} from '@nestjs/common';
import { Device } from '@prisma/client';
import {DeviceService} from "./device.service";
import {ApiBasicAuth, ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {DeviceDto} from "./dto/device.dto";
import {AuthGuard} from "../auth/auth.guard";
import {Session} from "../auth/session.decorator";
import {SessionContainer} from "supertokens-node/lib/build/recipe/session/faunadb";


@ApiTags('device')
@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}

    @ApiOperation({
        summary: 'Get all devices'
    })
    @UseGuards(AuthGuard)
    @ApiBasicAuth()
    @Get()
    async getDevices(@Session() session: SessionContainer): Promise<Device[]> {
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
    @UseGuards(AuthGuard)
    @ApiBasicAuth()
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number, @Session() session: SessionContainer): Promise<void> {
        const userId = session.getUserId();
        console.log(userId);
        return await this.deviceService.deleteDevice(id);
    }
}