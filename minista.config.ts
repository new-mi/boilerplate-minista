import path from 'path';
import { defineConfig } from 'minista';

export default defineConfig({
  beautify: {
    useHtml: true,
    useAssets: true,
  },
  resolve: {
    alias: [{ find: '@/', replacement: path.resolve('src') + '/' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        silenceDeprecations: ['legacy-js-api', 'import'],
      },
    },
  },
});
