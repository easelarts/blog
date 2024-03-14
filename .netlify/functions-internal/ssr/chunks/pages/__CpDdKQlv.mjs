import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './404_Donv9pC1.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent, h as renderHead, f as renderSlot, F as Fragment, u as unescapeHTML, s as spreadAttributes } from '../astro_CZnb-feK.mjs';
import 'kleur/colors';
import 'clsx';
import camelcase from 'camelcase';

var P = Object.defineProperty, _ = (r, t, e) => t in r ? P(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, p = (r, t, e) => (_(r, typeof t != "symbol" ? t + "" : t, e), e);
class z {
  constructor() {
    p(this, "isCDNUrl", (t = "") => t.indexOf("/cdn/") > -1), p(this, "getOptionsPage", (t, e = 25, o = 1) => ({
      ...t,
      per_page: e,
      page: o
    })), p(this, "delay", (t) => new Promise((e) => setTimeout(e, t))), p(this, "arrayFrom", (t = 0, e) => [...Array(t)].map(e)), p(this, "range", (t = 0, e = t) => {
      const o = Math.abs(e - t) || 0, s = t < e ? 1 : -1;
      return this.arrayFrom(o, (a, n) => n * s + t);
    }), p(this, "asyncMap", async (t, e) => Promise.all(t.map(e))), p(this, "flatMap", (t = [], e) => t.map(e).reduce((o, s) => [...o, ...s], [])), p(this, "escapeHTML", function(t) {
      const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, o = /[&<>"']/g, s = RegExp(o.source);
      return t && s.test(t) ? t.replace(o, (a) => e[a]) : t;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(t, e, o) {
    const s = [];
    for (const a in t) {
      if (!Object.prototype.hasOwnProperty.call(t, a))
        continue;
      const n = t[a], c = o ? "" : encodeURIComponent(a);
      let l;
      typeof n == "object" ? l = this.stringify(
        n,
        e ? e + encodeURIComponent("[" + c + "]") : c,
        Array.isArray(n)
      ) : l = (e ? e + encodeURIComponent("[" + c + "]") : c) + "=" + encodeURIComponent(n), s.push(l);
    }
    return s.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us, cn, ap or ca
   * @return {String} The base URL of the region
   */
  getRegionURL(t) {
    const e = "api.storyblok.com", o = "api-us.storyblok.com", s = "app.storyblokchina.cn", a = "api-ap.storyblok.com", n = "api-ca.storyblok.com";
    switch (t) {
      case "us":
        return o;
      case "cn":
        return s;
      case "ap":
        return a;
      case "ca":
        return n;
      default:
        return e;
    }
  }
}
const U = function(r, t) {
  const e = {};
  for (const o in r) {
    const s = r[o];
    t.indexOf(o) > -1 && s !== null && (e[o] = s);
  }
  return e;
}, D = (r) => r === "email", B = () => ({
  singleTag: "hr"
}), q = () => ({
  tag: "blockquote"
}), F = () => ({
  tag: "ul"
}), J = (r) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: r.attrs
    }
  ]
}), K = () => ({
  singleTag: "br"
}), V = (r) => ({
  tag: `h${r.attrs.level}`
}), H = (r) => ({
  singleTag: [
    {
      tag: "img",
      attrs: U(r.attrs, ["src", "alt", "title"])
    }
  ]
}), G = () => ({
  tag: "li"
}), W = () => ({
  tag: "ol"
}), Y = () => ({
  tag: "p"
}), Q = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": r.attrs.name,
        emoji: r.attrs.emoji
      }
    }
  ]
}), X = () => ({
  tag: "b"
}), Z = () => ({
  tag: "s"
}), ee = () => ({
  tag: "u"
}), te = () => ({
  tag: "strong"
}), re = () => ({
  tag: "code"
}), oe = () => ({
  tag: "i"
}), se = (r) => {
  if (!r.attrs)
    return {
      tag: ""
    };
  const t = new z().escapeHTML, e = { ...r.attrs }, { linktype: o = "url" } = r.attrs;
  if (delete e.linktype, e.href && (e.href = t(r.attrs.href || "")), D(o) && (e.href = `mailto:${e.href}`), e.anchor && (e.href = `${e.href}#${e.anchor}`, delete e.anchor), e.custom) {
    for (const s in e.custom)
      e[s] = e.custom[s];
    delete e.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: e
      }
    ]
  };
}, ae = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ne = () => ({
  tag: "sub"
}), le = () => ({
  tag: "sup"
}), ie = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ce = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${r.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ge = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${r.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ue = {
  nodes: {
    horizontal_rule: B,
    blockquote: q,
    bullet_list: F,
    code_block: J,
    hard_break: K,
    heading: V,
    image: H,
    list_item: G,
    ordered_list: W,
    paragraph: Y,
    emoji: Q
  },
  marks: {
    bold: X,
    strike: Z,
    underline: ee,
    strong: te,
    code: re,
    italic: oe,
    link: se,
    styled: ae,
    subscript: ne,
    superscript: le,
    anchor: ie,
    highlight: ce,
    textStyle: ge
  }
}, pe = function(r) {
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, e = /[&<>"']/g, o = RegExp(e.source);
  return r && o.test(r) ? r.replace(e, (s) => t[s]) : r;
};
class fe {
  constructor(t) {
    p(this, "marks"), p(this, "nodes"), t || (t = ue), this.marks = t.marks || [], this.nodes = t.nodes || [];
  }
  addNode(t, e) {
    this.nodes[t] = e;
  }
  addMark(t, e) {
    this.marks[t] = e;
  }
  render(t, e = { optimizeImages: !1 }) {
    if (t && t.content && Array.isArray(t.content)) {
      let o = "";
      return t.content.forEach((s) => {
        o += this.renderNode(s);
      }), e.optimizeImages ? this.optimizeImages(o, e.optimizeImages) : o;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(t, e) {
    let o = 0, s = 0, a = "", n = "";
    typeof e != "boolean" && (typeof e.width == "number" && e.width > 0 && (a += `width="${e.width}" `, o = e.width), typeof e.height == "number" && e.height > 0 && (a += `height="${e.height}" `, s = e.height), (e.loading === "lazy" || e.loading === "eager") && (a += `loading="${e.loading}" `), typeof e.class == "string" && e.class.length > 0 && (a += `class="${e.class}" `), e.filters && (typeof e.filters.blur == "number" && e.filters.blur >= 0 && e.filters.blur <= 100 && (n += `:blur(${e.filters.blur})`), typeof e.filters.brightness == "number" && e.filters.brightness >= -100 && e.filters.brightness <= 100 && (n += `:brightness(${e.filters.brightness})`), e.filters.fill && (e.filters.fill.match(/[0-9A-Fa-f]{6}/g) || e.filters.fill === "transparent") && (n += `:fill(${e.filters.fill})`), e.filters.format && ["webp", "png", "jpeg"].includes(e.filters.format) && (n += `:format(${e.filters.format})`), typeof e.filters.grayscale == "boolean" && e.filters.grayscale && (n += ":grayscale()"), typeof e.filters.quality == "number" && e.filters.quality >= 0 && e.filters.quality <= 100 && (n += `:quality(${e.filters.quality})`), e.filters.rotate && [90, 180, 270].includes(e.filters.rotate) && (n += `:rotate(${e.filters.rotate})`), n.length > 0 && (n = "/filters" + n))), a.length > 0 && (t = t.replace(/<img/g, `<img ${a.trim()}`));
    const c = o > 0 || s > 0 || n.length > 0 ? `${o}x${s}${n}` : "";
    return t = t.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${c}`
    ), typeof e != "boolean" && (e.sizes || e.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, (l) => {
      var i, g;
      const f = l.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (f && f.length > 0) {
        const d = {
          srcset: (i = e.srcset) == null ? void 0 : i.map((u) => {
            if (typeof u == "number")
              return `//${f}/m/${u}x0${n} ${u}w`;
            if (typeof u == "object" && u.length === 2) {
              let b = 0, y = 0;
              return typeof u[0] == "number" && (b = u[0]), typeof u[1] == "number" && (y = u[1]), `//${f}/m/${b}x${y}${n} ${b}w`;
            }
          }).join(", "),
          sizes: (g = e.sizes) == null ? void 0 : g.map((u) => u).join(", ")
        };
        let h = "";
        return d.srcset && (h += `srcset="${d.srcset}" `), d.sizes && (h += `sizes="${d.sizes}" `), l.replace(/<img/g, `<img ${h.trim()}`);
      }
      return l;
    })), t;
  }
  renderNode(t) {
    const e = [];
    t.marks && t.marks.forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderOpeningTag(a.tag));
    });
    const o = this.getMatchingNode(t);
    return o && o.tag && e.push(this.renderOpeningTag(o.tag)), t.content ? t.content.forEach((s) => {
      e.push(this.renderNode(s));
    }) : t.text ? e.push(pe(t.text)) : o && o.singleTag ? e.push(this.renderTag(o.singleTag, " /")) : o && o.html ? e.push(o.html) : t.type === "emoji" && e.push(this.renderEmoji(t)), o && o.tag && e.push(this.renderClosingTag(o.tag)), t.marks && t.marks.slice(0).reverse().forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderClosingTag(a.tag));
    }), e.join("");
  }
  renderTag(t, e) {
    return t.constructor === String ? `<${t}${e}>` : t.map((o) => {
      if (o.constructor === String)
        return `<${o}${e}>`;
      {
        let s = `<${o.tag}`;
        if (o.attrs)
          for (const a in o.attrs) {
            const n = o.attrs[a];
            n !== null && (s += ` ${a}="${n}"`);
          }
        return `${s}${e}>`;
      }
    }).join("");
  }
  renderOpeningTag(t) {
    return this.renderTag(t, "");
  }
  renderClosingTag(t) {
    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map((e) => e.constructor === String ? `</${e}>` : `</${e.tag}>`).join("");
  }
  getMatchingNode(t) {
    const e = this.nodes[t.type];
    if (typeof e == "function")
      return e(t);
  }
  getMatchingMark(t) {
    const e = this.marks[t.type];
    if (typeof e == "function")
      return e(t);
  }
  renderEmoji(t) {
    if (t.attrs.emoji)
      return t.attrs.emoji;
    const e = [
      {
        tag: "img",
        attrs: {
          src: t.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(e, " /");
  }
}
const ke = (r) => {
  if (typeof r != "object" || typeof r._editable > "u")
    return {};
  try {
    const t = JSON.parse(
      r._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
    );
    return t ? {
      "data-blok-c": JSON.stringify(t),
      "data-blok-uid": t.id + "-" + t.uid
    } : {};
  } catch {
    return {};
  }
};
let de;
const be = (r, t) => {
  r.addNode("blok", (e) => {
    let o = "";
    return e.attrs.body.forEach((s) => {
      o += t(s.component, s);
    }), {
      html: o
    };
  });
}, me = (r) => !r || !(r != null && r.content.some((t) => t.content || t.type === "blok" || t.type === "horizontal_rule")), ye = (r, t, e) => {
  let o = e || de;
  if (!o) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return me(r) ? "" : (t && (o = new fe(t.schema), t.resolver && be(o, t.resolver)), o.render(r));
};
function ve() {
  return globalThis.storyblokApiInstance || console.error("storyblokApiInstance has not been initialized correctly"), globalThis.storyblokApiInstance;
}
function Ie(r, t) {
  const e = globalThis.storyblokApiInstance.richTextResolver;
  if (!e) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return ye(r, t, e);
}

const $$Astro$9 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time class="text-light-primary dark:text-dark-primary"${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-uk", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })} </time>`;
}, "/home/jakeb/git/seb-blog/src/components/FormattedDate.astro", void 0);

const $$Astro$8 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$BlogPost$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BlogPost$1;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  console.log("pubDate", pubDate);
  console.log("updatedDate", updatedDate);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="antialiased text-light-text dark:text-dark-text bg-light-neutral dark:bg-dark-neutral"> ${renderComponent($$result, "Header", $$Header, {})} <main class="w-4/5 lg:w-8/12 mx-auto flex flex-col items-center pt-4 "> <article class="w-full flex flex-col md:flex-row items-start "> <div class="w-full md:w-1/3 ease-linear duration-200 self-start pr-8"> ${heroImage && renderTemplate`<img class="mx-auto rounded-lg shadow-md"${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="">`} <div class="mb-4 py-4 text-center leading-none"> <div class="mb-2 text-light-text dark:text-dark-text"> ${pubDate && renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": new Date(pubDate) })}`} ${updatedDate && renderTemplate`<div class="italic mt-2">
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": new Date(updatedDate) })} </div>`} </div> <h1 class="mb-2 font-bold text-xl">${title}</h1> <hr class="border-light-text dark:border-dark-text"> </div> </div> <div class="text-light-text dark:text-dark-text w-full md:w-2/3 "> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/jakeb/git/seb-blog/src/layouts/BlogPost.astro", void 0);

const $$Astro$7 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { blok, updatedDate } = Astro2.props;
  const content = Ie(blok.content);
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost$1, { "title": blok.title, "description": blok.description, "heroImage": blok.image.filename, "pubDate": blok.PublishDate, "updatedDate": updatedDate, ...ke(blok) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, { "class": "" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(content)}` })} ` })}`;
}, "/home/jakeb/git/seb-blog/src/storyblok/BlogPost.astro", void 0);

const $$Astro$6 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$About;
  const { blok, updatedDate } = Astro2.props;
  const content = Ie(blok.description);
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost$1, { "title": blok.title, "description": blok.description, "heroImage": blok.image.filename, "pubDate": blok.PublishDate, "updatedDate": updatedDate, ...ke(blok) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(content)}` })} ` })}`;
}, "/home/jakeb/git/seb-blog/src/storyblok/About.astro", void 0);

