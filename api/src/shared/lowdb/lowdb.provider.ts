import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const lowDbData = {
  users: [],
};

export type LowDbData = typeof lowDbData;

export const LowDbToken = Symbol('LowDb');

export const LowDbProvider: Provider = {
  provide: LowDbToken,
  useFactory: async (configService: ConfigService) => {
    const { JSONFilePreset } = await import('lowdb/node');
    return await JSONFilePreset(configService.get<string>('database.filename'), lowDbData);
  },
  inject: [ConfigService],
};
