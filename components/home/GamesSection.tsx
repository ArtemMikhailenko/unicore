import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

function GameCard({ title, description, imageSrc, className = '' }: GameCardProps) {
  return (
    <div 
      className={`relative bg-[#0A0218] rounded-[30px] p-[30px] overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[10px]">
        <h3 
          className="text-[24px] leading-[29px] font-bold text-white"
          style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
        >
          {title}
        </h3>
        <p className="text-[14px] leading-[160%] text-[#737AAE]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function GamesSection() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-[50px]">
      <div className="w-full max-w-[1132px] flex flex-col gap-[25px]">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h2 
            className="text-[36px] leading-[44px] font-bold text-white"
            style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
          >
            Choose Your Dream!
          </h2>
          <p className="text-[14px] leading-[160%] text-[#737AAE] max-w-[356px]">
            Select your game and try our product on your own right now!
          </p>
        </div>

        {/* Genshin Impact - Full Width */}
        <GameCard
          title="Genshin Impact"
          description="Unicore for Genshin Impact is an innovative, security-focused tool designed for players who want speed progressing, stability, and convenience mod-menu. Various teleportation methods, intelligent auto-farm, battle modifiers, dialogue automation, cutscene skipping, quest acceleration, and numerous quality-of-life features make progression faster and smoother. Powered by advanced protection techniques, Unicore ensures high stability and a safe experience for your account."
          imageSrc="/images/games/genshin-impact.png"
          className="w-full h-[210px]"
        />

        {/* Wuthering Waves + Zenless Zone Zero */}
        <div className="flex flex-col lg:flex-row gap-[25px]">
          <GameCard
            title="Wuthering Waves"
            description="Unicore for Wuthering Waves is a powerful and reliable tool designed to make your experience in the world of Wuthering Waves smoother and more efficient. Unicore provides maximum convenience: instant teleports to key locations, intelligent auto-farm for items and materials, automation of routine battles and interactions, and fast progression - allowing you to focus on the story and combat without wasting time on repetitive tasks. With its advanced protection system, Unicore aims to maintain stability and keep your account safe, minimizing any risks."
            imageSrc="/images/games/wuthering-waves.png"
            className="w-full lg:w-[646px] h-[231px]"
          />
          <GameCard
            title="Zenless Zone Zero"
            description="Unicore for Zenless Zone Zero is an advanced and reliable mod-menu designed to make your ZZZ experience smoother and more dynamic. Intelligent auto-combat features, progression boosters, dialogue automation, and flexible configuration options let you focus on automated battles, story skipping, and each agent's unique playstyle."
            imageSrc="/images/games/zenless-zone-zero.png"
            className="w-full lg:w-[461px] h-[231px]"
          />
        </div>

        {/* Duet Night Abyss + Honkai Star Rail */}
        <div className="flex flex-col lg:flex-row gap-[25px]">
          <GameCard
            title="Duet Night Abyss"
            description="Unicore for Duet Night Abyss is an advanced and stable tool designed to make your gameplay faster, smoother, and more dynamic. Instant teleports, intelligent auto-farm, an enhanced RapidFire system, powerful combat features, and flexible modifiers help you clear stages with ease."
            imageSrc="/images/games/duet-night-abyss.png"
            className="w-full lg:w-[453px] h-[231px]"
          />
          <GameCard
            title="Honkai: Star Rail"
            description="Unicore for Honkai: Star Rail is a high-tech, security-focused tool designed to make your galactic journey faster and more efficient. Intelligent auto-combat, dialogue automation, quest acceleration, powerful modifiers, and customizable features help streamline progression and reduce repetitive tasks. With advanced protection techniques, Unicore maintains stability and minimizes risks, ensuring a safe and smooth experience for your account."
            imageSrc="/images/games/honkai-star-rail.png"
            className="w-full lg:w-[654px] h-[231px]"
          />
        </div>

        {/* See All Link */}
        <Link 
          href="/products" 
          className="text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors font-medium self-center mt-[15px]"
        >
          See All
        </Link>
      </div>
    </section>
  );
}
