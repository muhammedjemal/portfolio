// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your other Next.js configurations can go here
    // e.g., reactStrictMode: true, images: { ... }, etc.
  
    async redirects() {
      return [
        {
          source: '/github.com/muhammedjemal',
          destination: 'https://github.com/muhammedjemal',
          permanent: true, // Use true for 308 (permanent) redirect, false for 307 (temporary)
        },
        {
          // This will match both /leetcode.com/jemsa12 and /leetcode.com/jemsa12/
          // because Next.js normalizes trailing slashes for `source` paths by default.
          source: '/leetcode.com/jemsa12',
          destination: 'https://leetcode.com/jemsa12/', // Ensure destination has the correct trailing slash if needed
          permanent: true,
        },
        {
          source: '/linkedin.com/in/jemal-muhammed-2896a433b',
          destination: 'https://linkedin.com/in/jemal-muhammed-2896a433b/', // Ensure destination has the correct trailing slash
          permanent: true,
        },
        // You can add more redirects here
      ];
    },
  };
  
  module.exports = nextConfig;