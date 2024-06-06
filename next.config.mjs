/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Prevent compilation failure under Next.js build (`next build`):
    // `Module build failed: UnhandledSchemeError: Reading from "cloudflare:sockets" is not handled by plugins (Unhandled scheme)`
    config.externals.push({
      "cloudflare:sockets": "commonjs cloudflare:sockets",
    });
    return config;
  },
};

export default nextConfig;
