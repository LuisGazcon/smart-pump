import { IQuery } from '@nestjs/cqrs';

import { GetUserDto } from '@/user/application/dtos/get-user.dto';

export class GetUserQuery implements IQuery {
  public constructor(public readonly input: GetUserDto) {}
}
