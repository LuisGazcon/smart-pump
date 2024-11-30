import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { IHashingService } from '@/auth/application/hashing.service';

@Injectable()
export class BcryptHashingService implements IHashingService {
  public async hash(data: string): Promise<string> {
    return await bcrypt.hash(data, 10);
  }

  public async compare(data: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(data, hash);
  }
}
