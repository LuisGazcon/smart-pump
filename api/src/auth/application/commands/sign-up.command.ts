import { ICommand } from '@nestjs/cqrs';

export class SignUpCommand implements ICommand {
  public constructor(public readonly input: any) {}
}
