import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Head } from 'minista';

export default function () {
  return (
    <DefaultLayout>
      <Head>
        <title>Cutsom head</title>
      </Head>
      <h1>Hello Example Page!</h1>
    </DefaultLayout>
  );
}
