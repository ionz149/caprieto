// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      options: {
        variants: [{
          src: ['./src/assets/fonts/Montserrat-Regular.woff2'],
          weight: 400,
          style: 'normal',
          display: 'swap'
        },
        {
          src: ['./src/assets/fonts/Montserrat-ExtraBold.woff2'],
          weight: 700,
          style: 'normal',
          display: 'swap'
        }]
      }
    }
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});