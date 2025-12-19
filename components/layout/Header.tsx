import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="w-full bg-[#0d0525] flex items-center justify-center">
      <div className="w-full max-w-[1132px] lg:max-w-none lg:px-[10%] flex items-center justify-between px-4">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center gap-[50px] 2xl:gap-[70px] w-full h-[92px] 2xl:h-[120px] py-[30px] 2xl:py-[40px]">
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/images/logo.png"
              alt="UNICORE"
              width={180}
              height={32}
              priority
              className="h-8 2xl:h-10 w-auto"
            />
          </Link>
          <Navigation />
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full h-[56px] py-[15px]">
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/images/mobile-logo.svg"
              alt="UNICORE"
              width={20}
              height={24}
              priority
            />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
