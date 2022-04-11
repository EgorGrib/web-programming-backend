import {Injectable, NotImplementedException} from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    async findUser(id: number, name: string): Promise<User> {
        throw new NotImplementedException();
    }

    async createUser(email: string, name: string): Promise<User> {
        throw new NotImplementedException();
    }

    async deleteUser(id: number, name: string): Promise<User> {
        throw new NotImplementedException();
    }
}