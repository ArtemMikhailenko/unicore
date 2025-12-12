import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  logo: string;
  className?: string;
}

function ProductCard({ id, title, description, imageSrc, logo, className = '' }: ProductCardProps) {
  return (
    <Link 
      href={`/payment/${id}`}
      className={`relative bg-[#0A0218] rounded-[30px] p-[30px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform ${className}`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-3">
            <Image 
              src={logo}
              alt={title}
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <h3 
              className="text-[24px] leading-[29px] font-bold text-white"
              style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
            >
              {title}
            </h3>
          </div>
          <p className="text-[14px] leading-[160%] text-[#737AAE]">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

const products = [
  {
    id: 'genshin-impact',
    title: 'Genshin Impact',
    logo: '/images/products/genshin-logo.png',
    description: 'Unicore for Genshin Impact is an innovative, security-focused tool designed for players who want speed progressing, stability, and convenience mod-menu. Various teleportation methods, intelligent auto-farm, battle modifiers, dialogue automation, cutscene skipping, quest acceleration, and numerous quality-of-life features make progression faster and smoother. Powered by advanced protection techniques, Unicore ensures high stability and a safe experience for your account.',
    imageSrc: '/images/games/genshin-impact.webp',
    className: 'w-full lg:w-[550px] lg:h-[280px]'
  },
  {
    id: 'wuthering-waves',
    title: 'Wuthering Waves',
    logo: '/images/products/wuthering-waves-logo.png',
    description: 'Unicore for Wuthering Waves is a powerful and reliable tool. Unicore provides maximum convenience: instant teleports to key locations, intelligent auto-farm for items and materials, automation of routine battles and interactions, and fast progression - allowing you to focus on the story and combat without wasting time on repetitive tasks.',
    imageSrc: '/images/games/wuthering-waves.webp',
    className: 'w-full lg:w-[550px] lg:h-[280px]'
  },
  {
    id: 'zenless-zone-zero',
    title: 'Zenless Zone Zero',
    logo: '/images/products/zenless-zone-zero-logo.png',
    description: 'Unicore for Zenless Zone Zero is an advanced and reliable mod-menu designed to make your ZZZ experience smoother and more dynamic. Intelligent auto-combat features, progression boosters, dialogue automation, and flexible configuration options let you focus on automated battles, story skipping, and each agent\'s unique playstyle. Unicore reduces repetitive tasks, speeds up gameplay, and maintains stable performance throughout your runs.',
    imageSrc: '/images/games/zenless-zone-zero.webp',
    className: 'w-full lg:w-[550px] lg:h-[280px]'
  },
  {
    id: 'duet-night-abyss',
    title: 'Duet Night Abyss',
    logo: '/images/products/duet-night-abyss-logo.png',
    description: 'Unicore for Duet Night Abyss is an advanced and stable tool designed to make your gameplay faster, smoother, and more dynamic. Instant teleports, intelligent auto-farm, an enhanced Rapid Fire system, powerful combat features, and flexible modifiers help you clear stages with ease. Unicore removes repetitive tasks, lets you focus on pure action, and maintains strong stability thanks to its well-engineered protection methods.',
    imageSrc: '/images/games/duet-night-abyss.webp',
    className: 'w-full lg:w-[550px] lg:h-[280px]'
  },
  {
    id: 'honkai-star-rail',
    title: 'Honkai: Star Rail',
    logo: '/images/products/honkai-star-rail-logo.png',
    description: 'Unicore for Honkai: Star Rail is a high-tech, security-focused tool designed to make your galactic journey faster and more efficient. Intelligent auto-combat, dialogue automation, quest acceleration, powerful modifiers, and customizable features help streamline progression and reduce repetitive tasks. With advanced protection techniques, Unicore maintains stability and minimizes risks, ensuring a safe and smooth experience for your account.',
    imageSrc: '/images/games/honkai-star-rail.webp',
    className: 'w-full lg:h-[280px]'
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0A0218] flex flex-col items-center px-4 py-[50px] relative overflow-hidden">
      {/* Background Lines */}
      <div className="absolute bottom-0 right-0 w-full h-[1098px] opacity-50">
        <Image
          src="/images/poducts-bg.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[1132px] flex flex-col items-center gap-[25px] relative z-10">
        {/* Title */}
        <h1 
          className="text-[36px] leading-[44px] font-bold text-white text-center"
          style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
        >
          Products
        </h1>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          {/* Genshin Impact - Top Left */}
          <ProductCard {...products[0]} />
          
          {/* Wuthering Waves - Top Right */}
          <ProductCard {...products[1]} />
          
          {/* Zenless Zone Zero - Middle Left */}
          <ProductCard {...products[2]} />
          
          {/* Duet Night Abyss - Middle Right */}
          <ProductCard {...products[3]} />
        </div>

        {/* Honkai Star Rail - Full Width */}
        <ProductCard {...products[4]} />
      </div>
    </main>
  );
}
