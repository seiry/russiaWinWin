/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    poweredByHeader: false,
    experimental: {
        // appDir: false,
    },
    headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'x-powered-by',
                        value: 'IIS 6.0',
                    },
                    {
                        key: 'X-Who-I-Am',
                        value: 'Wall builder!',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
