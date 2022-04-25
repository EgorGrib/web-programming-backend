import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({ name: 'email', type: 'string', description: "User's email" })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({ name: 'name', type: 'string', description: 'Username' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ name: 'password', type: 'string', description: "User's password" })
    @IsNotEmpty()
    @IsString()
    password: string;
}