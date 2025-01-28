import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AccessValidationGuard } from "src/common/guards/access-validation.guard";
import { MenuService } from "../services/menu.service";

@Controller('menu')
@ApiTags('Menu')
@UseGuards(AccessValidationGuard)
export class MenuController {

    constructor(
        private readonly menuService: MenuService
    ){}

    @Get()
    async getMyMenu(@Request() req) {
        console.log(req)
        return this.menuService.getMyMenu();
    }

}