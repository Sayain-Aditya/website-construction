const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig