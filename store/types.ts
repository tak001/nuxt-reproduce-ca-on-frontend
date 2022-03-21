export type RootState<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
