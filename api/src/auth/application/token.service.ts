export const ITokenServiceToken = Symbol('ITokenServiceToken');

export interface ITokenService {
  sign(payload: object): Promise<string>;
}
