import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
  const { pathname } = useRouter();

  const isActive = (path) => pathname === path;

  return (
    <nav>
      <Link href="/">
        <a data-active={isActive('/')}>
          <b>Journal</b>
        </a>
      </Link>
    </nav>
  );
};
