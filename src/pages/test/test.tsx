import { Button } from '@/components/Button';
import { paths } from '@/shared/paths';
import { Metadata } from 'minista';

export const metadata: Metadata = {
  title: 'Test',
};

export default function () {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button href={paths.home}>Go home</Button>
      <Button id="test-click">alert</Button>
    </div>
  );
}
