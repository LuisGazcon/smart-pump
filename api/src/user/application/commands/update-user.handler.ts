import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UserManager } from '@/user/domain/user.manager';

import { UpdateUserCommand } from './update-user.command';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler {
  public constructor(private readonly userManager: UserManager) {}

  public async execute(command: UpdateUserCommand): Promise<any> {
    await this.userManager.update(
      command.input.guid,
      {
        first: command.input.name.first,
        last: command.input.name.last,
      },
      command.input.email,
      command.input.address,
      command.input.phone,
      command.input.company,
      command.input.eyeColor,
      command.input.age,
    );
  }
}
