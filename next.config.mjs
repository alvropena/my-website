import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[contenthash].css",
          chunkFilename: "static/css/[name].[contenthash].css",
        })
      );

      config.module.rules.push({
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      });
    }

    return config;
  },
};

export default nextConfig;
