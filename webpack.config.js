const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		host: '172.19.8.103', // local ip address when running under wsl
	  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
	  },
	  {
		  	test:/\.(s*)css$/,
			use:['style-loader','css-loader', 'sass-loader']
		}
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};