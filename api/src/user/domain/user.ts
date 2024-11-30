import { AggregateRoot } from '@nestjs/cqrs';

import { UserCreatedEvent } from '@/user/domain/events/user-created.event';

import { UserNameValue } from './value-objects/user-name';

export class User extends AggregateRoot {
  public constructor(
    private readonly _id: string,
    private readonly _guid: string,
    private _isActive: boolean,
    private _balance: string,
    private _picture: string,
    private _age: number,
    private _eyeColor: string,
    private _name: UserNameValue,
    private _company: string,
    private _phone: string,
    private _address: string,
    private _email: string,
    private _password: string,
  ) {
    super();
  }

  public get id(): string {
    return this._id;
  }

  public get guid(): string {
    return this._guid;
  }

  public get isActive(): boolean {
    return this._isActive;
  }

  public set isActive(isActive: boolean) {
    this._isActive = isActive;
  }

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    this._age = age;
  }

  public get picture(): string {
    return this._picture;
  }

  public set picture(picture: string) {
    this._picture = picture;
  }

  public get eyeColor(): string {
    return this._eyeColor;
  }

  public set eyeColor(eyeColor: string) {
    this._eyeColor = eyeColor;
  }

  public get name(): UserNameValue {
    return this._name;
  }

  public set name(name: UserNameValue) {
    this._name = name;
  }

  public get company(): string {
    return this._company;
  }

  public set company(company: string) {
    this._company = company;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(phone: string) {
    this._phone = phone;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get balance(): string {
    return this._balance;
  }

  public set balance(balance: string) {
    this._balance = balance;
  }

  public static create(
    id: string,
    isActive: boolean,
    balance: string,
    picture: string,
    age: number,
    eyeColor: string,
    name: UserNameValue,
    company: string,
    phone: string,
    address: string,
    email: string,
    password: string,
  ): User {
    const account = new User(
      id,
      id,
      isActive,
      balance,
      picture,
      age,
      eyeColor,
      name,
      company,
      phone,
      address,
      email,
      password,
    );

    this.apply(new UserCreatedEvent(id, email, balance));

    return account;
  }

  public static fromPrimitives(args: {
    id: string;
    guid: string;
    isActive: boolean;
    balance: string;
    picture: string;
    age: number;
    eyeColor: string;
    name: {
      first: string;
      last: string;
    };
    company: string;
    phone: string;
    address: string;
    email: string;
    password: string;
  }): User {
    return new User(
      args.id,
      args.guid,
      args.isActive,
      args.balance,
      args.picture,
      args.age,
      args.eyeColor,
      new UserNameValue(args.name.first, args.name.last),
      args.company,
      args.phone,
      args.address,
      args.email,
      args.password,
    );
  }

  public toPrimitives(): object {
    return {
      _id: this._id,
      guid: this.guid,
      isActive: this.isActive,
      balance: this.balance,
      picture: this.picture,
      age: this.age,
      eyeColor: this.eyeColor,
      name: this.name.value,
      company: this.company,
      phone: this.phone,
      address: this.address,
      email: this.email,
      password: this.password,
    };
  }
}
