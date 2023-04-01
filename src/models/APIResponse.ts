export class APIResponse<T> {
  public readonly timestamp = Date.now();

  constructor(
    public success: boolean,
    public message: string = '',
    public body: T | null = null
  ) {}
}
