import {Injectable, NotImplementedException, Param} from '@nestjs/common';
import {Device} from "@prisma/client";

@Injectable()
export class DeviceService {
    async findAll(): Promise<Device[]> {
        throw new NotImplementedException();
    }

    async findById(id: number): Promise<Device> {
        throw new NotImplementedException();
    }

    async create(title: string, description: string, price: number): Promise<Device> {
        throw new NotImplementedException();
    }

    async delete(id: number, userId: number): Promise<Device> {
        throw new NotImplementedException();
    }
}
