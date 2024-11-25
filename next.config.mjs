/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI, // Ensure this is set in your .env file
  },
};

export default nextConfig;
