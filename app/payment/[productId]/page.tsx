'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'system-requirements' | 'media'>('features');
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;

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
                  className={`h-[60px] px-[15px] flex items-center gap-[5px] ${
                    activeTab === 'features' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-white'
                  } transition-colors`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.4 2.4H4.8V4.8H2.4V2.4ZM6.4 2.4H8.8V4.8H6.4V2.4ZM10.4 2.4H12.8V4.8H10.4V2.4ZM2.4 6.4H4.8V8.8H2.4V6.4ZM6.4 6.4H8.8V8.8H6.4V6.4ZM10.4 6.4H12.8V8.8H10.4V6.4ZM2.4 10.4H4.8V12.8H2.4V10.4ZM6.4 10.4H8.8V12.8H6.4V10.4ZM10.4 10.4H12.8V12.8H10.4V10.4Z" fill={activeTab === 'features' ? '#FFC260' : 'currentColor'}/>
                  </svg>
                  <span className={`text-[16px] leading-[160%] ${activeTab === 'features' ? 'text-white' : ''}`}>Features</span>
                </button>
                <button 
                  onClick={() => setActiveTab('system-requirements')}
                  className={`h-[60px] px-[15px] flex items-center gap-[5px] ${
                    activeTab === 'system-requirements' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-white'
                  } transition-colors`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M0.450422 0.440422C0.450422 0.440422 8 0 8 0C8 0 15.5704 0.440422 15.5704 0.440422C15.5704 0.440422 16 8 16 8C16 8 15.5704 15.5704 15.5704 15.5704C15.5704 15.5704 8 16 8 16C8 16 0.450422 15.5704 0.450422 15.5704C0.450422 15.5704 0 8 0 8C0 8 0.450422 0.440422 0.450422 0.440422ZM3.2 3.2H4.8V4.8H3.2V3.2ZM11.2 3.2H12.8V4.8H11.2V3.2ZM3.2 11.2H4.8V12.8H3.2V11.2ZM11.2 11.2H12.8V12.8H11.2V11.2ZM5.6 5.6H10.4V10.4H5.6V5.6Z" fill={activeTab === 'system-requirements' ? '#FFC260' : 'currentColor'}/>
                  </svg>
                  <span className={`text-[16px] leading-[160%] ${activeTab === 'system-requirements' ? 'text-white' : ''}`}>System Requirements</span>
                </button>
                <button 
                  onClick={() => setActiveTab('media')}
                  className={`h-[60px] px-[15px] flex items-center gap-[5px] ${
                    activeTab === 'media' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-white'
                  } transition-colors`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M0 1.6C0 1.04772 0.447715 0.6 1 0.6H15C15.5523 0.6 16 1.04772 16 1.6V13.6C16 14.1523 15.5523 14.6 15 14.6H1C0.447716 14.6 0 14.1523 0 13.6V1.6Z" fill="currentColor"/>
                  </svg>
                  <span className={`text-[16px] leading-[160%] ${activeTab === 'media' ? 'text-white' : ''}`}>Media</span>
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'features' && (
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px]">
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
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px]">
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
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[25px]">
                  {/* Main Video/Image Placeholder */}
                  <div className="w-full h-[329px] bg-[#100A36] rounded-[8px] flex items-center justify-center">
                    <span className="text-[16px] text-[#737AAE]">Video Preview</span>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-4 gap-[25px]">
                    <div className="w-full h-[96px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-[12px] text-[#737AAE]">1</span>
                    </div>
                    <div className="w-full h-[96px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-[12px] text-[#737AAE]">2</span>
                    </div>
                    <div className="w-full h-[96px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-[12px] text-[#737AAE]">3</span>
                    </div>
                    <div className="w-full h-[96px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-[12px] text-[#737AAE]">4</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Payment Selection */}
          <div className="w-full lg:w-[453px] flex flex-col gap-[10px]">
            <h2 
              className="text-[36px] leading-[42px] font-bold text-white"
              style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
            >
              Select Plan
            </h2>
            
            <div className="w-full bg-[#0D0525] rounded-[30px] p-[30px] flex flex-col gap-[20px]">
              {/* Plan Selector */}
              <div className="w-full h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] p-[15px] flex items-center justify-between cursor-pointer hover:border-[#FFC260] transition-colors">
                <span className="text-[14px] leading-[160%] text-white text-center">
                  1 Day Subscription Plan — $2
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 7.8L2.4 4.2L3.6 3L6 5.4L8.4 3L9.6 4.2L6 7.8Z" fill="#737AAE"/>
                </svg>
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
