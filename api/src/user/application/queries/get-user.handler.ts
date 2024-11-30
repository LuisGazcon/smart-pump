import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { User } from '@/user/domain/user';
import { IUserRepository, IUserRepositoryToken } from '@/user/domain/user.repository';

import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  public constructor(@Inject(IUserRepositoryToken) private readonly accountRepository: IUserRepository) {}

  public async execute(query: GetUserQuery): Promise<User | undefined> {
    return this.accountRepository.findByGuid(query.input.guid);
  }
}
