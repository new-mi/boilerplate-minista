import { Header } from '@/components/Header/Header';
import { Head } from 'minista';

export default function () {
  return (
    <>
      <Head>
        <title>Cutsom head</title>
      </Head>
      <Header name="example" className="header-example" />
      <h1>Hello Example Page!</h1>
    </>
  );
}
