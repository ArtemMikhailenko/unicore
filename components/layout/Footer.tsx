import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d0525]">
      <div className="w-full flex items-start justify-center py-[30px] lg:py-[40px] 2xl:py-[80px] 3xl:py-[150px] px-4 lg:px-[20%]">
        <div className="w-full max-w-[1132px] lg:max-w-none flex flex-col lg:flex-row items-start justify-between gap-[29px] lg:gap-8 2xl:gap-16 3xl:gap-32">
          {/* Left Side - Logo and Social Icons (Mobile Layout) */}
          <div className="flex flex-col gap-[29px] lg:gap-4 2xl:gap-8 3xl:gap-16 max-w-[577px] 2xl:max-w-[900px] 3xl:max-w-[1400px] w-full lg:w-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center lg:mb-0">
              <Image
                src="/images/logo.png"
                alt="UNICORE"
                width={143}
                height={32}
                className="lg:h-[32px] 2xl:h-[56px] 3xl:h-[100px] w-[103px] lg:h-8 lg:w-auto object-contain"
              />
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center gap-[10px] lg:hidden">
              <Link 
                href="https://t.me/unicore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-[24px] h-[24px] flex items-center justify-center rounded-full  transition-colors"
                aria-label="Telegram"
              >
                <Image src="/images/telegram-icon.svg" alt="" width={24} height={24} />
              </Link>
              <Link 
                href="https://discord.gg/unicore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-[24px] h-[24px] flex items-center justify-center rounded-full  transition-colors"
                aria-label="Discord"
              >
                <Image src="/images/discord-icon.svg" alt="" width={24} height={24} />
              </Link>
              <Link 
                href="mailto:contact@unicore.com"
                className="w-[24px] h-[24px] flex items-center justify-center rounded-full  transition-colors"
                aria-label="Email"
              >
                <Image src="/images/mail-icon.svg" alt="" width={24} height={24} />
              </Link>
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden lg:flex items-center gap-4 2xl:gap-6 3xl:gap-12">
              <Link 
                href="https://t.me/unicore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 2xl:w-14 2xl:h-14 3xl:w-24 3xl:h-24 flex items-center justify-center rounded-full "
                aria-label="Telegram"
              >
                <Image src="/images/telegram-icon.svg" alt="" width={20} height={20} className="2xl:w-8 2xl:h-8 3xl:w-14 3xl:h-14" />
              </Link>
              <Link 
                href="https://discord.gg/unicore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 2xl:w-14 2xl:h-14 3xl:w-24 3xl:h-24 flex items-center justify-center rounded-full "
                aria-label="Discord"
              >
                <Image src="/images/discord-icon.svg" alt="" width={20} height={20} className="2xl:w-8 2xl:h-8 3xl:w-14 3xl:h-14" />
              </Link>
              <Link 
                href="mailto:contact@unicore.com"
                className="w-10 h-10 2xl:w-14 2xl:h-14 3xl:w-24 3xl:h-24 flex items-center justify-center rounded-full "
              >
                <Image src="/images/mail-icon.svg" alt="" width={20} height={20} className="2xl:w-8 2xl:h-8 3xl:w-14 3xl:h-14" />
              </Link>
            </div>

            {/* Copyright - Desktop only */}
            <div className="hidden lg:flex flex-col gap-1 text-[14px] 2xl:text-[22px] 3xl:text-[38px] leading-[160%] text-[#737AAE]">
              <p>Copyright © {currentYear}. UNICORE. All rights reserved.</p>
              <p>All other trademarks, screenshots, logos and copyrights are the property of their respective owners.</p>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex gap-[80px] lg:gap-[80px] 2xl:gap-[160px] 3xl:gap-[280px]">
            {/* Navigation Column */}
            <div className="flex flex-col items-start gap-[7px] 2xl:gap-[14px] 3xl:gap-[28px]">
              <h3 className="text-[14px] lg:text-[18px] 2xl:text-[30px] 3xl:text-[50px] leading-[20px] lg:leading-[26px] 2xl:leading-[40px] 3xl:leading-[64px] font-semibold text-white">
                Navigation
              </h3>
              <nav className="flex flex-col gap-[5px] 2xl:gap-[12px] 3xl:gap-[24px]">
                <Link 
                  href="/" 
                  className="text-[12px] lg:text-[14px] 2xl:text-[22px] 3xl:text-[38px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  className="text-[12px] lg:text-[14px] 2xl:text-[22px] 3xl:text-[38px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </nav>
            </div>

            {/* Legal Information Column */}
            <div className="flex flex-col items-start gap-[7px] 2xl:gap-[14px] 3xl:gap-[28px]">
              <h3 className="text-[14px] lg:text-[18px] 2xl:text-[30px] 3xl:text-[50px] leading-[20px] lg:leading-[26px] 2xl:leading-[40px] 3xl:leading-[64px] font-semibold text-white">
                Legal Information
              </h3>
              <nav className="flex flex-col gap-[5px] 2xl:gap-[12px] 3xl:gap-[24px]">
                <Link 
                  href="/terms" 
                  className="text-[12px] lg:text-[14px] 2xl:text-[22px] 3xl:text-[38px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Terms and Rules
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-[12px] lg:text-[14px] 2xl:text-[22px] 3xl:text-[38px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/brand" 
                  className="text-[12px] lg:text-[14px] 2xl:text-[22px] 3xl:text-[38px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Brand
                </Link>
              </nav>
            </div>
          </div>

          {/* Copyright - Mobile only */}
          <div className="flex lg:hidden flex-col gap-1 text-[12px] leading-[160%] text-[#737AAE]">
            <p>Copyright © {currentYear}. UNICORE. All rights reserved.</p>
            <p>All other trademarks, screenshots, logos</p>
            <p>and copyrights are the property of their respective owners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
