'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function UnsuccessPage() {
  const router = useRouter();

  return (
    <main className="w-full min-h-[70vh] bg-[#0A0218] flex flex-col items-center py-[50px] px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/images/error-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-[550px] flex flex-col items-center relative z-10 px-4">
        {/* Character Image */}
        <div className="relative w-[180px] h-[202px] lg:h-[262px] md:h-[255px] flex items-end justify-center mb-[-20px] md:mb-[-80px]">
          <Image
            src="/images/payment-error.png"
            alt="Error"
            width={220}
            height={255}
            className="object-contain object-bottom w-[220px] h-[252px] lg:h-[262px] md:h-[255px]"
            priority
          />
        </div>

        {/* Failed Card */}
        <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px] relative z-10">
          {/* Title with Icon */}
          <div className="flex items-start gap-[15px]">
            <div className="w-[40px] h-[40px] bg-[#FFC260] rounded-[10px] flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#6E3B08" strokeWidth="2"/>
                <path d="M12 8V12M12 16H12.01" stroke="#6E3B08" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 
                className="text-[24px] leading-[32px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Something gone wrong...
              </h1>
              <p className="text-[14px] text-[#737AAE] leading-[160%]">
                Payment failed, please try again or contact our support team
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

          {/* Buttons */}
          <div className="flex gap-[10px]">
            <button
              onClick={() => router.back()}
              className="w-[240px] h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[10px] lg:px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[14px] lg:text-[18px] font-semibold text-[#6E3B08] text-nowrap"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                Try Again
              </span>
            </button>
            <a
              href="https://discord.gg/unicore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[240px] h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[10px] lg:px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[14px] lg:text-[18px] font-semibold text-[#6E3B08] text-nowrap"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                Contact Support
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
