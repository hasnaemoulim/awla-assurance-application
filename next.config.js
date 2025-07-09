/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Commentez temporairement optimizeCss si vous avez des problèmes
  // experimental: {
  //   optimizeCss: true,
  // },
}

module.exports = nextConfig
