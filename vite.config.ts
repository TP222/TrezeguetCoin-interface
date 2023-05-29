import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { builtinModules } from 'module';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: id => /^@walletconnect/.test(id),
      output: {
        globals: {
          'events': 'events',
        },
      },
    },
    resolve: {
      alias: {
        ...builtinModules.reduce((prev, moduleName) => {
          return {...prev, [moduleName]: false}
        }, {}),
        'events': 'events'
      }
    }
  }
})
