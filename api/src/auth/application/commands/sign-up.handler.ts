import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { SignUpCommand } from './sign-up.command';

@CommandHandler(SignUpCommand)
export class SignUpHandler implements ICommandHandler<SignUpCommand> {
  execute(command: SignUpCommand): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
