import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

/**
 * NavBar component for the application.
 */
export const NavBar = () => {
  const { pathname } = useRouter();
  const { data: session } = useSession();

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
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </div>
    </nav>
  );
};
