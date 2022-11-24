/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.pdf/,
        type: "asset/resource",
        generator: {
          filename: "static/[name].[hash][ext]"
        }
      })

    return config
  }
}

module.exports = nextConfig
