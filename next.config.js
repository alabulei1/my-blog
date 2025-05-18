/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true } // only needed if you're using <Image />
  };
  
  module.exports = nextConfig;
  