import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center py-[70px] px-4">
      <div className="w-full max-w-[1132px] min-h-[489px] flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text and Button */}
        <div className="flex flex-col items-start gap-[30px] w-full lg:w-[418px]">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-[10px]">
            {/* Stars and Header */}
            <div className="flex flex-col items-start gap-[10px]">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
              
              {/* Heading */}
              <h1 className="text-[72px] leading-[88px] font-bold text-white" style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}>
                Unicore
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-base leading-[160%] text-[#737AAE] w-full lg:w-[418px]">
              We offer premium cheats that are affordable, high-quality, easy-to-use, frequently updated, and part of a growing catalog.
            </p>
          </div>
          
          {/* Button */}
          <Link
            href="/purchase"
            className="flex items-center justify-center px-[30px] py-[10px] w-[177px] h-[46px] bg-[#FFC260] hover:bg-[#FFD080] transition-colors rounded-[10px] border border-[#6E3B08]"
          >
            <span className="text-[18px] font-semibold text-[#6E3B08] leading-[26px] text-nowrap">
              Go to Purchase
            </span>
          </Link>
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full lg:w-[561px] h-[400px] lg:h-[474px]">
          <Image
            src="/images/hero.png"
            alt="Unicore character"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
