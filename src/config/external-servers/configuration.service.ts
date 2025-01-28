import { ConfigService } from "@nestjs/config";

export class ExtServicesConfigService {
    constructor(private extServConfig: ConfigService){}

    get authorizatorURL(): string {
        return this.extServConfig.get<string>('ext_services.services.authorizator.url')
    }

    get backendURL(): string {
        return this.extServConfig.get<string>('ext_services.services.backend.url')
    }

}