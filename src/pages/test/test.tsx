import { Button } from '@/components/Button';
import { paths } from '@/shared/paths';
import type { IMetadata } from '@/types';

export const metadata: IMetadata = {
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
