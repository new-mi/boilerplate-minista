import { Head, type GlobalProps } from 'minista';

export default function ({ children, title }: GlobalProps) {
  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Boilerplate | {title}</title>
        <link rel="stylesheet" href="/src/assets/entries/css-libs.scss" data-minista-entry-name="css/libs" />
        <link rel="stylesheet" href="/src/assets/entries/css-index.scss" data-minista-entry-name="css/index" />
        <link rel="stylesheet" href="/src/assets/entries/css-custom.scss" data-minista-entry-name="css/custom" />
      </Head>
      {children}
      <script src="/src/assets/entries/js-libs.ts" type="module" data-minista-entry-name="js/libs" />
      <script src="/src/assets/entries/js-index.ts" type="module" data-minista-entry-name="js/index" />
      <script src="/src/assets/entries/js-custom.ts" type="module" data-minista-entry-name="js/custom" />
    </>
  );
}
