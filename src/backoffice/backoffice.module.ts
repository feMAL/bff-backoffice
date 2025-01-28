import { Module } from "@nestjs/common";
import { MenuModule } from "./ menu/menu.module";

@Module({
    imports: [MenuModule],
    exports: [MenuModule]
})
export class BackofficeModule {}