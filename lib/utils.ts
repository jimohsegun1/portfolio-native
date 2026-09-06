export function isValidUrl(url?: string): boolean {
  if (!url) return false;
  if (url === '#') return false;
  return url.startsWith('http://') || url.startsWith('https://');
}
