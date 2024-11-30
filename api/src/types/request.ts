import { Request } from 'express';

import { User } from '@/user/domain/user';

export interface IRequest extends Request {
  user?: User;
}
