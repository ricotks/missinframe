import { defineConfig } from 'astro/config';
import remark from '@astrojs/markdown-remark';

export default defineConfig({
  integrations: [remark()],
});