/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repository-name>/
  basePath: '/Sanjivani-Sports-Public-School',
  assetPrefix: '/Sanjivani-Sports-Public-School',
};

export default nextConfig;
