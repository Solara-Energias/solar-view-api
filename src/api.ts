export function GET(url: string, options?: RequestInit) {
  options = {
    ...options,
    method: 'GET',
  };

  return fetch(url, options);
}

export function POST(
  url: string,
  key: string,
  body?: any,
  options?: RequestInit
) {
  options = {
    ...options,
    method: 'POST',
    headers: { 'solarview-tokenUniversal': key },
  };

  if (body) {
    body = JSON.stringify(body);
    options = { ...options, body };
  }

  return fetch(url, options);
}
