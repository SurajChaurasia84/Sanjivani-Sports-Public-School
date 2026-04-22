export const getAssetPath = (path) => {
  const basePath = '/Sanjivani-Sports-Public-School';
  const isProd = process.env.NODE_ENV === 'production';
  
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return isProd ? `${basePath}${cleanPath}` : cleanPath;
};
