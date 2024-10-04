import type { GetMediumBlogResponse } from './types';

export const getMediumBlogs = async () => {
  const data: GetMediumBlogResponse = await fetch(import.meta.env.API_MEDIUM_FEED_URL)
    .then(res => res.json())

  return data;
};
