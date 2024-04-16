/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverActions: {
            allowedOrigins: ['103.241.67.124:3000'],
        },
    },
};

module.exports = nextConfig;
