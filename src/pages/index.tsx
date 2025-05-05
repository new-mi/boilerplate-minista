import { DefaultLayout } from '@/layouts/DefaultLayout';
import type { IMetadata, IPageProps } from '@/types';

export const metadata: IMetadata = {
  title: 'Home',
  scriptAfter: <script src="/src/assets/entries/js-custom.ts" type="module" data-minista-entry-name="js/custom" />,
};

export default function (props: IPageProps) {
  return (
    <DefaultLayout>
      {JSON.stringify(props)}
      <h1>Hello Home Page!</h1>
    </DefaultLayout>
  );
}
