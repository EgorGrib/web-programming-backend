import {HttpException, Injectable, NotFoundException, NotImplementedException, Param} from '@nestjs/common';
import {Device, PrismaClient} from "@prisma/client";
import {DeviceDto} from "./dto/device.dto";

const prisma = new PrismaClient();

@Injectable()
export class DeviceService {

    async getDevices(): Promise<Device[]> {
        return prisma.device.findMany();
    }

    async getDevice(id: number): Promise<Device> {
        if (!+id)
            throw new HttpException('Device id should be a number', 400);
        const device = await prisma.device.findUnique({
            where: {
                id: id,
            },
        });
        if (device) {
            return device;
        }
        throw new NotFoundException("Device is not found");
    }

    async createDevice(deviceDto: DeviceDto): Promise<Device> {
        const { title, description, price } = deviceDto;

        return await prisma.device.create({
            data: {
                title: title,
                description: description,
                price: price
            },
        });
    }

    async updateDevice(id: number, deviceDto: DeviceDto): Promise<Device> {
        const { title, description, price, basketId } = deviceDto;

        return await prisma.device.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                description: description,
                price: price,
                basketId: basketId,
            },
        });
    }

    async deleteDevice(id: number): Promise<void> {
        const device = await this.getDevice(id);
        if (device) {
            await prisma.device.delete({ where: { id: id } });
        }
    }
}