import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
   plugins: [react(), dts({ include: ['components'] }), libInjectCss()],
   build: {
      lib: {
         entry: resolve(__dirname, 'components/index.ts'),
         formats: ['es'],
      },
      rollupOptions: {
         external: ['react', 'react/jsx-runtime'],
         output: {
            assetFileNames: 'assets/[name][extname]',
            entryFileNames: '[name].js',
         },
      },
   },
})
