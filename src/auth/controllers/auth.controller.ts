import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "../services/auth.service";
import { LoginDto } from "../dtos";

@Controller('auth')
@ApiTags('Authorizator')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @ApiBody({
        type: LoginDto,
        required: true,
    })
    @Post('/login')
    async login (
        @Body() login: LoginDto,
    ) {
        return await this.authService.login(login);
    }

}