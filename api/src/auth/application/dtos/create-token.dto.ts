export class CreateTokenDto {
  public readonly guid: string;
  public readonly email: string;
  public constructor(guid: string, email: string) {
    this.guid = guid;
    this.email = email;
  }
}
