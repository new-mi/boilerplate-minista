import { paths } from '@/shared/paths';
import clsx from 'clsx';
import { config } from '@/shared/config';

export const Header = ({ name, className }: { name?: string; className?: string }) => {
  return (
    <div className={clsx('header', className)}>
      <h1>
        this is header name <span>{name}</span>
      </h1>
      <span>{name}</span>
      <span>{JSON.stringify(config)}</span>
      {config.test2 && <span>visible</span>}
      <nav>
        <a href={paths.home}>home page</a>
        <a href={paths.example}>example page</a>
        <a href={paths.test}>test page</a>
      </nav>
    </div>
  );
};
