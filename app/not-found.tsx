import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0218] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/images/error-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[464px] flex flex-col items-center gap-[20px]">
        {/* Text and Image Section */}
        <div className="flex flex-col items-center gap-[15px]">
          {/* Title and Character */}
          <div className="relative flex flex-col items-center gap-[10px] w-full max-w-[461px]">
            {/* Purple Glow Effect */}
            <div 
              className="absolute top-[54px] left-[94.5px] w-[232px] h-[157px] rounded-full"
              style={{
                background: '#27116699',
                filter: 'blur(109.4px)'
              }}
            />
            
            {/* Title */}
            <h1 
              className="text-[36px] leading-[44px] font-bold text-white text-center relative z-10"
              style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
            >
              Ooops.. Page not found!
            </h1>
            
            {/* Character Image */}
            <div className="relative w-[288px] h-[296px] top-[-40px]">
              <Image
                src="/images/error-photo.png"
                alt="Character"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Description */}
          <p className="text-[16px] leading-[160%] text-white text-center max-w-[464px]">
            You seem a little lost, but don't worry — you can open any page below
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="flex flex-col gap-[10px] w-full max-w-[356px]">
          {/* Home Card */}
          <Link 
            href="/"
            className="w-full h-[84px] bg-[#100A36] hover:bg-[#1A1150] border border-[#1D1550] rounded-[15px] px-[20px] py-[20px] flex items-center gap-[10px] transition-colors"
          >
            <div className="w-[32px] h-[32px] bg-[#FFC260] rounded-[8px] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 14.4V9.6H9.6V14.4H13.6V8H16L8 0.8L0 8H2.4V14.4H6.4Z" fill="#6E3B08"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[18px] leading-[26px] font-semibold text-white">
                Home
              </h3>
              <p className="text-[8px] leading-[11px] text-[#737AAE]">
                Our beautiful main page
              </p>
            </div>
          </Link>

          {/* Products Card */}
          <Link 
            href="/products"
            className="w-full h-[84px] bg-[#100A36] hover:bg-[#1A1150] border border-[#1D1550] rounded-[15px] px-[20px] py-[20px] flex items-center gap-[10px] transition-colors"
          >
            <div className="w-[32px] h-[32px] bg-[#FFC260] rounded-[8px] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.21875 1.21875H6.78125V6.78125H1.21875V1.21875ZM9.21875 1.21875H14.7812V6.78125H9.21875V1.21875ZM1.21875 9.21875H6.78125V14.7812H1.21875V9.21875ZM9.21875 9.21875H14.7812V14.7812H9.21875V9.21875Z" fill="#6E3B08"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[18px] leading-[26px] font-semibold text-white">
                Products
              </h3>
              <p className="text-[8px] leading-[11px] text-[#737AAE]">
                List of our powerful products
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
