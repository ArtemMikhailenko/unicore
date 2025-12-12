'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'block w-6 h-0.5 bg-white transition-all duration-300',
            isOpen && 'rotate-45 translate-y-2'
          )}
        />
        <span
          className={cn(
            'block w-6 h-0.5 bg-white transition-all duration-300',
            isOpen && 'opacity-0'
          )}
        />
        <span
          className={cn(
            'block w-6 h-0.5 bg-white transition-all duration-300',
            isOpen && '-rotate-45 -translate-y-2'
          )}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        className={cn(
          'fixed top-0 right-0 h-full w-64 bg-[#0D0525] z-40 transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-6 pt-24 px-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                'text-lg font-medium transition-colors hover:text-white',
                pathname === item.href
                  ? 'text-white'
                  : 'text-white/70'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
