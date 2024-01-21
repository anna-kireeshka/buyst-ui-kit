import '../components/index.scss'
export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   backgrounds: {
      default: 'white',
      values: [
         { name: 'white', value: '#ffffff' },
         { name: 'light', value: '#f2f2f3' },
         { name: 'dark', value: '#171717' },
      ],
   },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
   // layout: 'centered',
}
