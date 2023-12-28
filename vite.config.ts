import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import { z } from 'zod';

const appVersion = 'v0.0.1';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: z.coerce.number().parse(process.env.PORT || 4000), // P5: update after env parser
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: 'prompt',
      workbox: {
        cacheId: `lkl-bank-${appVersion}`,
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*'],
      },
      includeAssets: ['**/*'],
      manifest: {
        short_name: 'Cocktail Menu',
        name: 'Cocktail Menu',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'logo192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'logo512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
    }),
  ],
});
