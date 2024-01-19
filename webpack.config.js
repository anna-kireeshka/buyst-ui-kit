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
      extensions: ['.tsx', '.ts', '.js', '.css', 'scss'],
   },
   plugins: [new MiniCssExtractPlugin()],
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
         amd: 'React',
         root: 'React',
      },
   },
}
