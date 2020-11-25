import 'egg';

declare module 'egg' {
  interface Application {
    [key: string]: any;
  }
}