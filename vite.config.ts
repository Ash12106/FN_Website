import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Optimize bundle size (use esbuild default instead of terser)
        minify: 'esbuild',
        // Code splitting configuration
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunks
              'vendor-react': ['react', 'react-dom'],
              'vendor-framer': ['framer-motion'],
              'vendor-three': ['three', '@react-three/fiber', '@react-three/drei', 'ogl'],
              'vendor-ui': ['class-variance-authority', 'tailwindcss-animate'],
              
              // Component chunks (lazy loaded)
              'chunk-gallery': ['./components/Gallery.tsx'],
              'chunk-dome': ['./components/DomeGallery.tsx'],
              'chunk-team': ['./components/Team.tsx'],
              'chunk-focus': ['./components/Focus.tsx'],
              'chunk-support': ['./components/Support.tsx'],
            },
            // Increase chunk size limit from 500kb to 1000kb
            chunkFileNames: (chunkInfo) => {
              const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop().split('.')[0] : 'chunk';
              return `chunks/[name]-${facadeModuleId}-[hash].js`;
            },
            entryFileNames: 'js/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]',
          },
        },
        // Split vendor and app code more aggressively
        chunkSizeWarningLimit: 1000,
        sourcemap: false,
        cssCodeSplit: true,
      },
    };
});
