import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
    integrations: [tailwind(), icon(), react()],
    output: 'server',
    adapter: node({ mode: 'standalone' }),
    server: {
        port: 3000
    }
});