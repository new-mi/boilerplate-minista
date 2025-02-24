import { Header } from '@/components/Header/Header';
import { type PageProps, type Metadata } from 'minista';

export const metadata: Metadata = {
  title: 'Home',
};

export default function (props: PageProps) {
  return (
    <>
      <Header />
      <h1>Hello Home Page!</h1>
    </>
  );
}
