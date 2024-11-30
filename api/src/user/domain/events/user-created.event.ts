export class UserCreatedEvent {
  public constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly balance: string,
  ) {}
}
