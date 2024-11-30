import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { AuthService } from '@/auth/application/auth.service';

import { CreateTokenCommand } from './create-token.command';

@CommandHandler(CreateTokenCommand)
export class CreateTokenHandler implements ICommandHandler<CreateTokenCommand> {
  public constructor(private readonly authService: AuthService) {}

  async execute(command: CreateTokenCommand): Promise<any> {
    return await this.authService.createToken(command.input);
  }
}
