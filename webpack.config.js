const path = require('path');

module.exports = {
    entry: {
        admin: './assets/js/admin.js',
        public: './assets/js/public.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    "css-loader"
                ]
            }
          ]
    }
}