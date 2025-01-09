export class UrlSearchParamsHelper<T extends {}> {
  constructor(private params: URLSearchParams) {}

  public merge(values: T) {
    Object.keys(values).forEach((key, index, array) => {
      const value = (values as any)[key];
      if (Array.isArray(value)) {
        value.forEach((val) => {
          this.params.append(key, val);
        });
      } else if (value !== undefined) {
        this.params.set(key, value);
      } else {
        this.params.delete(key);
      }
    });

    return this.params;
  }

  public static create(params: URLSearchParams) {
    return new UrlSearchParamsHelper(params);
  }
}
