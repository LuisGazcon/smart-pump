import path from 'path';
import { cwd } from 'process';

console.debug(cwd());

export const config = () => ({
  database: {
    filename: path.resolve(cwd(), process.env['DATABASE_FILENAME']),
  },
  jwt: {
    secret: process.env['JWT_SECRET'],
  },
  server: {
    port: process.env['SERVER_PORT'],
  },
});
