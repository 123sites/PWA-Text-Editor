const HtmlWebpackPlugin = require("html-webpack-plugin");
// ES6+, ES5 has it as an import...from, instead of const or var...require.
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

new GenerateSW(),
  new WebpackPwaManifest({
    name: "PWA-Text-Editor",
    short_name: "PWA-Text-Editor",
    description: "This is a text editor.",
    background_color: "#7eb4e2",
    theme_color: "#7eb4e2",
    start_url: "./",
    publicPath: "./",
    icons: [
      {
        src: path.resolve("assets/images/logo.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("assets", "icons"),
      },
    ],
  });
// TODO: Add and configure workbox plugins for a service worker and manifest file.
module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new InjectManifest({
        template: './index.html',
      })
     
    ],
// TODO: Add CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
