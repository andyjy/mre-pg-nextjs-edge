/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push({
      // Prevent compilation failure under Next.js build (`next build`):
      // `Module build failed: UnhandledSchemeError: Reading from "cloudflare:sockets" is not handled by plugins (Unhandled scheme)`
      "cloudflare:sockets": "commonjs cloudflare:sockets",
    });

    // expose access to Node.js `net` module within Next.js Edge runtime local sandbox
    // same as Next.js does for `node:buffer`, `node:async_hooks` etc
    // - https://github.com/vercel/next.js/blob/6185444e0a944a82e7719ac37dad8becfed86acd/packages/next/src/build/webpack/plugins/middleware-plugin.ts#L833
    config.externals.unshift({
      net: "commonjs node:net",
      "node:net": "commonjs node:net",
    });

    return config;
  },
};

export default nextConfig;
