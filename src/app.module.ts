import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigurationModule } from './config/configuration.module';
import { CacheProviderModule } from './providers/cache/provider.module';
import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [
    ConfigurationModule,
    CacheProviderModule,
    AuthModule,
    BackofficeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
