/* empty css                           */
import { storyblokInit, apiPlugin } from '@storyblok/js';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_CZnb-feK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const { storyblokApi } = storyblokInit({
            accessToken: "tHiJFNzZiHdjLhcXbDkcWAtt",
            use: [apiPlugin],
            apiOptions: {"region":"eu"},
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

const $$Astro$4 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/jakeb/git/seb-blog/src/components/BaseHead.astro", void 0);

const $$Astro$3 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`inline-block ml-2 mr-2 ${className} ${isActive ? "font-semibold border-b-4 border-light-secondary" : ""}`, "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/jakeb/git/seb-blog/src/components/HeaderLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a || (_a = __template(["", '<header class="bg-light-neutral dark:bg-dark-neutral text-light-text dark:text-dark-text m-0 mb-5 pt-0 pb-0 pl-4 pr-4 w-screen" data-astro-cid-3ef6ksr2> <nav class="flex items-center justify-center pt-2 sm:pt-0 sm:justify-between decoration-0 ease-linear duration-200" data-astro-cid-3ef6ksr2> <div class="pb-14 flex justify-center items-center  justify-self-start w-0 sm:w-auto" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2><img src="/images/logo-header-light.svg" alt="Logo" class="w-0 sm:w-36 md:w-56 logo-header ease-linear duration-200 absolute" data-astro-cid-3ef6ksr2> </a> </div> <div class="flex items-center" data-astro-cid-3ef6ksr2> <div class="internal-links justify-end px-2" data-astro-cid-3ef6ksr2> ', " ", " ", " ", " ", ' </div> <div class=" social-links flex text-light-secondary dark:text-dark-secondary" data-astro-cid-3ef6ksr2> <a href="https://www.instagram.com/easelartsbysarahelizabeth/" class="pt-4 pb-4 pl-2 pr-2 border-b-4 border-solid border-transparent decoration-0" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Follow Me on Facebook</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://www.instagram.com/easelartsbysarahelizabeth/" class="pt-4 pb-4 pl-2 pr-2 border-b-4 border-solid border-transparent decoration-0" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Follow Me on Instagram</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2> <rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-3ef6ksr2></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-3ef6ksr2></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-astro-cid-3ef6ksr2></line> </svg> </a> </div> </div> </nav> </header>  <script>\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n  window.localStorage.setItem("theme", theme);\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://shop.easelartsbysarahelizabeth.co.uk", "target": "_blank", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Shop` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` }), renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`About` }), renderComponent($$result, "ThemeToggle", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-3ef6ksr2": true, "client:component-path": "/home/jakeb/git/seb-blog/src/components/ThemeToggle.tsx", "client:component-export": "default" }));
}, "/home/jakeb/git/seb-blog/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bottom-0 text-center flex flex-col justify-center gap-4 mt-4 bg-light-neutral dark:bg-dark-neutral text-light-text dark:text-dark-text w-screen pt-4 pb-4"> <div class="flex justify-center gap-4 text-light-secondary dark:text-dark-secondary"> <a href="https://m.webtoo.ls/@asgtro" target="_blank"> <span class="sr-only">Follow Me on Facebook</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook" aria-hidden="true" width="32" height="32"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg> </a> <a href="https://instagram.com/yourusername" target="_blank"> <span class="sr-only">Follow Me on Instagram</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram" aria-hidden="true" width="32" height="32"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg> </a> </div>
&copy; ${today.getFullYear()} Easel Arts by Sarah Elizabeth. All rights reserved.
<p> Designed and Built with <a href="https://astro.build/" target="_blank" class="font-semibold text-light-primary dark:text-dark-primary hover:underline underline-offset-2 decoration-2 decoration-light-primary dark:decoration-dark-primary">Astro</a> by <a href="https://jaketbailey.co.uk" target="_blank" class="font-semibold text-light-primary dark:decoration-dark-primary hover:underline underline-offset-2 decoration-2 decoration-light-primary dark:text-dark-primary">Jake Bailey</a>.</p> </footer>`;
}, "/home/jakeb/git/seb-blog/src/components/Footer.astro", void 0);

const SITE_TITLE = "Easel Arts";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="bg-teal-50"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex flex-col justify-center items-center min-h-fit"> <div class="flex flex-col justify-center items-center w-1/2 "> <img src="/images/logo.svg" alt="Logo" class="w-100 h-100 mb-6 mt-10"> <p class="text-2xl md:text-4xl text-center font-bold">404 - Not Found <br>Sorry, this page does not exist. </p> <p class="text-2xl md:text-4xl text-center pt-3">
You can
					view my <a class="font-semibold text-teal-700 hover:underline underline-offset-2 decoration-2 decoration-teal-500" href="https://shop.easelartsbysarahelizabeth.co.uk" target="_blank">Shop</a>, 
					read my <a class="font-semibold text-teal-700 hover:underline underline-offset-2 decoration-2 decoration-teal-500" href="/blog">Blog</a>
or learn a bit <a class="font-semibold text-teal-700 hover:underline underline-offset-2 decoration-2 decoration-teal-500" href="about">About Me</a>.
</p> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/jakeb/git/seb-blog/src/pages/404.astro", void 0);

const $$file = "/home/jakeb/git/seb-blog/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$404,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE as S, _404 as _, $$Header as a, $$Footer as b, SITE_DESCRIPTION as c };
