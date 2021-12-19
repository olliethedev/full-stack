import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const { pathname } = useRouter();

  const isActive = (path) => pathname === path;

  return (
    <nav className="p-4 w-full sticky bg-gray-900 text-white">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
      <Link href="/">
        <a
          className={
            (isActive('/') ? 'bg-gray-800' : 'bg-none') +
            ' px-4 py-2 rounded-md'
          }
          data-active={isActive('/')}>
          <b>Journal</b>
        </a>
      </Link>
      <div>Login</div>
      </div>
    </nav>
  );
};
