const path = require('path')
module.exports = {
   stories: [
      '../stories/**/*.mdx',
      '../stories/**/*.stories.@(js|jsx|ts|tsx)',
      '../components/**/*.stories.@(js|jsx|ts|tsx)',
   ],

   addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@storybook/addon-a11y',
   ],

   framework: {
      name: '@storybook/nextjs',
      options: {},
   },
   // webpackFinal: async (config) => {
   //    config.module.rules.push({
   //       test: /\.s(a|c)ss$/,
   //       include: path.resolve(__dirname, '../'),
   //       use: [
   //          'style-loader',
   //          {
   //             loader: 'css-loader',
   //             options: {
   //                modules: {
   //                   auto: true,
   //                   localIdentName: '[name]__[local]--[hash:base64:5]',
   //                },
   //             },
   //          },
   //          'sass-loader',
   //       ],
   //    })
   //    return config
   // },
}
