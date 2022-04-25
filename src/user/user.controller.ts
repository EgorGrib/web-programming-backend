import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "@prisma/client";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserDto} from "./dto/user.dto";


@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({
        summary: 'Get all users',
    })
    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @ApiOperation({
        summary: 'Get a user by id'
    })
    @ApiResponse({
        status: 400,
        description: "Invalid id format"
    })
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return await this.userService.getUser(id);
    }

    @ApiOperation({
        summary: 'Create a user by email, name and password'
    })
    @ApiResponse({
        status: 201,
        description: 'User created',
    })
    @Post('create')
    async createUser(@Body() CreateUserDto: UserDto): Promise<User> {
        return await this.userService.createUser(CreateUserDto);
    }

    @ApiOperation({
        summary: 'Update user by id'
    })
    @Post(':id/update')
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() UserDto: UserDto,
    ): Promise<User> {
        return await this.userService.updateUser(id, UserDto);
    }

    @ApiOperation({
        summary: 'Delete a user by id'
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid id format'
    })
    @Delete(':id/delete')
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.userService.deleteUser(id);
    }
}