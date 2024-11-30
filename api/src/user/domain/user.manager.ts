import { Inject, Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

import { UserUpdatedEvent } from './events/user-updated.event';
import { UserNameValue } from './value-objects/user-name';
import { User } from './user';
import { IUserRepository, IUserRepositoryToken } from './user.repository';

@Injectable()
export class UserManager {
  public constructor(
    private readonly eventPublisher: EventPublisher,
    @Inject(IUserRepositoryToken) private readonly userRepository: IUserRepository,
  ) {}

  public async create(id: string, email: string, password: string): Promise<User> {
    const user = this.eventPublisher.mergeObjectContext(
      User.create(
        id,
        true,
        password,
        '$0',
        0,
        'green',
        new UserNameValue('luis', 'gazcon'),
        'Zero Copy Labs',
        '6862353165',
        'Lomas Altas',
        email,
        password,
      ),
    );
    await this.userRepository.save(user);
    user.commit();
    return user;
  }

  public async update(
    guid: string,
    name: { first: string; last: string },
    email: string,
    address: string,
    phone: string,
    company: string,
    eyeColor: string,
    age: number,
  ) {
    const user = await this.userRepository.findByGuid(guid);

    user.name = new UserNameValue(name.first, name.last);
    user.email = email;
    user.address = address;
    user.phone = phone;
    user.company = company;
    user.eyeColor = eyeColor;
    user.age = age;

    this.userRepository.update(user);

    user.apply(new UserUpdatedEvent());
    user.commit();
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOneByEmail(email);
  }
}
