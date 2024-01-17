import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default ({ mode, command }) => {
  console.log('🚀 ~ command:', command);
  console.log('🚀 ~ mode:', mode);
  return defineConfig({
    plugins: [vue()],
    build: {
      lib: {
        entry: resolve(__dirname, 'lib/main.ts'),
        name: 'handleTool',
        fileName: (format) => `handle-tool.${format}.js`
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: '0.0.0.0',
      port: 3101,
      open: true,
      strictPort: true
    }
  });
};
