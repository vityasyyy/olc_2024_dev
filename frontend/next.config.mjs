/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'example.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            pathname: '/**',
          },
        
      ],
    },
  }
  
  export default nextConfig