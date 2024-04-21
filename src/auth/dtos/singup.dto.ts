import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, MinLength, MaxLength, IsAlphanumeric, IsBoolean, IsOptional } from "@nestjs/class-validator";

export class SingUpDto {

    @IsString()
    @ApiProperty({type: String})
    name?: string;

    @IsString()
    @IsAlphanumeric()
    @ApiProperty({type: String})
    surname?: string;
    
    @IsString()
    @MinLength(3)
    @ApiProperty({type: String})
    username: string;
    
    @IsString()
    @MinLength(6)
    @MaxLength(14)
    @ApiProperty({type: String})
    password: string;
    
    @IsEmail()
    @ApiProperty({type: String})
    mail: string;

    @IsBoolean()
    @ApiProperty({type: Boolean})
    tc: boolean;
}