const path = require('path')

module.exports = {
   mode: 'production',
   entry: './src/index.ts',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      clean: true,
      globalObject: 'this',
   },
   resolve: {
      extensions: ['.ts', '.tsx'],
   },
   externals: {
      react: 'react',
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
         },
         {
            test: /\.scss$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
         },

         {
            test: /\.(ts|tsx)?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
         },
      ],
   },
}
