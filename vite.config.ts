import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'development'
    ? '/' // sempre raiz no dev
    : process.env.VERCEL
    ? '/' // raiz no vercel
    : '/cabelereira/', // github pages
  plugins: [react()],
})
