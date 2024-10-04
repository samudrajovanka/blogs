/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DDJhLqA4.mjs';
import 'kleur/colors';
import { g as getBlogs, c as $$Index$1, d as $$Index$2, j as $$Index$3, i as $$Index$4 } from '../chunks/blogStore_C98gmdvZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await getBlogs.get();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Index$4, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Index$1, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<header class="mb-10"> ${renderComponent($$result3, "Text", $$Index$2, { "as": "h1", "typography": "heading" }, { "default": ($$result4) => renderTemplate`My Blogs` })} ${renderComponent($$result3, "Text", $$Index$2, { "color": "subtitle", "class": "mt-2" }, { "default": ($$result4) => renderTemplate`
Explore my thoughts and expertise in these concise blog posts.
` })} </header> <div class="flex flex-col gap-10"> ${blogs.map((blog) => renderTemplate`${renderComponent($$result3, "BlogCard", $$Index$3, { "blog": blog })}`)} </div> ` })} ` })}`;
}, "C:/Users/Jovan/Documents/project/portfolio/blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jovan/Documents/project/portfolio/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
