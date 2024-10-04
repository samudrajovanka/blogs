import type { Typography } from '@/components/elements/Text/types';
import type { HTMLAttributes } from "astro/types";

export type LinkProps = HTMLAttributes<'a'> & {
  class?: string;
  noDecoration?: boolean;
  typography?: Typography;
  isExternal?: boolean;
  removeExternalIcon?: boolean;
};
