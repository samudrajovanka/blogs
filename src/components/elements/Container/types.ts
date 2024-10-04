type ContainerComponent =
  | 'div'
  | 'section'
  | 'article'
  | 'main'
  | 'header'
  | 'footer'
;

export type ContainerProps = {
  /**
   * @default 'div'
   */
  as?: ContainerComponent;
  class?: string;
};
