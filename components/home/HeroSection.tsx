import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center py-[30px] lg:py-[70px] px-4 relative">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 lg:hidden flex items-center justify-center pointer-events-none max-w-[80%] mx-auto">
        <Image
          src="/images/flowers.png"
          alt=""
          width={500}
          height={250}
          className="object-contain"
          priority
        />
      </div>
      
      <div className="w-full max-w-[1132px]  lg:min-h-[489px] flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Text and Button */}
        <div className="flex flex-col items-center lg:items-start gap-[10px] lg:gap-[30px] w-full lg:w-[418px]">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start gap-[10px]">
            {/* Stars and Header */}
            <div className="flex flex-col items-center lg:items-start gap-[10px]">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                    loading="eager"
                  />
                ))}
              </div>
              
              {/* Heading */}
              <h1 className="text-[36px] lg:text-[72px] leading-[44px] lg:leading-[88px] font-bold text-white text-center lg:text-left" style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}>
                Unicore
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-[12px] lg:text-base leading-[160%] text-[#737AAE] w-full max-w-[328px]  md:max-w-none lg:w-[418px] text-left lg:text-left">
              We offer premium cheats that are affordable, high-quality, easy-to-use, frequently updated, and part of a growing catalog.
            </p>
          </div>
          
          {/* Button */}
          <Link
            href="/products"
            className="flex items-center justify-center px-[30px] py-[10px] w-[138px] lg:w-[177px] h-[37px] lg:h-[46px] bg-[#FFC260] hover:bg-[#FFD080] transition-colors rounded-[10px] border border-[#6E3B08]"
          >
            <span className="text-[12px] lg:text-[18px] font-semibold text-[#6E3B08] leading-[17px] lg:leading-[26px] text-nowrap">
              Go to Purchase
            </span>
          </Link>
        </div>
        
        {/* Hero Image */}
        <div className="hidden lg:block relative w-full lg:w-[561px] h-[400px] lg:h-[474px]">
          <Image
            src="/images/hero.webp"
            alt="Unicore character"
            fill
            sizes="(max-width: 1024px) 100vw, 561px"
            className="object-contain"
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
