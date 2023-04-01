declare global {
  interface InterfaceKeyString<T> {
    [key: string]: T;
  }
}

export {};
