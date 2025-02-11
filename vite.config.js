import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/bemreceptivo/',
  build: {
    sourcemap: true, // Ajuda a depurar e otimizar a performance
    minify: 'terser',
    cssCodeSplit: true, // Separa o CSS em arquivos menores
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react"; // React separado
            if (id.includes("tailwindcss")) return "tailwind"; // Tailwind separado
            return "vendor"; // Restante das libs
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // Remove logs do console
      },
    },
  },
})
