import { ApiProperty } from '@nestjs/swagger';

export class LogInDto {
  @ApiProperty({ example: 'test@test.com' })
  public readonly email: string;

  @ApiProperty({ example: '123123' })
  public readonly password: string;

  public constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
