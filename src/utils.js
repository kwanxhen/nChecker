export const shortenHash = (hash, length = 6) => {
  if (!hash || typeof hash !== 'string') {
    return '';
  }
  return `${hash.slice(0, Math.max(0, length))}...${hash.substr(
    hash.length - (length - 2),
    hash.length - 1,
  )}`;
};
