import { Inject, Injectable } from '@nestjs/common';
import type { Low } from 'lowdb' with { 'resolution-mode': 'import' };

import { LowDbData, LowDbToken } from '@/shared/lowdb/lowdb.provider';
import { User } from '@/user/domain/user';
import { IUserRepository } from '@/user/domain/user.repository';

@Injectable()
export class LowDbUserRepository implements IUserRepository {
  @Inject(LowDbToken) private readonly database: Low<LowDbData>;

  public async findByGuid(guid: string): Promise<User | null> {
    await this.database.read();

    console.debug(guid);
    const user = this.database.data.users.find((account) => account.guid == guid);

    return user ? User.fromPrimitives(user) : null;
  }

  public async save(user: User): Promise<void> {
    await this.database.read();
    this.database.data.users.push(user);
    await this.database.write();
  }

  public async findOneByEmail(email: string): Promise<User | null> {
    await this.database.read();
    const user = this.database.data.users.find((user) => user.email == email);
    return user ? User.fromPrimitives(user) : null;
  }

  public async update(partial: User): Promise<void> {
    await this.database.read();
    const index = this.database.data.users.findIndex(({ guid }) => guid === partial.guid);

    const user = this.database.data.users[index];

    this.database.data.users[index] = Object.assign(
      user,
      Object.fromEntries(Object.entries(partial.toPrimitives()).filter(([, value]) => value != null)),
    );
    await this.database.write();
  }
}
