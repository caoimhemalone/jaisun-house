module.exports = {
    entry:  './src/app.js',
    output: {
      filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }, // to transform JSX into JS
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src', 'sass')
                ],
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },

            {
                test: /\.css$/,  
                include: /node_modules/,  
                loaders: ['style-loader', 'css-loader'],
           }
        ]
    },

    resolve: {
        //modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx']
    },
}