import { User } from './user';

export const IUserRepositoryToken = Symbol('IUserRepository');

export interface IUserRepository {
  findByGuid(id: string): Promise<User | undefined>;
  findOneByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
}
