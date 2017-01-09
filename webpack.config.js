var path = require('path');

var config = {
    entry: "./app/index.js",
    output: {
        filename: "bundle.js"
    },
    devServer: {
      inline: true,
      port: 8080
   },
    
    module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
                
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
         test: /\.css$/,
        loader: 'style!css'
    }
      ]
   }
}

module.exports = config;
