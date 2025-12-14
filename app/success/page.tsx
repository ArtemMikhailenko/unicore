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
    <main className="w-full min-h-screen bg-[#0A0218] flex flex-col items-center py-[50px] px-4 relative overflow-hidden">
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
      <div className="w-full max-w-[550px] flex flex-col items-center relative z-10">
        {/* Character Image */}
        <div className="relative w-full h-[450px] flex items-end justify-center mb-[-120px]">
          <Image
            src="/images/success-character.png"
            alt="Success"
            width={500}
            height={450}
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Success Card */}
        <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px] relative z-10">
          {/* Title with Icon */}
          <div className="flex items-start gap-[15px]">
            <div className="w-[40px] h-[40px] bg-[#FFC260] rounded-[10px] flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" fill="#6E3B08"/>
              </svg>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 
                className="text-[24px] leading-[32px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Thank you for purchase!
              </h1>
              <p className="text-[14px] text-[#737AAE] leading-[160%]">
                Save your key and read the instruction!
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

          {/* Product Key Input */}
          <div className="w-full h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] px-[15px] flex items-center justify-between">
            <span className="text-[14px] text-[#737AAE] leading-[160%] font-mono">
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
              className="flex-1 h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[18px] font-semibold text-[#6E3B08]"
                style={{ fontFamily: 'Source Sans 3, sans-serif' }}
              >
                Read Instruction
              </span>
            </a>
            <a
              href="#"
              className="flex-1 h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
            >
              <span 
                className="text-[18px] font-semibold text-[#6E3B08]"
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
