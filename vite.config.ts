import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For project pages (username.github.io/repo-name), set base to '/repo-name/'
// For user/org site (username.github.io), keep base as '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
