/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: {
    domains: ['images.unsplash.com'], // add any external image domains you use
  },
};

export default nextConfig;
