const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve(__dirname, './src/scripts/pages/index.js'),
        photographerDist: path.resolve(__dirname, './src/scripts/pages/photographer.js'),
        
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },

          {
            test: /\.scss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],

    },

    plugins: [new MiniCssExtractPlugin({
      filename: "[name].css",
    })],
   
    
}