import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cp7BR6es.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_BVUAmTrq.mjs');
const _page1 = () => import('./chunks/404_DcStx__7.mjs');
const _page2 = () => import('./chunks/index_D1JwVErM.mjs');
const _page3 = () => import('./chunks/_.._Cw04FGlz.mjs');
const _page4 = () => import('./chunks/index_DpIVGFly.mjs');
const _page5 = () => import('./chunks/_.._uJ0RfgBL.mjs');
const _page6 = () => import('./chunks/rss_1vBav-mF.mjs');
const _page7 = () => import('./chunks/index_Da7HsbKZ.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.3_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/about/[...slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/index.astro", _page7]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "520b4ecc-2154-4370-a41d-1c93a152fbd6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
