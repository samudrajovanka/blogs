import { getSlugBlogMedium } from "@/lib/common";
import { getMediumBlogs } from "@/repositories/mediumBlog";
import type { Blog } from "@/repositories/mediumBlog/types";
import { atom, computed } from 'nanostores';

const $blogs = atom<Blog[]>([]);

export const getBlogs = computed($blogs, async blogs => {
  if (blogs.length !== 0) return blogs;

  const blogResponse = await getMediumBlogs();
  $blogs.set(blogResponse.items);

  return blogResponse.items;
});

export const getBlogBySlug = (slug: string) => computed($blogs, blogs => {
  const blog = blogs.find(blog => getSlugBlogMedium(blog.link) === slug);

  return blog;
});