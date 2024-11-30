import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserNameDto {
  @ApiProperty({ example: 'Luis' })
  public readonly first: string;
  @ApiProperty({ example: 'Gazcón' })
  public readonly last: string;
}

export class UpdateUserDto {
  public guid: string;

  @ApiProperty({ example: '$123.12' })
  public readonly balance: string;

  @ApiProperty({ example: 18 })
  public readonly age: number;

  @ApiProperty({ example: 'Green' })
  public readonly eyeColor: string;

  @ApiProperty({ type: UpdateUserNameDto, isArray: false })
  public readonly name: UpdateUserNameDto;

  @ApiProperty({ example: 'Zero Copy Labs' })
  public readonly company: string;

  @ApiProperty({ example: 'luiselgazcon@gmail.com' })
  public readonly email: string;

  @ApiProperty({ example: '123' })
  public readonly password: string;

  @ApiProperty({ example: '+52 (686) 23535312' })
  public readonly phone: string;

  @ApiProperty({ example: 'Cataratas del niagara 123' })
  public readonly address: string;

  public constructor(
    guid: string,
    balance: string,
    age: number,
    eyeColor: string,
    name: UpdateUserNameDto,
    company: string,
    email: string,
    password: string,
    phone: string,
    address: string,
  ) {
    this.guid = guid;
    this.balance = balance;
    this.age = age;
    this.eyeColor = eyeColor;
    this.name = name;
    this.company = company;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
  }
}
