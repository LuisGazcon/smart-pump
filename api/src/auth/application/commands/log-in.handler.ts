import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { AuthService } from '@/auth/application/auth.service';

import { LogInCommand } from './log-in.command';

@CommandHandler(LogInCommand)
export class LogInHandler implements ICommandHandler<LogInCommand> {
  public constructor(private readonly authService: AuthService) {}

  async execute(command: LogInCommand): Promise<any> {
    return await this.authService.logIn(command.input);
  }
}
