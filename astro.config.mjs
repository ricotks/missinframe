import { defineConfig } from 'astro/config';
import { astroMarkdownRemark } from '@astrojs/markdown-remark';

export default defineConfig({
  integrations: [astroMarkdownRemark()],
});