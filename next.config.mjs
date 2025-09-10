/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-61ce2a798f304449b474f2fef180a9a5.r2.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-098c9d7bf3d5466b86f0f0725eb42439.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
