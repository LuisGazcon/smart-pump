import { ICommand } from '@nestjs/cqrs';

import { LogInDto } from '@/auth/application/dtos/log-in.dto';

export class LogInCommand implements ICommand {
  public constructor(public readonly input: LogInDto) {}
}
