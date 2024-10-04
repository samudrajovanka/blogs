const MEDIUM_USERNAME = '@samudrajovanka';

export const getSlugBlogMedium = (blogUrl: string): string => {
  const url = new URL(blogUrl);

  return url.pathname.split(`/${MEDIUM_USERNAME}/`)[1];
}

export const getOriginalEmbedFromMedium = async (mediaUrl: string) => {
  const response = await fetch(mediaUrl, {
    redirect: 'manual'
  });

  return response.headers.get('Location');
}

export const parseToIframe = (originalUrl: string) => {
  const url = new URL(originalUrl);
  let iframe = null;

  switch (url.host) {
    case 'www.youtube.com':
      const videoId = url.searchParams.get('v');

      iframe = `
        <iframe
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          class="w-full aspect-video rounded-xl"
          allowfullscreen
        ></iframe>`;

      break;
    default:
      break;
  }

  return iframe;
}