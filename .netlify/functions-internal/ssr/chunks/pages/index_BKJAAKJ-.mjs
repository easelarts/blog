import { $ as $$BaseHead, S as SITE_TITLE, c as SITE_DESCRIPTION, a as $$Header, b as $$Footer } from './404_Donv9pC1.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, h as renderHead } from '../astro_CZnb-feK.mjs';
import 'kleur/colors';
import { v as ve, $ as $$StoryblokComponent } from './__CpDdKQlv.mjs';

const $$Astro$2 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/stories/about", {
    version: "published"
  });
  const content = data.story.content;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="bg-light-neutral dark:bg-dark-neutral text-light-text dark:text-dark-text"> ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": content, "updatedDate": data.story.published_at })}</body></html>`;
}, "/home/jakeb/git/seb-blog/src/pages/about/index.astro", void 0);
const $$file$2 = "/home/jakeb/git/seb-blog/src/pages/about/index.astro";
const $$url$2 = "/about";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "published"
  });
  const content = data.story.content;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="bg-light-neutral dark:bg-dark-neutral"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": content, "updatedDate": data.story.published_at }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}</body></html>`;
}, "/home/jakeb/git/seb-blog/src/pages/blog/index.astro", void 0);
const $$file$1 = "/home/jakeb/git/seb-blog/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="bg-light-neutral dark:bg-dark-neutral"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex flex-col justify-center items-center min-h-full text-light-text dark:text-dark-text"> <div class="flex flex-col justify-center items-center w-1/2 "> <img src="/images/logo-light.svg" alt="Logo" class="w-100 h-100 mb-6 mt-10 logo ease-linear duration-200 "> <p class="text-2xl md:text-4xl text-center">
Welcome to the Easel Arts by Sarah Elizabeth website! Feel free to have a look around, 
					view my <a class="font-semibold text-light-primary dark:text-dark-primary hover:underline underline-offset-2 decoration-2 decoration-light-primary dark:decoration-dark-primary" href="https://shop.easelartsbysarahelizabeth.co.uk" target="_blank">Shop</a>, 
					read my <a class="font-semibold text-light-primary dark:text-dark-primary hover:underline underline-offset-2 decoration-2 decoration-light-primary dark:decoration-dark-primary" href="/blog">Blog</a>
or learn a bit <a class="font-semibold text-light-primary dark:text-dark-primary hover:underline underline-offset-2 decoration-2 decoration-light-primary dark:decoration-dark-primary" href="about">About Me</a>.
</p> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/jakeb/git/seb-blog/src/pages/index.astro", void 0);

const $$file = "/home/jakeb/git/seb-blog/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