const $$Astro$5 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$BlogItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlogItem;
  const { post, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`${index === 0 ? "w-full" : "w-full md:w-1/2"} pl-2 pt-2 text-center decoration-0 ease-linear duration-200 first:mb-0 md:first:mb-4 first:text-center  md:first:text-2xl `, "class")}> <a class="m-0"${addAttribute(`/${post.slug}/`, "href")}> ${post.image && renderTemplate`<img class=" w-auto mb-2 rounded-lg"${addAttribute(post.image.filename, "src")} alt="">`} <h4 class="m-0 text-light-text dark:text-dark-text leading-none">${post.title}</h4> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": new Date(post.date) })} </a> <hr class="border-light-text dark:border-dark-text"> </li>`;
}, "/home/jakeb/git/seb-blog/src/components/BlogItem.astro", void 0);

const $$Astro$4 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$BlogPostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogPostList;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "published",
    content_type: "blogPost"
  });
  const posts = data.stories.map((story) => {
    return {
      title: story.content.title,
      date: new Date(story.published_at).toLocaleDateString("en-GB", { dateStyle: "full" }),
      description: story.content.description,
      slug: story.full_slug,
      image: story.content.image
    };
  });
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-col items-center min-h-screen w-full"> <section class="lg:w-5/12 w-4/5 ease-linear duration-200"> <ul class="flex flex-wrap list-none m-0 p-0 w-full"${spreadAttributes(ke(blok))}> ${posts.map((post, index) => renderTemplate`${renderComponent($$result, "BlogItem", $$BlogItem, { "post": post, "index": index })}`)} </ul> </section> </main>`;
}, "/home/jakeb/git/seb-blog/src/storyblok/BlogPostList.astro", void 0);

