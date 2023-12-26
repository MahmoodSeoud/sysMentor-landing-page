/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/LANDING/out',
    output: 'export', //  ->   /_next/static/  
    images: {
        disableStaticImages: false,
        unoptimized: true,
    },

}

module.exports = nextConfig
