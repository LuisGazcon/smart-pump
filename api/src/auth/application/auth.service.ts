import { Inject, Injectable } from '@nestjs/common';

import { CreateTokenDto } from '@/auth/application/dtos/create-token.dto';
import { LogInDto } from '@/auth/application/dtos/log-in.dto';
import { IHashingService, IHashingServiceToken } from '@/auth/application/hashing.service';
import { ITokenService, ITokenServiceToken } from '@/auth/application/token.service';
import { User } from '@/user/domain/user';
import { UserManager } from '@/user/domain/user.manager';

@Injectable()
export class AuthService {
  public constructor(
    public readonly userManager: UserManager,
    @Inject(IHashingServiceToken) private readonly hashingService: IHashingService,
    @Inject(ITokenServiceToken) private readonly tokenService: ITokenService,
  ) {}

  public async logIn(input: LogInDto): Promise<User | null> {
    const user = await this.userManager.getUserByEmail(input.email);
    const match = await this.hashingService.compare(input.password, user.password);
    return match ? user : null;
  }

  public async createToken(input: CreateTokenDto): Promise<string> {
    const token = this.tokenService.sign({
      sub: input.guid,
      guid: input.guid,
      username: input.email,
    });
    return token;
  }
}
