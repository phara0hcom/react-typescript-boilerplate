const path = require('path');
const sass = require('sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

var config = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true,
    open: true,
    port: 3000,
  },
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[contenthash:base64:5]',
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.plugins.push(
      new Dotenv({
        path: './.env.development.local', // load this now instead of the ones in '.env'
        safe: false, // If true, load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        allowEmptyValues: true, // Whether to allow empty strings in safe mode. If false, will throw an error if any env variables are empty (but only if safe mode is enabled).
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false, // load '.env.defaults' as the default values if empty.
      })
    );
  } else {
    config.plugins.push(
      new Dotenv({
        path: './.env.production.local', // load this now instead of the ones in '.env'
        safe: false, // If true, load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        allowEmptyValues: true, // Whether to allow empty strings in safe mode. If false, will throw an error if any env variables are empty (but only if safe mode is enabled).
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false, // load '.env.defaults' as the default values if empty.
      })
    );
  }

  return config;
};
