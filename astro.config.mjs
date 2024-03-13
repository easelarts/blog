import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import storyblok from '@storyblok/astro';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  site: 'https://easelartsbysarahelizabeth.co.uk',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(),
    preact(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: 'storyblok/BlogPost',
        about: 'storyblok/About',
        blogPostList: 'storyblok/BlogPostList',
        page: 'storyblok/Page',
      },
      apiOptions: {
        region: 'eu',
      },
    }),
  ],
});