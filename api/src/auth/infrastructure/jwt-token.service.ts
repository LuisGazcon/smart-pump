import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { ITokenService } from '@/auth/application/token.service';

@Injectable()
export class JwtTokenService implements ITokenService {
  public constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  public async sign(payload: object): Promise<string> {
    return await this.jwtService.signAsync(payload, {
      secret: this.configService.get('jwt.secret'),
    });
  }
}
