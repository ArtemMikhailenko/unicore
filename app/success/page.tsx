'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SuccessPage() {
  const [copied, setCopied] = useState(false);
  const productKey = 'e238fcc002412f5b2972cbed7319f585';

  const handleCopy = () => {
    navigator.clipboard.writeText(productKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="w-full min-h-[70vh] bg-[#0A0218] flex flex-col items-center py-[50px] 2xl:py-[70px] px-4 lg:px-[10%] relative overflow-hidden">
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
      <div className="w-full max-w-[850px] 2xl:max-w-[1000px] flex flex-col items-center relative z-10 px-4">
        {/* Character Image */}
        <div className="relative w-full h-[262px] md:h-[550px] 2xl:h-[650px] flex items-end justify-center mb-[-90px] md:mb-[-290px] 2xl:mb-[-340px]">
          <Image
            src="/images/success-character.png"
            alt="Success"
            width={850}
            height={350}
            className="object-contain "
            priority
          />
        </div>

        {/* Success Card */}
        <div className="w-full max-w-[550px] 2xl:max-w-[650px] bg-[#0D0525] rounded-[20px] p-[20px] md:p-[30px] 2xl:p-[40px] flex flex-col gap-[15px] md:gap-[25px] 2xl:gap-[30px] relative z-10">
          {/* Title with Icon */}
          <div className="flex items-start gap-[15px] 2xl:gap-[20px]">
            <div className="w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] bg-[#FFC260] rounded-[10px] flex items-center justify-center flex-shrink-0">
              <img src="/images/cake.svg" alt="" className="2xl:w-6 2xl:h-6" />
            </div>
            <div className="flex flex-col gap-[0px]">
              <h1 
                className="text-[14px] md:text-[24px] 2xl:text-[32px] leading-[26px] md:leading-[32px] 2xl:leading-[40px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Thank you for purchase!
              </h1>
              <p className="text-[10px] md:text-[14px] 2xl:text-[16px] text-[#737AAE] leading-[160%]">
                Save your key and read the instruction!
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

          {/* Product Key Input */}
          <div className="w-full h-[37px] md:h-[46px] 2xl:h-[56px] bg-[#100A36] border border-[#1D1550] rounded-[10px] px-[15px] flex items-center justify-between">
            <span className="text-[12px] md:text-[14px] 2xl:text-[16px] text-[#737AAE] leading-[160%] font-mono">
              {productKey}
            </span>
            <button 
              onClick={handleCopy}
              className="flex-shrink-0 hover:opacity-70 transition-opacity"
              title="Copy to clipboard"
            >
              {copied ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#FFC260" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1.828 1.566H8.4V8.166M3.6 3.6H10.228V10.166H3.6V3.6Z" stroke="#737AAE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-[10px]">
            <a
              href="#"
              className="flex-1 h-[37px] md:h-[46px] 2xl:h-[56px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[20px] md:px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[12px] md:text-[18px] 2xl:text-[22px] font-semibold text-[#6E3B08] text-nowrap"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                Read Instruction
              </span>
            </a>
            <a
              href="#"
              className="flex-1 h-[37px] md:h-[46px] 2xl:h-[56px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[20px] md:px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[12px] md:text-[18px] 2xl:text-[22px] font-semibold text-[#6E3B08] text-nowrap"
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
