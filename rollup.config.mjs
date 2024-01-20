import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import autoprefixer from 'autoprefixer'
import packageJson from './package.json' assert { type: 'json' };
import analyze from 'rollup-plugin-analyzer'

export default [
    {
        input: 'components/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                clean: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
                clean: true,
            },
        ],
        plugins: [
            analyze({summaryOnly: true}),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            terser(),
            typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
            postcss({
                extensions: ['.sass', '.scss'],
                extract: true,
                use: ['sass'],
                modules: true,
                sourceMap: true,
            }),
            autoprefixer,
        ],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
