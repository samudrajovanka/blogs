/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PORTFOLIO_URL: string;
  readonly APP_URL: string;
  readonly API_MEDIUM_FEED_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}