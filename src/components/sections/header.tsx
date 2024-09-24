import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const routes = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },
  {
    id: 0,
    name: 'Project',
    href: '#project',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Contact',
    href: '#contact',
  },
];

export function Header() {
  return (
    <header className="fixed w-full flex justify-center items-center top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {routes.map((route, idx) => (
          <Link
            key={route.id}
            href={route.href}
            className={twMerge('nav-item', idx === routes.length - 1 && 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900')}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
