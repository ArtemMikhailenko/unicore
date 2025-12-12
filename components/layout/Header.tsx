import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="w-full h-[92px] bg-[#0D0525] flex items-center justify-center py-[30px] px-4">
      <div className="w-full max-w-[1132px] flex items-center justify-center gap-[50px]">
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/images/logo.png"
            alt="UNICORE"
            width={180}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
