/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DDJhLqA4.mjs';
import 'kleur/colors';
import DOMPurify from 'isomorphic-dompurify';
import hljs from 'highlight.js';
import { load } from 'cheerio';
import { g as getBlogs, a as getBlogBySlug, b as getOriginalEmbedFromMedium, p as parseToIframe, $ as $$Index$1, c as $$Index$2, d as $$Index$3, e as $$Index$4, f as $$Index$5, h as $$Index$6, i as $$Index$7 } from '../chunks/blogStore_C98gmdvZ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  await getBlogs.get();
  const blog = getBlogBySlug(slug).get();
  if (!blog) {
    return Astro2.redirect("/404");
  }
  const contentWithoutTitle = blog.content.replace(/\n<h3>([\s\S]*?)<\/h3>/, "");
  const contentSanitize = DOMPurify.sanitize(contentWithoutTitle);
  const $content = load(contentSanitize);
  $content("pre").each((_, element) => {
    const codeHighlight = hljs.highlightAuto(element.children[0].data).value;
    $content(element).html(`<code>${codeHighlight}</code>`);
  });
  const mediaLinks = $content('a[href*="https://medium.com/media/"]');
  await Promise.all(mediaLinks.map(async (_, element) => {
    const mediaLink = $content(element).attr("href");
    if (!mediaLink) return null;
    const originalUrl = await getOriginalEmbedFromMedium(mediaLink);
    if (!originalUrl) return null;
    const iframeTag = parseToIframe(originalUrl);
    if (!iframeTag) return null;
    $content(element).replaceWith(iframeTag);
  }).get());
  return renderTemplate`${renderComponent($$result, "Seo", $$Index$1, { "title": blog.title, "withSuffix": true, "keywords": blog.categories, ",": true, "thumbnail": blog.thumbnail, ",": true, "article": {
    authors: [blog.author],
    publishedTime: blog.pubDate,
    tags: blog.categories
  }, ",": true })} ${renderComponent($$result, "BaseLayout", $$Index$7, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Index$2, { "class": "flex justify-center gap-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex-1 max-w-3xl"> <header> ${renderComponent($$result3, "Text", $$Index$3, { "as": "h1", "resetTypography": true, "class": "text-3xl font-bold" }, { "default": ($$result4) => renderTemplate`${blog.title}` })} <div class="mt-2 flex flex-col sm:flex-row gap-1 justify-between"> ${renderComponent($$result3, "BlogTime", $$Index$4, { "content": blog.content, "publishedDate": blog.pubDate })} ${renderComponent($$result3, "Link", $$Index$5, { "href": blog.link, "isExternal": true, "typography": "small" }, { "default": ($$result4) => renderTemplate`read on medium` })} </div> </header> <hr class="my-10"> <div class="blog-content">${unescapeHTML($content.html())}</div> ${blog.categories.length && renderTemplate`<div> <hr class="my-10"> <div class="flex gap-4 flex-wrap mt-2"> ${blog.categories.map((category) => renderTemplate`${renderComponent($$result3, "Tag", $$Index$6, {}, { "default": ($$result4) => renderTemplate`${category}` })}`)} </div> </div>`} </div> ` })} ` })}`;
}, "C:/Users/Jovan/Documents/project/portfolio/blog/src/pages/[slug]/index.astro", void 0);

const $$file = "C:/Users/Jovan/Documents/project/portfolio/blog/src/pages/[slug]/index.astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
