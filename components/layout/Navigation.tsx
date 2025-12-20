'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
] as const;

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8 2xl:gap-16 3xl:gap-32" aria-label="Main navigation">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-base 2xl:text-2xl 3xl:text-4xl font-medium transition-colors hover:text-white',
            pathname === item.href
              ? 'text-white'
              : 'text-white/70'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
