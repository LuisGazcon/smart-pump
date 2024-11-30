import { Injectable } from '@nestjs/common';

import { IHashingService } from '@/auth/application/hashing.service';

@Injectable()
export class PlainHashingService implements IHashingService {
  public async hash(data: string): Promise<string> {
    return data;
  }

  public async compare(data: string, hash: string): Promise<boolean> {
    return data === hash;
  }
}
