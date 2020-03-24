const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            },
            
        }
        , {

          test: /\.s?css$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        }, 
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        }
  
      ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
    contentBase: path.join(__dirname, 'public')
  }
  };