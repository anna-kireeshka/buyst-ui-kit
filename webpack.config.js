const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].css',
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
         },
         {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }, { loader: 'sass-loader' }],
         },

         {
            test: /\.(ts|tsx)?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
         },
      ],
   },
   externals: {
      react: {
         commonjs: 'react',
         commonjs2: 'react',
         amd: 'react',
         root: 'React',
      },
      'react-dom': {
         commonjs: 'react-dom',
         commonjs2: 'react-dom',
         amd: 'react-dom',
         root: 'ReactDOM',
      },
   },
}
