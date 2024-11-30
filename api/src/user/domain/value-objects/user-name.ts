export class UserNameValue {
  public constructor(
    private readonly first: string,
    private readonly last: string,
  ) {}

  public get value(): { first: string; last: string } {
    return { first: this.first, last: this.last };
  }
}
