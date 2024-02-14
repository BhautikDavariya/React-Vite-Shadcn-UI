# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


how to install this project

npm create vite@latest
React - javascript

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

create new file jsconfig.json
past code:-
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}

refactor vite.config.js file code:-
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


install ui plugin
npx shadcn-ui@latest init
√ Would you like to use TypeScript (recommended)? ... no
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... src/index.css
√ Would you like to use CSS variables for colors? ... yes
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no
√ Write configuration to components.json. Proceed? ... yes

npx shadcn-ui@latest add button


import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}


npm install -D sass sass-loader

vite.config.js
