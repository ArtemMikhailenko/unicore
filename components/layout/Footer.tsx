import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d0525]">
      <div className="w-full flex items-start justify-center py-[40px] px-4">
        <div className="w-full max-w-[1132px] flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col gap-4 max-w-[577px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="UNICORE"
                width={143}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link 
                href="https://telegram.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0Z" fill="white"/>
                </svg>
              </Link>
              <Link 
                href="https://discord.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Discord"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.93 3.34C15.63 2.74 14.24 2.31 12.79 2.06C12.77 2.06 12.75 2.07 12.74 2.09C12.56 2.42 12.36 2.85 12.22 3.19C10.67 2.96 9.13 2.96 7.61 3.19C7.47 2.84 7.26 2.42 8.08 2.09C7.07 2.07 7.05 2.06 7.03 2.06C5.58 2.31 4.19 2.74 2.89 3.34C2.87 3.35 2.86 3.36 2.85 3.38C0.41 7.09 -0.25 10.7 0.08 14.27C0.08 14.29 0.09 14.31 0.11 14.32C1.85 15.6 3.53 16.39 5.19 16.94C5.21 16.95 5.23 16.94 5.24 16.93C5.64 16.38 6 15.8 6.32 15.19C6.33 15.17 6.32 15.15 6.3 15.14C5.73 14.92 5.19 14.66 4.67 14.36C4.65 14.35 4.65 14.32 4.66 14.31C4.77 14.23 4.88 14.14 4.99 14.06C5 14.05 5.02 14.05 5.03 14.05C8.15 15.47 11.52 15.47 14.61 14.05C14.62 14.05 14.64 14.05 14.65 14.06C14.76 14.14 14.87 14.23 14.98 14.31C15 14.33 15 14.35 14.97 14.36C14.45 14.67 13.91 14.92 13.34 15.15C13.32 15.15 13.31 15.18 13.32 15.19C13.65 15.8 14.01 16.38 14.4 16.93C14.42 16.94 14.44 16.95 14.45 16.94C16.12 16.39 17.8 15.6 19.54 14.32C19.55 14.31 19.56 14.29 19.56 14.27C19.97 10.15 18.88 6.57 16.96 3.38C16.95 3.36 16.94 3.35 16.93 3.34ZM6.68 12.19C5.7 12.19 4.89 11.29 4.89 10.18C4.89 9.07 5.68 8.17 6.68 8.17C7.69 8.17 8.48 9.08 8.47 10.18C8.47 11.29 7.68 12.19 6.68 12.19ZM13.02 12.19C12.04 12.19 11.23 11.29 11.23 10.18C11.23 9.07 12.02 8.17 13.02 8.17C14.03 8.17 14.82 9.08 14.81 10.18C14.81 11.29 14.03 12.19 13.02 12.19Z" fill="white"/>
                </svg>
              </Link>
              <Link 
                href="mailto:contact@unicore.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 4H2C0.9 4 0.01 4.9 0.01 6L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V6C20 4.9 19.1 4 18 4ZM18 8L10 12L2 8V6L10 10L18 6V8Z" fill="white"/>
                </svg>
              </Link>
            </div>

            {/* Copyright */}
            <div className="flex flex-col gap-1 text-[14px] leading-[160%] text-white/50">
              <p>Copyright © {currentYear}. UNICORE. All rights reserved.</p>
              <p>All other trademarks, screenshots, logos and copyrights are the property of their respective owners.</p>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-[80px]">
            {/* Navigation Column */}
            <div className="flex flex-col items-start gap-[7px]">
              <h3 className="text-[18px] leading-[26px] font-semibold text-white">
                Navigation
              </h3>
              <nav className="flex flex-col gap-[5px]">
                <Link 
                  href="/" 
                  className="text-[14px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  className="text-[14px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </nav>
            </div>

            {/* Legal Information Column */}
            <div className="flex flex-col items-start gap-[7px]">
              <h3 className="text-[18px] leading-[26px] font-semibold text-white">
                Legal Information
              </h3>
              <nav className="flex flex-col gap-[5px]">
                <Link 
                  href="/terms" 
                  className="text-[14px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Terms and Rules
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-[14px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/brand" 
                  className="text-[14px] leading-[160%] text-white/50 hover:text-white transition-colors"
                >
                  Brand
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
