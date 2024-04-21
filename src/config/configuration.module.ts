import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { environments } from "./environments";
import { validationSchema } from "./configuration.validation";

import { AppConfigService } from "./app/configuration.service"
import { ExtServicesConfigService } from "./external-servers/configuration.service";

import AppConfig from './app/configuration';
import ExtServersConfig from './external-servers/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: environments[`${process.env.NODE_ENV}`],
            ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
            load: [
                AppConfig,
                ExtServersConfig
            ],
            isGlobal: true,
            validationSchema
        })
    ],
    providers: [
        ConfigService,
        AppConfigService,
        ExtServicesConfigService
    ],
    exports: [
        ConfigService,
        AppConfigService,
        ExtServicesConfigService
    ]
})
export class  ConfigurationModule {}