const $$Astro$3 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(ke(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </main>`;
}, "/home/jakeb/git/seb-blog/src/storyblok/Page.astro", void 0);

const components = {blogPost: $$BlogPost,about: $$About,blogPostList: $$BlogPostList,page: $$Page};

const $$Astro$2 = createAstro("https://easelartsbysarahelizabeth.co.uk");
const $$StoryblokComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = camelcase(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/home/jakeb/git/seb-blog/node_modules/.pnpm/@storyblok+astro@4.0.4_astro@4.5.3/node_modules/@storyblok/astro/components/StoryblokComponent.astro", void 0);

const $$Astro$1 = createAstro("https://easelartsbysarahelizabeth.co.uk");
async function getStaticPaths$1() {
  const sbApi = ve();
  const { data } = await sbApi.get("cdn/stories", {
    content_type: "about",
    version: "published"
  });
  const stories = Object.values(data.stories);
  return stories.map((story) => {
    return {
      params: { slug: story.slug }
    };
  });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const sbApi = ve();
  const { data } = await sbApi.get(`cdn/stories/about`, {
    version: "published"
  });
  const story = data.story;
  return renderTemplate`<html lang="en"> <head><title>Storyblok & Astro</title>${renderHead()}</head> <body> ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": story.content, "updatedDate": story.published_at })}</body></html>`;
}, "/home/jakeb/git/seb-blog/src/pages/about/[...slug].astro", void 0);
const $$file$1 = "/home/jakeb/git/seb-blog/src/pages/about/[...slug].astro";
const $$url$1 = "/about/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://easelartsbysarahelizabeth.co.uk");
async function getStaticPaths() {
  const sbApi = ve();
  const { data } = await sbApi.get("cdn/stories", {
    content_type: "blogPost",
    version: "published"
  });
  const stories = Object.values(data.stories);
  return stories.map((story) => {
    return {
      params: { slug: story.slug }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const sbApi = ve();
  const { slug } = Astro2.params;
  const { data } = await sbApi.get(`cdn/stories/blog/${slug}`, {
    version: "published"
  });
  const story = data.story;
  return renderTemplate`<html lang="en"> <head><title>Storyblok & Astro</title>${renderHead()}</head> <body> ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": story.content, "updatedDate": story.published_at })}</body></html>`;
}, "/home/jakeb/git/seb-blog/src/pages/blog/[...slug].astro", void 0);
const $$file = "/home/jakeb/git/seb-blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$StoryblokComponent as $, ____slug_$1 as _, ____slug_ as a, ve as v };
