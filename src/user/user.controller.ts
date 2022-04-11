import {Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "@prisma/client";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({
        summary: 'Get a user by id and name'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Get(':user')
    async getUser(@Param('user') id: number, name: string): Promise<User> {
        return await this.userService.findUser(id, name);
    }

    @ApiOperation({
        summary: 'Create a user by email and name'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Post('create')
    async createUser(email: string, name: string): Promise<User> {
        return await this.userService.createUser(email, name);
    }

    @ApiOperation({
        summary: 'Delete a user by id and name'
    })
    @ApiResponse({
        status: 501,
        description: "The method is not implemented yet"
    })
    @Delete(':user/delete')
    async deleteUser(@Param('user') id: number, name: string): Promise<User> {
        return await this.userService.deleteUser(id, name);
    }
}
