import { HttpException, Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import axios from "axios";
import config from '../../../config/external-servers/configuration'
import { MenuUserResponse } from "../responses/menu.response";

@Injectable()
export class MenuService {
    
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
      ) {}
    
    async getMyMenu(): Promise<MenuUserResponse> {
        try {
            const { data } = await axios.get(
                `${this.appConfig.services.backend.url}/menu`
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }
}