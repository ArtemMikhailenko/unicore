'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'system-requirements' | 'media'>('features');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '1 Day Subscription Plan', price: '$2' });
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;

  const plans = [
    { name: '1 Day Subscription Plan', price: '$2' },
    { name: '7 Days Subscription Plan', price: '$10' },
    { name: '30 Days Subscription Plan', price: '$30' },
    { name: 'Lifetime Access', price: '$99' }
  ];

  const mediaItems = [
    { src: '/images/media/preview-1.jpg', w: 1920, h: 1080, title: 'Preview 1' },
    { src: '/images/media/preview-2.jpg', w: 1920, h: 1080, title: 'Preview 2' },
    { src: '/images/media/preview-3.jpg', w: 1920, h: 1080, title: 'Preview 3' },
    { src: '/images/media/preview-4.jpg', w: 1920, h: 1080, title: 'Preview 4' }
  ];

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = null;

    if (activeTab === 'media') {
      lightbox = new PhotoSwipeLightbox({
        gallery: '#media-gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        bgOpacity: 0.9,
        padding: { top: 50, bottom: 50, left: 50, right: 50 }
      });
      lightbox.init();
    }

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, [activeTab]);

  return (
    <main className="w-full min-h-screen bg-[#0A0218] flex justify-center py-[50px]">
      <div className="w-full max-w-[1132px] flex flex-col gap-[30px] px-4 lg:px-0">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-[15px]">
          <Link 
            href="/products"
            className="text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors text-center"
          >
            Products
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 1.8L6.6 5.4L5.4 6.6L1.8 3L5.4 9.6L6.6 8.4L3 4.8L6.6 1.2L5.4 0L1.8 3.6z" fill="#737AAE"/>
          </svg>
          <span className="text-[16px] leading-[160%] text-white text-center">
            Genshin Impact
          </span>
        </nav>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-[32px]">
          {/* Left Column - Product Info */}
          <div className="w-full lg:w-[647px] flex flex-col gap-[20px]">
            {/* Game Title & Description */}
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center justify gap-3">
                <div className="flex items-center gap-3">
                  <Image 
                    src="/images/products/genshin-logo.png"
                    alt="Genshin Impact"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-lg"
                  />
                  <h1 
                    className="text-[36px] leading-[42px] font-bold text-white"
                    style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                  >
                    Genshin Impact
                  </h1>
                </div>
                
                {/* Undetected Badge */}
                <div className="hidden lg:flex items-center gap-[10px] px-[20px] py-[5px] bg-[#0D2818] border border-[#1F4A30] rounded-[10px]">
                  <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49813 0C4.58438 0 4.67063 0.01875 4.74938 0.054375L8.28188 1.5525C8.69438 1.72688 9.00188 2.13375 9.00001 2.625C8.99063 4.485 8.22563 7.88813 4.99501 9.435C4.68188 9.585 4.31813 9.585 4.00501 9.435C0.772509 7.88813 0.00938353 4.485 8.52842e-06 2.625C-0.00186647 2.13375 0.305634 1.72688 0.718134 1.5525L4.24876 0.054375C4.32751 0.01875 4.41188 0 4.49813 0Z" fill="#2DF23A" />
                  </svg>
                  <span className="text-[18px] leading-[160%] font-semibold text-[#4ADE80]">
                    Undetected
                  </span>
                </div>
              </div>
              <p className="text-[14px] leading-[160%] text-[#737AAE]">
                Unicore for Genshin Impact is an innovative, security-focused tool. Various teleportation methods, intelligent auto-farm, battle modifiers, dialogue automation, cutscene skipping, quest acceleration, and numerous quality-of-life features make progression faster and smoother.
              </p>
            </div>

            {/* Tabs & Features */}
            <div className="flex flex-col gap-[20px]">
              {/* Tab Navigation */}
              <div className="w-full h-[60px] bg-[#0D0525] rounded-[15px] px-[30px] flex items-center justify-between">
                <button 
                  onClick={() => setActiveTab('features')}
                  className={`h-[60px] px-[15px] flex items-center gap-[5px] group ${
                    activeTab === 'features' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-[#FFC260]'
                  } transition-colors`}
                >
                  <Image 
                    src="/images/tabs/features.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={activeTab === 'features' ? 'brightness-0 invert sepia saturate-[10] hue-rotate-[10deg]' : 'opacity-50 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[10] group-hover:hue-rotate-[10deg]'}
                  />
                  <span className={`text-[16px] leading-[160%] ${activeTab === 'features' ? 'text-white' : ''}`}>Features</span>
                </button>
                <button 
                  onClick={() => setActiveTab('system-requirements')}
                  className={`h-[60px] px-[15px] flex items-center gap-[5px] group ${
                    activeTab === 'system-requirements' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-[#FFC260]'
                  } transition-colors`}
                >
                  <Image 
                    src="/images/tabs/system.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={activeTab === 'system-requirements' ? 'brightness-0 invert sepia saturate-[10] hue-rotate-[10deg]' : 'opacity-50 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[10] group-hover:hue-rotate-[10deg]'}
                  />
                  <span className={`text-[16px] leading-[160%] ${activeTab === 'system-requirements' ? 'text-white' : ''}`}>System Requirements</span>
                </button>
                <button 
                  onClick={() => setActiveTab('media')}
                  className={`h-[60px] px-[15px] flex items-center gap-[5px] group ${
                    activeTab === 'media' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-[#FFC260]'
                  } transition-colors`}
                >
                  <Image 
                    src="/images/tabs/media.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={activeTab === 'media' ? 'brightness-0 invert sepia saturate-[10] hue-rotate-[10deg]' : 'opacity-50 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[10] group-hover:hue-rotate-[10deg]'}
                  />
                  <span className={`text-[16px] leading-[160%] ${activeTab === 'media' ? 'text-white' : ''}`}>Media</span>
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'features' && (
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px] animate-fadeIn">
                  {/* Unique Features */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      ⚡ Unique Features
                    </h3>
                    <div className="grid grid-cols-4 gap-x-[25px] gap-y-[10px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE] ">Auto Loot</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Kill Aura</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Interactive Map</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Auto Dialogs</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">AOE Rapid Fire</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Combat */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      ⚔️ Combat
                    </h3>
                    <div className="grid grid-cols-4 gap-x-[25px] gap-y-[10px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE] ">Kill Aura</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Rapid Fire</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">AOE Damage</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Hit Multiplier</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">CD Reducer</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Infinite Ultimate</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Magnetizer</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">F&S Enemies</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Player */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      👤 Player
                    </h3>
                    <div className="grid grid-cols-4 gap-x-[25px] gap-y-[10px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE] ">Fly Speed</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Godmode</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">No Fall Damage</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Auto Loot</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Char. Transparency</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Utility */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      🔧 Utility
                    </h3>
                    <div className="grid grid-cols-4 gap-x-[25px] gap-y-[10px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE] ">Auto Dialogs</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Speed Up Dialogs</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Skip Cutscenes</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Custom Time</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Remove Fog</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Auto Seelies</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Profile Changer</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Teleports */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      🚀 Teleports
                    </h3>
                    <div className="grid grid-cols-4 gap-x-[25px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE] ">Mouse Teleport</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Quest Teleport</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Draw Target To TP</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Filters List</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'system-requirements' && (
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px] animate-fadeIn">
                  {/* Supported OS */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <span className="text-[18px]">💻</span> Supported OS
                    </h3>
                    <div className="grid grid-cols-[auto_auto_auto] gap-x-[25px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Windows 11</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Windows 10</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Linux</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Supported CPU */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <span className="text-[18px]">⚙️</span> Supported CPU
                    </h3>
                    <div className="grid grid-cols-[auto_auto] gap-x-[25px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Intel</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">AMD</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Supported GPU */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <span className="text-[18px]">🎮</span> Supported GPU
                    </h3>
                    <div className="grid grid-cols-[auto_auto_auto] gap-x-[25px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">NVIDIA</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">AMD</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Intel ARC</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Additional */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <span className="text-[18px]">🔧</span> Additional
                    </h3>
                    <div className="grid grid-cols-[auto_auto_auto] gap-x-[25px] gap-y-[10px]">
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">Stable Network<br />Connection</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">AVX2 CPU<br />Instructions</span>
                      <span className="text-[14px] leading-[160%] text-[#737AAE]">DirectX 12</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'media' && (
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px] animate-fadeIn">
                  {/* Main Video/Image Placeholder */}
                  <a
                    href={mediaItems[0].src}
                    data-pswp-width={mediaItems[0].w}
                    data-pswp-height={mediaItems[0].h}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-[329px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundImage: `url(${mediaItems[0].src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <span className="text-[16px] text-[#737AAE] bg-[#0D0525] px-4 py-2 rounded-lg">Click to view</span>
                  </a>

                  {/* Thumbnail Grid - 2 rows x 2 cols */}
                  <div id="media-gallery" className="grid grid-cols-2 gap-[25px]">
                    {mediaItems.slice(0, 4).map((item, index) => (
                      <a
                        key={index}
                        href={item.src}
                        data-pswp-width={item.w}
                        data-pswp-height={item.h}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full h-[157px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
                        style={{
                          backgroundImage: `url(${item.src})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <span className="text-[12px] text-[#737AAE] bg-[#0D0525] px-3 py-1 rounded">{index + 1}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Payment Selection */}
          <div className="w-full lg:w-[453px] flex flex-col gap-[10px]">
            <div className='flex gap-2 align-center '>
              <Image src="/images/tabs/select-plan.svg" width={40} height={40} alt="Select Plan" />
            <h2 
              className="text-[36px] leading-[42px] font-bold text-white"
              style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
            >
              Select Plan
            </h2>
            </div>
            
            
            <div className="w-full bg-[#0D0525] rounded-[30px] p-[30px] flex flex-col gap-[20px]">
              {/* Plan Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] p-[15px] flex items-center justify-between cursor-pointer hover:border-[#FFC260] transition-colors"
                >
                  <span className="text-[14px] leading-[160%] text-white">
                    {selectedPlan.name} — {selectedPlan.price}
                  </span>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                    className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 7.8L2.4 4.2L3.6 3L6 5.4L8.4 3L9.6 4.2L6 7.8Z" fill="#737AAE"/>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-[52px] left-0 w-full bg-[#100A36] border border-[#1D1550] rounded-[10px] overflow-hidden z-10 animate-fadeIn">
                    {plans.map((plan, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedPlan(plan);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full p-[15px] text-left text-[14px] leading-[160%] transition-colors ${
                          selectedPlan.name === plan.name
                            ? 'bg-[#1D1550] text-[#FFC260]'
                            : 'text-white hover:bg-[#1D1550] hover:text-[#FFC260]'
                        }`}
                      >
                        {plan.name} — {plan.price}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Continue Button */}
              <button 
                onClick={() => router.push(`/checkout/${productId}`)}
                className="w-full h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
              >
                <span 
                  className="text-[18px] font-semibold text-[#6E3B08]"
                  style={{ fontFamily: 'Source Sans 3, sans-serif' }}
                >
                  Continue
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
