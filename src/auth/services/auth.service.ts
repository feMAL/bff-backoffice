import { HttpException, Inject, Injectable } from "@nestjs/common";
import { LoginDto } from "../dtos";
import axios from "axios";
import config from "../../config/external-servers/configuration";
import { ConfigType } from "@nestjs/config";

@Injectable()
export class AuthService {
    
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
    ) {}
    

    /**
     * login function to take session token
     * @param LoginDto  
     * @param source_data 
     * @returns 
     */

    async login(loginData: LoginDto) {
        try {
          const { data } = await axios.post(
            `${this.appConfig.services.authorizator.url}/auth/login`,
            loginData
          );
          return data;
        } catch (error) {
          throw new HttpException(error.response.data, error.response.status);
        }
      }
}