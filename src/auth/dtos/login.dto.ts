import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from '@nestjs/class-validator'

export class LoginDto {

/*  @IsString()
    @IsAlphanumeric()
    @MinLength(3)
    @ApiProperty({type: String, minLength: 3})
    username: string;*/

    @IsString()
    @IsEmail()
    @ApiProperty({type: String})
    email: string;
    
    @IsString()
    @MinLength(6)
    @MaxLength(14)
    @ApiProperty({type: String})
    password: string;
}