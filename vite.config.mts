import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
   plugins: [
       react(),
      dts({ include: ['components'] }),
      libInjectCss(),
      babel({
         exclude: 'node_modules/**',
         presets: ['@babel/preset-env', '@babel/preset-react'],
      })
   ],
   build: {
      lib: {
         entry: resolve(__dirname, 'components/index.ts'),
         formats: ['es'],
      },
      rollupOptions: {
         external: ['react', 'react/jsx-runtime'],
         output: {
            chunkFileNames: 'chunks/[name].[hash].js',
            assetFileNames: 'assets/[name][extname]',
            entryFileNames: '[name].js',
         },
      },
   },
})
