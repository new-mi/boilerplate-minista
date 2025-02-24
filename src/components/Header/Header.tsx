import clsx from 'clsx';

export const Header = ({ name, className }: { name?: string; className?: string }) => {
  return (
    <div className={clsx('header', className)}>
      <h1>
        this is header name <span>{name}</span>
      </h1>
      <span>{name}</span>
      <nav>
        <a href="/">home page</a>
        <a href="/example">example page</a>
      </nav>
    </div>
  );
};
