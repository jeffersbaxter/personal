import createMDX from '@next/mdx'

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
      // If you use remark-gfm, you'll need to use next.config.mjs
      // as the package is ESM only
      // https://github.com/remarkjs/remark-gfm#install
    //   remarkPlugins: [],
    //   remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
    //   providerImportSource: "@mdx-js/react",
    }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
// Enable static optimization for improved performance
reactStrictMode: true,
// Configure page extensions to include mdx
pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
// Enable optimized image handling
images: {
    domains: [], // Add domains for external images here
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/avif', 'image/webp'],
},
// Optimize for speed
compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
},
// Enable SWC minification for faster builds
// swcMinify: true,
transpilePackages: ['next-mdx-remote']
}

// Merge MDX config with Next.js config
export default withMDX(nextConfig);