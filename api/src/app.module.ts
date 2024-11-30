import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

import { AuthModule } from '@/auth/auth.module';
import { UserModule } from '@/user/user.module';

import { config } from './app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    CqrsModule.forRoot(),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
