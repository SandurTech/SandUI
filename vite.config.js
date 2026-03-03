import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'SandUI',
      fileName: 'index'
    },
    rollupOptions: {
      external: command === 'build' ? ['react', 'react-dom', 'react/jsx-runtime'] : [],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    }
  }
}))
