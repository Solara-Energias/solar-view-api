export function GET(url: string, options?: RequestInit) {
  options = {
    ...options,
    method: 'GET',
  };

  return fetch(url, options);
}

export function POST(url: string, body: any, options?: Omit<RequestInit, 'body'>) {
  options = {
    ...options,
    method: 'POST',
  };

  body = JSON.stringify(body);

  return fetch(url, { ...options, body });
}
