import { ICommand } from '@nestjs/cqrs';

import { CreateTokenDto } from '@/auth/application/dtos/create-token.dto';

export class CreateTokenCommand implements ICommand {
  public constructor(public readonly input: CreateTokenDto) {}
}
