import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  backgroundSrc: string;
  className?: string;
}

function FeatureCard({ title, description, iconSrc, backgroundSrc, className = '' }: FeatureCardProps) {
  return (
    <div 
      className={`relative rounded-[20px] px-[30px] py-[80px] overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${backgroundSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
     
      
      <div className="relative z-10 flex flex-col gap-[10px]">
        <div className="flex items-center gap-3">
          <Image 
            src={iconSrc}
            alt={title}
            width={32}
            height={28}
            className="w-[32px] h-[28px] rounded-lg"
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
  );
}

const features = [
  {
    title: 'Kill Aura',
    iconSrc: '/images/features/kill-aura.svg',
    backgroundSrc: '/images/features/kill-aura-bg.png',
    description: 'Automatically attacks all nearby enemies within a set radius. Perfect for fast farming, room clearing, and increasing overall gameplay speed. Includes custom range settings to clear stages effortlessly and boost rewards.',
    className: 'w-full lg:w-[582px] h-[270px]'
  },
  {
    title: 'Auto Loot',
    iconSrc: '/images/features/auto-loot.svg',
    backgroundSrc: '/images/features/auto-loot-bg.png',
    description: 'Automatically collects all nearby items, chests, monster drops, and resources without the need to press any buttons. It works convenient, safe, and will save you a lot of time.',
    className: 'w-full lg:w-[388px] h-[270px]'
  },
  {
    title: 'Interactive Map',
    iconSrc: '/images/features/interactive-map.svg',
    backgroundSrc: '/images/features/interactive-map-bg.png',
    description: 'A built-in interactive map that displays key objects, resources, bosses, and points of interest. Allows you to instantly find needed locations and plan routes directly inside the product.',
    className: 'w-full lg:w-[485px] h-[270px]'
  },
  {
    title: 'Auto Dialogs',
    iconSrc: '/images/features/auto-dialogs.svg',
    backgroundSrc: '/images/features/auto-dialogs-bg.png',
    description: 'Automatically skips and fast-forwards dialogues, speeding up story quests, daily missions, and any conversation scenes. Saves time and helps you get back to gameplay faster.',
    className: 'w-full lg:w-[485px] h-[270px]'
  },
  {
    title: 'Rapid Fire',
    iconSrc: '/images/features/rapid-fire.svg',
    backgroundSrc: '/images/features/rapid-fire-bg.png',
    description: 'An enhanced attack mode allowing AOE abilities with multi-hit up to x50. Increases damage output and farming efficiency. Ideal for wiping out large groups of enemies, clearing difficult domains, and speeding up grind loops.',
    className: 'w-full lg:w-[582px] h-[270px]'
  },
  {
    title: 'Customization',
    iconSrc: '/images/features/customization.svg',
    backgroundSrc: '/images/features/customization-bg.png',
    description: 'Switch characters, accessories, and weapons through an easy-to-use interface. Play any character with any weapon. All weapons, characters, and accessories can be changed through the menu.',
    className: 'w-full lg:w-[387px] h-[270px]'
  },
  {
    title: 'Quest Teleport',
    iconSrc: '/images/features/quest-teleport.svg',
    backgroundSrc: '/images/features/quest-teleport-bg.png',
    description: 'Instantly teleports you to the active quest target - NPCs, mission zones, puzzle locations, or interaction points. Eliminates long walks across maps and speeds up story progression and daily missions.',
    className: 'w-full lg:w-[388px] h-[270px]'
  },
  {
    title: 'No Clip',
    iconSrc: '/images/features/no-clip.svg',
    backgroundSrc: '/images/features/no-clip-bg.png',
    description: 'Allows your character to move freely through walls, terrain, and obstacles. Perfect for fast navigation, reaching out-of-bounds areas, and avoiding long map routes. Ignore puzzle mechanics and reach any location instantly.',
    className: 'w-full lg:w-[582px] h-[270px]'
  },
  {
    title: 'Auto Farm',
    iconSrc: '/images/features/auto-farm.svg',
    backgroundSrc: '/images/features/auto-farm-bg.png',
    description: 'Fully automates combat and farming: your character teleports for enemies, engages them, collects drops, and moves between targets on its own. Perfect for farming materials, XP, and Echoes by AFK. Works with auto-farm config system.',
    className: 'w-full lg:w-[582px] h-[270px]'
  },
  {
    title: 'Visuals',
    iconSrc: '/images/features/visuals.svg',
    backgroundSrc: '/images/features/visuals-bg.png',
    description: 'Provides enhanced on-screen information such as player ESP, NPC highlights, loot indicators, vehicle tracking, and threat awareness. Helps you spot enemies early, and navigate items more efficiently.',
    className: 'w-full lg:w-[388px] h-[270px]'
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-[50px]">
      <div className="w-full max-w-[1002px] flex flex-col items-center gap-[25px]">
        {/* Title */}
        <h2 
          className="text-[36px] leading-[44px] font-bold text-white text-center"
          style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
        >
          See Our Unique Features!
        </h2>

        {/* Features Grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-2 gap-[25px]">
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[2]} />
          <FeatureCard {...features[3]} />
          <FeatureCard {...features[4]} />
          <FeatureCard {...features[5]} />
          <FeatureCard {...features[6]} />
          <FeatureCard {...features[7]} />
          <FeatureCard {...features[8]} />
          <FeatureCard {...features[9]} />
        </div>
      </div>
    </section>
  );
}
