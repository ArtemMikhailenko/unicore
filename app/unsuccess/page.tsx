'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function UnsuccessPage() {
  const router = useRouter();

  return (
    <main className="w-full min-h-[60vh] bg-[#0A0218] flex flex-col items-center py-[50px] px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-90">
        <Image
          src="/images/error-bg.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full  flex flex-col items-center relative z-10 px-4">
        {/* Character Image */}
        <div className="relative w-full h-[262px] md:h-[450px] flex items-end justify-center mb-[-90px] md:mb-[-250px]">
                  <Image
                    src="/images/payment-error.png"
                    alt="Error"
                    width={750}
                    height={350}
                    className="object-cover "
                    priority
                  />
                </div>

        {/* Failed Card */}
        <div className="w-full max-w-[550px] bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[15px] lg:gap-[25px] relative z-10">
          {/* Title with Icon */}
          <div className="flex items-start gap-[15px]">
            <div className=" w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] bg-[#FFC260] rounded-[10px] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.7796 11.9125L4.08711 5.22001C3.52711 6.00501 3.19961 6.96501 3.19961 8.00001C3.19961 10.65 5.34961 12.8 7.99961 12.8C9.03711 12.8 9.99711 12.4725 10.7796 11.9125ZM11.9121 10.78C12.4721 9.99501 12.7996 9.03501 12.7996 8.00001C12.7996 5.35001 10.6496 3.20001 7.99961 3.20001C6.96211 3.20001 6.00211 3.52751 5.21961 4.08751L11.9121 10.78ZM1.59961 8.00001C1.59961 4.46501 4.46461 1.60001 7.99961 1.60001C11.5346 1.60001 14.3996 4.46501 14.3996 8.00001C14.3996 11.535 11.5346 14.4 7.99961 14.4C4.46461 14.4 1.59961 11.535 1.59961 8.00001Z" fill="#6E3B08" />
</svg>
            </div>
            <div className="flex flex-col">
              <h1 
                className="text-[14px] lg:text-[18px]  font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Something gone wrong...
              </h1>
              <p className=" text-[8px] lg:text-[8px] text-[#737AAE] leading-[160%]">
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
              className="w-[240px] h-[32px] lg:h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[10px] lg:px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[12px] lg:text-[18px] font-semibold text-[#6E3B08] text-nowrap"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                Try Again
              </span>
            </button>
            <a
              href="https://discord.gg/unicore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[240px] h-[32px] lg:h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[10px] lg:px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[12px] lg:text-[18px] font-semibold text-[#6E3B08] text-nowrap"
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
