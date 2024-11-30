import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from '@/auth/application/auth.service';
import { CreateTokenCommand } from '@/auth/application/commands/create-token.command';
import { CreateTokenHandler } from '@/auth/application/commands/create-token.handler';
import { LogInCommand } from '@/auth/application/commands/log-in.command';
import { LogInHandler } from '@/auth/application/commands/log-in.handler';
import { IHashingServiceToken } from '@/auth/application/hashing.service';
import { ITokenServiceToken } from '@/auth/application/token.service';
import { JwtTokenService } from '@/auth/infrastructure/jwt-token.service';
import { PlainHashingService } from '@/auth/infrastructure/plain-hashing.service';
import { UserModule } from '@/user/user.module';

import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    CqrsModule,
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('jwt.secret'),
        signOptions: {
          expiresIn: '6000s',
        },
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  providers: [
    JwtStrategy,
    LocalStrategy,
    AuthService,
    CreateTokenCommand,
    CreateTokenHandler,
    LogInCommand,
    LogInHandler,
    { provide: ITokenServiceToken, useClass: JwtTokenService },
    { provide: IHashingServiceToken, useClass: PlainHashingService },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
