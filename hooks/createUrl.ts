export function createUrl(baseUrl: string, ...params: string[]): string {
  // Ensure the base URL does not end with a '/'
  const sanitizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  return [sanitizedBaseUrl, ...params].join('/');
}