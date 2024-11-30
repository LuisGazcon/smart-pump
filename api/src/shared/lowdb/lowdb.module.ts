import { Module } from '@nestjs/common';

import { LowDbProvider } from './lowdb.provider';

@Module({
  providers: [LowDbProvider],
  exports: [LowDbProvider],
})
export class LowDbModule {}
