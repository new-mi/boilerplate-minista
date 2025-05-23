import type { IGlobalProps } from '@/types';
import { Head } from 'minista';

export default function ({
  children,
  title,
  scriptAfter,
  scriptBefore,
  stylesheetAfter,
  stylesheetBefore,
}: IGlobalProps) {
  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Boilerplate | {title}</title>
        {stylesheetBefore}
        <link rel="stylesheet" href="/src/assets/entries/css-libs.scss" data-minista-entry-name="css/libs.min" />
        <link rel="stylesheet" href="/src/assets/entries/css-index.scss" data-minista-entry-name="css/index" />
        {stylesheetAfter}
      </Head>
      {children}
      {scriptBefore}
      <script src="/src/assets/entries/js-libs.ts" type="module" data-minista-entry-name="js/libs.min" />
      <script src="/src/assets/entries/js-index.ts" type="module" data-minista-entry-name="js/index" />
      {scriptAfter}
    </>
  );
}
