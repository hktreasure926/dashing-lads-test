/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['dashinglads.com', 'secure.gravatar.com', 'fakestoreapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',
};

module.exports = nextConfig;
