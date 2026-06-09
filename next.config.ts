const nextConfig = {
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