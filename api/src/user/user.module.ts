import { Module } from '@nestjs/common';

import { LowDbModule } from '@/shared/lowdb/lowdb.module';
import { UpdateUserCommand } from '@/user/application/commands/update-user.command';
import { UpdateUserHandler } from '@/user/application/commands/update-user.handler';
import { GetUserHandler } from '@/user/application/queries/get-user.handler';
import { GetUserQuery } from '@/user/application/queries/get-user.query';
import { UserManager } from '@/user/domain/user.manager';
import { IUserRepositoryToken } from '@/user/domain/user.repository';
import { LowDbUserRepository } from '@/user/infrastructure/lowdb-user-repository';
import { UserController } from '@/user/user.controller';

@Module({
  imports: [LowDbModule],
  providers: [
    UserManager,
    {
      provide: IUserRepositoryToken,
      useClass: LowDbUserRepository,
    },
    GetUserHandler,
    GetUserQuery,
    UpdateUserCommand,
    UpdateUserHandler,
  ],
  controllers: [UserController],
  exports: [UserManager],
})
export class UserModule {}
