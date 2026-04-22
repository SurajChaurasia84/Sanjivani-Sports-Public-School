const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Sanjivani-Sports-Public-School' : '',
  assetPrefix: isProd ? '/Sanjivani-Sports-Public-School' : '',
};

export default nextConfig;
