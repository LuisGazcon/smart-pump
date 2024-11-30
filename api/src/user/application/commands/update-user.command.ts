import { ICommand } from '@nestjs/cqrs';

import { UpdateUserDto } from '@/user/application/dtos/update-user.dto';

export class UpdateUserCommand implements ICommand {
  public constructor(public readonly input: UpdateUserDto) {}
}
