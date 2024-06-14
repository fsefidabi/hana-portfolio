/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      resolve: {
        alias: {
          components: path.resolve(__dirname, "components"),
          svgIcons: path.resolve(__dirname, "public/assets/svg"),
          hooks: path.resolve(__dirname, "hooks"),
          constants: path.resolve(__dirname, "constants"),
          utils: path.resolve(__dirname, "utils"),
          framerMotionAnimations: path.resolve(__dirname, "framer-motion-animations"),
          styles: path.resolve(__dirname, "styles")
        }
      }
    })
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
