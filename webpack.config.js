const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const config = {
  entry: './src/index.js', // The point or points where to start the application bundling process. If an array is passed then all items will be processed. https://webpack.js.org/configuration/entry-context/#entry
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  }, // The top-level output key contains set of options instructing webpack on how and where it should output your bundles, assets and anything else you bundle or load with webpack. https://webpack.js.org/configuration/output/
  target: 'web',
  devtool: 'inline-source-map', // Sets a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically. https://webpack.js.org/configuration/devtool/#devtool
  // Dev server is used to quickly develop an application
  // More info: https://webpack.js.org/configuration/dev-server/
  devServer: {
    static: path.join(__dirname, 'public/'), // Tells the server where to serve content from. This is only necessary if you want to serve static files.
    compress: true, // Enable gzip compression for everything served
    port: 9000, // Specify a port number to listen for requests on
    historyApiFallback: true, // When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses.
    hot: true, // EnableS webpack's Hot Module Replacement feature
    client: {
      overlay: false,
    },
    devMiddleware: {
      publicPath: '/', // The bundled files will be available in the browser under this path
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: devMode,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: `${__dirname}/postcss.config.js`,
              },
            },
          },
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // The css-loader interprets @import and url() like import/require() and will resolve them.
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: devMode ? '[folder]__[local]' : '[hash:base64]',
              },
              sourceMap: devMode,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: devMode,
              additionalData: `@use '/src/sass/utilities/mixins' as *;
              @use '/src/sass/utilities/functions' as *;`,
              sassOptions: {
                includePaths: [`${__dirname}/src/sass`],
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: `${__dirname}/postcss.config.js`,
              },
            },
          },
          {
            loader: 'style-resources-loader', // Loads css resources
            options: {
              patterns: [`${__dirname}/src/sass/utilities/index.scss`],
            },
          },
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.(js|jsx)$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [{ loader: '@svgr/webpack', options: { dimensions: false } }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Sourcery academies',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }), // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
    new CleanWebpackPlugin(), // By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
    new StylelintPlugin({
      failOnError: true,
      emitWarning: true,
      fix: true,
      files: '**/*.scss',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }), // During build, copies static files from /public to /dist
    new ESLintPlugin(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'), // can import components usings absolute 'components' path
    },
    extensions: ['.js', '.jsx', '.scss'],
  },
  optimization: {
    runtimeChunk: 'single', // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      }, // https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
    },
  },
};

module.exports = config;
