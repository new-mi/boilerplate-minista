import { DefaultLayout } from '@/layouts/DefaultLayout';
import { type PageProps, type Metadata } from 'minista';

export const metadata: Metadata = {
  title: 'Home',
};

export default function (props: PageProps) {
  return (
    <DefaultLayout>
      <h1>Hello Home Page!</h1>
    </DefaultLayout>
  );
}
