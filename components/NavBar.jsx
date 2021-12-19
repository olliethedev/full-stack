import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * NavBar component for the application.
 */
export const NavBar = () => {
  const { pathname } = useRouter();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed p-4 w-full bg-gray-900 text-white">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <img src="/journal.svg" className="w-8 h-8" alt="Logo" />
          <Link href="/">
            <a
              className={
                (isActive('/') ? 'bg-gray-800' : 'bg-none') +
                ' px-5 py-2 rounded-md'
              }
              data-active={isActive('/')}>
              <b>Journal</b>
            </a>
          </Link>
        </div>

        <div>Login</div>
      </div>
    </nav>
  );
};
