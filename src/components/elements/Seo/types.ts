export type SeoProps = {
  title?: string;
  withSuffix?: boolean;
  description?: string;
  keywords?: string[];
  thumbnail?: string;
  article?: {
    publishedTime?: string;
    authors?: string[];
    tags?: string[];
  }
};
