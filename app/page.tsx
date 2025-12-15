import { HeroSection, GamesSection, FeaturesSection } from '@/components/home';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0219] relative overflow-hidden">
      {/* Background Images */}
      <Image 
        src="/images/main-top-mob.svg"
        alt=""
        width={200}
        height={200}
        className="block lg:hidden absolute top-0 right-0 pointer-events-none z-0"
        priority
        quality={85}
      />
      <Image 
        src="/images/main-top.svg"
        alt=""
        width={800}
        height={800}
        className="hidden lg:block absolute top-0 left-0 pointer-events-none z-0"
        priority
        quality={85}
      />
      <Image 
        src="/images/main-mid.svg"
        alt=""
        width={800}
        height={800}
        className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none z-0"
        loading="lazy"
        quality={85}
      />
      <Image 
        src="/images/main-bottom.svg"
        alt=""
        width={800}
        height={800}
        className="hidden lg:blockabsolute bottom-0 left-0 pointer-events-none z-0"
        loading="lazy"
        quality={85}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <GamesSection />
        <FeaturesSection />
      </div>
    </main>
  );
}
