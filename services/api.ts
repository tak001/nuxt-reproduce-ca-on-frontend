export function fakeApi<TResponse>(response: TResponse): Promise<TResponse> {
  // eslint-disable-next-line promise/param-names
  return new Promise((res) => setTimeout(() => res(response), 450));
}
