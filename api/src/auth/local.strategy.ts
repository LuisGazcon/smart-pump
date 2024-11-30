import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { LogInCommand } from '@/auth/application/commands/log-in.command';
import { LogInDto } from '@/auth/application/dtos/log-in.dto';
import { User } from '@/user/domain/user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly commandBus: CommandBus) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    return await this.commandBus.execute<LogInCommand, User | null>(new LogInCommand(new LogInDto(email, password)));
  }
}
