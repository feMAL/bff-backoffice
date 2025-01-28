import {  Module } from "@nestjs/common";
import { MenuController } from "./controllers/menu.controller";
import { HttpModule } from "@nestjs/axios";
import { MenuService } from "./services/menu.service";
import { ExtServicesConfigService } from "src/config/external-servers/configuration.service";

@Module({
    imports:[
        HttpModule,
    ],
    controllers: [
        MenuController
    ],
    providers:[
        MenuService,
        ExtServicesConfigService
    ]
})
export class MenuModule {}