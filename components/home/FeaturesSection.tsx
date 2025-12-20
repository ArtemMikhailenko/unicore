import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  mobileTitle?: string;
  description: string;
  iconSrc: string;
  backgroundSrc: string;
  className?: string;
}

function FeatureCard({ title, mobileTitle, description, iconSrc, backgroundSrc, className = '' }: FeatureCardProps) {
  return (
    <div 
      className="relative rounded-[20px] 2xl:rounded-[32px] 3xl:rounded-[31px] px-[25px] 2xl:px-[50px] 3xl:px-[49px] py-[20px] lg:py-[80px] 2xl:py-[130px] 3xl:py-[126px] overflow-hidden h-auto min-h-[150px] lg:h-[270px] 2xl:h-[450px] 3xl:h-[434px] w-full bg-[#0D0525]"
    >
      {/* Background Image - Desktop only */}
      <div 
        className="hidden lg:block absolute inset-0 -z-0"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 flex flex-col gap-[10px] 2xl:gap-[20px] 3xl:gap-[21px] items-center lg:items-start">
        <div className="flex lg:flex-col lg:flex-row items-center gap-[10px] lg:gap-3 2xl:gap-5 3xl:gap-7">
          <Image 
            src={iconSrc}
            alt={title}
            width={32}
            height={28}
            className="w-[32px] h-[28px] 2xl:w-[54px] 2xl:h-[48px] 3xl:w-[50px] 3xl:h-[45px] rounded-lg"
          />
          <h3 
            className="text-[16px] lg:text-[24px] 2xl:text-[40px] 3xl:text-[39px] leading-[19px] lg:leading-[29px] 2xl:leading-[50px] 3xl:leading-[48px] font-bold text-white text-left lg:text-left"
            style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
          >
            <span className="lg:hidden">{mobileTitle || title}</span>
            <span className="hidden lg:inline">{title}</span>
          </h3>
        </div>
        <p className="text-[12px] lg:text-[14px] 2xl:text-[24px] 3xl:text-[22px] leading-[160%] text-[#737AAE] text-center lg:text-left line-clamp-3 lg:line-clamp-none">
          {description}
        </p>
      </div>
    </div>
  );
}

