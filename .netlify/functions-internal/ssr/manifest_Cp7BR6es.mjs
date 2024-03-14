import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_CZnb-feK.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.5.3_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.D0u-8-jZ.css"},{"type":"inline","content":"@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}body{font-family:LibreBaskerville,sans-serif;margin:0;padding:0}@media (max-width: 720px){.social-links[data-astro-cid-3ef6ksr2]{display:none}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.D0u-8-jZ.css"},{"type":"inline","content":"@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}body{font-family:LibreBaskerville,sans-serif;margin:0;padding:0}@media (max-width: 720px){.social-links[data-astro-cid-3ef6ksr2]{display:none}}\n"}],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.D0u-8-jZ.css"},{"type":"inline","content":"@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}body{font-family:LibreBaskerville,sans-serif;margin:0;padding:0}@media (max-width: 720px){.social-links[data-astro-cid-3ef6ksr2]{display:none}}\n"}],"routeData":{"route":"/about/[...slug]","isIndex":false,"type":"page","pattern":"^\\/about(?:\\/(.*?))?\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/about/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.D0u-8-jZ.css"},{"type":"inline","content":"@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}body{font-family:LibreBaskerville,sans-serif;margin:0;padding:0}@media (max-width: 720px){.social-links[data-astro-cid-3ef6ksr2]{display:none}}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.D0u-8-jZ.css"},{"type":"inline","content":"@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}body{font-family:LibreBaskerville,sans-serif;margin:0;padding:0}@media (max-width: 720px){.social-links[data-astro-cid-3ef6ksr2]{display:none}}\n"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DtiVTKUw.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.D0u-8-jZ.css"},{"type":"inline","content":"@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:LibreBaskerville;src:url(/fonts/LibreBaskerville-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}body{font-family:LibreBaskerville,sans-serif;margin:0;padding:0}@media (max-width: 720px){.social-links[data-astro-cid-3ef6ksr2]{display:none}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://easelartsbysarahelizabeth.co.uk","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jakeb/git/seb-blog/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/jakeb/git/seb-blog/src/pages/about/[...slug].astro",{"propagation":"none","containsHead":true}],["/home/jakeb/git/seb-blog/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["/home/jakeb/git/seb-blog/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["/home/jakeb/git/seb-blog/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/home/jakeb/git/seb-blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/jakeb/git/seb-blog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/node_modules/.pnpm/astro@4.5.3_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_dkCESzZO.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_BEmW-iOa.mjs","\u0000@astrojs-manifest":"manifest_Cp7BR6es.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.5.3_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BVUAmTrq.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_DcStx__7.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"chunks/index_D1JwVErM.mjs","\u0000@astro-page:src/pages/about/[...slug]@_@astro":"chunks/_.._Cw04FGlz.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_DpIVGFly.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._uJ0RfgBL.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_1vBav-mF.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Da7HsbKZ.mjs","/home/jakeb/git/seb-blog/src/components/ThemeToggle.tsx":"_astro/ThemeToggle.BwxS3s6o.js","astro:scripts/page.js":"_astro/page.DtiVTKUw.js","@astrojs/preact/client.js":"_astro/client.CgUnh2kq.js","/home/jakeb/git/seb-blog/node_modules/.pnpm/@preact+signals@1.2.2_preact@10.19.6/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.B_exu38U.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.D0u-8-jZ.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/_astro/ThemeToggle.BwxS3s6o.js","/_astro/client.CgUnh2kq.js","/_astro/hooks.module.D9Sbrd7S.js","/_astro/page.DtiVTKUw.js","/_astro/preact.module.5IcniKGG.js","/_astro/signals.module.B_exu38U.js","/fonts/LibreBaskerville-Bold.ttf","/fonts/LibreBaskerville-Italic.ttf","/fonts/LibreBaskerville-Regular.ttf","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/images/logo-dark.svg","/images/logo-header-dark.svg","/images/logo-header-light.svg","/images/logo-light.svg","/images/sarah-bailey.jpg","/_astro/page.DtiVTKUw.js"],"buildFormat":"directory"});

export { manifest };
