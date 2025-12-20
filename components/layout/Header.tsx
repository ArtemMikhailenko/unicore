import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="w-full bg-[#0d0525] flex items-center justify-center">
      <div className="w-full max-w-[1132px] lg:max-w-none lg:px-[20%] flex items-center justify-between px-4">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center gap-[50px] 2xl:gap-[100px] 3xl:gap-[180px] w-full h-[92px] 2xl:h-[150px] 3xl:h-[240px] py-[30px] 2xl:py-[50px] 3xl:py-[80px]">
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/images/logo.png"
              alt="UNICORE"
              width={180}
              height={32}
              priority
              className="h-8 2xl:h-14 3xl:h-24 w-auto"
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
