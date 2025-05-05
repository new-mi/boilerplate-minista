import { paths } from '@/shared/paths';
import clsx from 'clsx';
import { config } from '@/shared/config';

export interface IHeaderProps {
  name?: string;
  className?: string;
}

export const Header = ({ name, className }: IHeaderProps) => {
  return (
    <div className={clsx('header', className)}>
      <h1>
        this is header name <span>{name}</span>
      </h1>
      <span>{name}</span>
      <span>{JSON.stringify(config)}</span>
      <br />
      {config.test2 && <span>if config.test2 == 'true' then visible current line</span>}
      <nav>
        <a href={paths.home}>home page</a>
        <a href={paths.example}>example page</a>
        <a href={paths.test}>test page</a>
      </nav>
    </div>
  );
};
