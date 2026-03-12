import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ command, mode }) => {
  const isDocsBuild = mode === 'docs'
  const isDocsTarget = command === 'serve' || isDocsBuild

  return {
    base: isDocsBuild ? '/SandUI/' : '/',
    plugins: [
      react(),
      !isDocsTarget &&
        dts({
          entryRoot: 'src',
          include: ['src/index.ts', 'src/components'],
          insertTypesEntry: true,
          outDir: 'dist',
          rollupTypes: true,
          tsconfigPath: './tsconfig.app.json',
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: isDocsTarget
      ? {
          outDir: 'dist',
          copyPublicDir: true,
        }
      : {
          copyPublicDir: false,
          cssCodeSplit: false,
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'SandUI',
            formats: ['es', 'umd'],
            fileName: (format) => (format === 'es' ? 'sandui.js' : 'sandui.umd.js'),
            cssFileName: 'style',
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
        },
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: true,
      globals: false,
    },
  }
})
