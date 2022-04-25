import {HttpException, Injectable, NotFoundException, NotImplementedException} from '@nestjs/common';
import {PrismaClient, User} from '@prisma/client';
import {UserDto} from "./dto/user.dto";

const prisma = new PrismaClient();

@Injectable()
export class UserService {

    async getUsers(): Promise<User[]> {
        return await prisma.user.findMany();;
    }

    async getUser(id: number): Promise<User> {
        if (!+id) throw new HttpException('User id should be a number', 400);
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        if (user) {
            return user;
        }
        throw new NotFoundException("User is not found");
    }

    async createUser(CreateUserDto: UserDto): Promise<User> {
        const { email, name, password } = CreateUserDto;
        return await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: password,
            },
        });
    }

    async updateUser(id: number, CreateUserDto: UserDto): Promise<User> {
        const { email, name } = CreateUserDto;
        return await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                email: email,
                name: name,
            },
        });
    }

    async deleteUser(id: number): Promise<void> {
        const user = await this.getUser(id);
        if (user) {
            await prisma.user.delete({ where: { id: id } });
        }
    }
}