const features = [
  {
    title: 'Kill Aura',
    iconSrc: '/images/features/kill-aura.svg',
    backgroundSrc: '/images/features/kill-aura-bg.webp',
    description: 'Automatically attacks all nearby enemies within a set radius. Perfect for fast farming, room clearing, and increasing overall gameplay speed. Includes custom range settings to clear stages effortlessly and boost rewards.',
    className: ''
  },
  {
    title: 'Auto Loot',
    iconSrc: '/images/features/auto-loot.svg',
    backgroundSrc: '/images/features/auto-loot-bg.webp',
    description: 'Automatically collects all nearby items, chests, monster drops, and resources without the need to press any buttons. It works convenient, safe, and will save you a lot of time.',
    className: ''
  },
  {
    title: 'Interactive Map',
    iconSrc: '/images/features/interactive-map.svg',
    backgroundSrc: '/images/features/interactive-map-bg.webp',
    description: 'A built-in interactive map that displays key objects, resources, bosses, and points of interest. Allows you to instantly find needed locations and plan routes directly inside the product.',
    className: ''
  },
  {
    title: 'Auto Dialogs',
    iconSrc: '/images/features/auto-dialogs.svg',
    backgroundSrc: '/images/features/auto-dialogs-bg.webp',
    description: 'Automatically skips and fast-forwards dialogues, speeding up story quests, daily missions, and any conversation scenes. Saves time and helps you get back to gameplay faster.',
    className: ''
  },
  {
    title: 'Rapid Fire',
    iconSrc: '/images/features/rapid-fire.svg',
    backgroundSrc: '/images/features/rapid-fire-bg.webp',
    description: 'An enhanced attack mode allowing AOE abilities with multi-hit up to x50. Increases damage output and farming efficiency. Ideal for wiping out large groups of enemies, clearing difficult domains, and speeding up grind loops.',
    className: ''
  },
  {
    title: 'Customization',
    mobileTitle: 'Custom',
    iconSrc: '/images/features/customization.svg',
    backgroundSrc: '/images/features/customization-bg.webp',
    description: 'Switch characters, accessories, and weapons through an easy-to-use interface. Play any character with any weapon. All weapons, characters, and accessories can be changed through the menu.',
    className: ''
  },
  {
    title: 'Quest Teleport',
    iconSrc: '/images/features/quest-teleport.svg',
    backgroundSrc: '/images/features/quest-teleport-bg.webp',
    description: 'Instantly teleports you to the active quest target - NPCs, mission zones, puzzle locations, or interaction points. Eliminates long walks across maps and speeds up story progression and daily missions.',
    className: ''
  },
  {
    title: 'No Clip',
    iconSrc: '/images/features/no-clip.svg',
    backgroundSrc: '/images/features/no-clip-bg.webp',
    description: 'Allows your character to move freely through walls, terrain, and obstacles. Perfect for fast navigation, reaching out-of-bounds areas, and avoiding long map routes. Ignore puzzle mechanics and reach any location instantly.',
    className: 'w-full lg:w-[582px] h-[270px]'
  },
  {
    title: 'Auto Farm',
    iconSrc: '/images/features/auto-farm.svg',
    backgroundSrc: '/images/features/auto-farm-bg.webp',
    description: 'Fully automates combat and farming: your character teleports for enemies, engages them, collects drops, and moves between targets on its own. Perfect for farming materials, XP, and Echoes by AFK. Works with auto-farm config system.',
    className: 'w-full lg:w-[582px] h-[270px]'
  },
  {
    title: 'Visuals',
    iconSrc: '/images/features/visuals.svg',
    backgroundSrc: '/images/features/visuals-bg.webp',
    description: 'Provides enhanced on-screen information such as player ESP, NPC highlights, loot indicators, vehicle tracking, and threat awareness. Helps you spot enemies early, and navigate items more efficiently.',
    className: 'w-full lg:w-[388px] h-[270px]'
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full flex items-center justify-center px-4 lg:px-[20%] py-[30px] lg:py-[50px] 2xl:py-[100px] 3xl:py-[98px]">
      <div className="w-full max-w-[1002px] lg:max-w-none flex flex-col items-center lg:items-start gap-[25px] 2xl:gap-[60px] 3xl:gap-[56px]">
        {/* Title */}
        <h2 
          className="text-[24px] lg:text-[36px] 2xl:text-[60px] 3xl:text-[56px] leading-[29px] lg:leading-[44px] 2xl:leading-[72px] 3xl:leading-[67px] mx-auto font-bold text-white text-center"
          style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
        >
          See Our Unique Features!
        </h2>

        {/* Features Grid - Mobile: 2 columns, Desktop: flex wrap with specific widths */}
        <div className="w-full grid grid-cols-2 gap-[16px] lg:flex lg:flex-wrap lg:gap-[32px] 2xl:gap-[50px] 3xl:gap-[49px]">
          <div className="lg:w-[calc(58%-16px)] xl:w-[58%]">
            <FeatureCard {...features[0]} />
          </div>
          <div className="lg:w-[calc(42%-16px)] xl:w-[38%]">
            <FeatureCard {...features[1]} />
          </div>
          <div className="lg:w-[calc(50%-16px)] xl:w-[48%]">
            <FeatureCard {...features[2]} />
          </div>
          <div className="lg:w-[calc(50%-16px)] xl:w-[48%]">
            <FeatureCard {...features[3]} />
          </div>
          <div className="lg:w-[calc(58%-16px)] xl:w-[58%]">
            <FeatureCard {...features[4]} />
          </div>
          <div className="lg:w-[calc(42%-16px)] xl:w-[38%]">
            <FeatureCard {...features[5]} />
          </div>
          <div className="lg:w-[calc(42%-16px)] xl:w-[38%]">
            <FeatureCard {...features[6]} />
          </div>
          <div className="lg:w-[calc(58%-16px)] xl:w-[58%]">
            <FeatureCard {...features[7]} />
          </div>
          <div className="lg:w-[calc(58%-16px)] xl:w-[58%]">
            <FeatureCard {...features[8]} />
          </div>
          <div className="lg:w-[calc(42%-16px)] xl:w-[38%]">
            <FeatureCard {...features[9]} />
          </div>
        </div>
      </div>
    </section>
  );
}
