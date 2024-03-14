import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CD4zRXIl.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_BVUAmTrq.mjs');
const _page1 = () => import('./chunks/404_Tpw26BCw.mjs');
const _page2 = () => import('./chunks/index_BwWVJ_ee.mjs');
const _page3 = () => import('./chunks/_.._BVQvFIMq.mjs');
const _page4 = () => import('./chunks/index_BDgC_mtj.mjs');
const _page5 = () => import('./chunks/_.._CKf96zgy.mjs');
const _page6 = () => import('./chunks/rss_DqJetxEQ.mjs');
const _page7 = () => import('./chunks/index_Dhmr48Pn.mjs');

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
    "middlewareSecret": "b0cf2ff4-6591-4340-846c-866c0245e4c1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
