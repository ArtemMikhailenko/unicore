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
    <main className="w-full min-h-screen bg-[#0A0218] flex justify-center py-[50px] 2xl:py-[70px]">
      <div className="w-full max-w-[1132px] lg:max-w-none lg:px-[10%] flex flex-col gap-[30px] 2xl:gap-[40px] px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-[15px]">
          <Link 
            href="/products"
            className="text-[16px] 2xl:text-[18px] leading-[160%] text-[#737AAE] hover:text-white transition-colors text-center"
          >
            Products
          </Link>
           <svg className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px]" viewBox="0 0 10 10" fill="none">
            <path d="M2.5 1.5L5 5L7.5 1.5" stroke="#737AAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(270 5 5)"/>
          </svg>
          <span className="text-[16px] 2xl:text-[18px] leading-[160%] text-white text-center">
            Genshin Impact
          </span>
        </nav>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-[32px] 2xl:gap-[48px]">
          {/* Left Column - Product Info */}
          <div className="w-full lg:w-[60%] flex flex-col gap-[20px] 2xl:gap-[30px]">
            {/* Game Title & Description */}
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center  gap-3 2xl:gap-4">
                <div className="flex items-center gap-3 2xl:gap-4 w-full">
                  <Image 
                    src="/images/products/genshin-logo.png"
                    alt="Genshin Impact"
                    width={56}
                    height={56}
                    className="w-14 h-14 2xl:w-[72px] 2xl:h-[72px] rounded-lg"
                  />
                  <h1 
                    className="text-[24px] lg:text-[36px] 2xl:text-[48px] leading-[29px] lg:leading-[42px] 2xl:leading-[56px] font-bold text-white"
                    style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                  >
                    Genshin Impact
                  </h1>
                </div>
                
                {/* Undetected Badge */}
                <div className="flex items-center gap-[10px] px-[5px] lg:px-[20px] 2xl:px-[25px] py-[5px] 2xl:py-[8px] rounded-[10px]" style={{ backgroundColor: 'rgba(45, 242, 58, 0.1)' }}>
                  <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="2xl:w-[12px] 2xl:h-[13px]">
                    <path d="M4.49813 0C4.58438 0 4.67063 0.01875 4.74938 0.054375L8.28188 1.5525C8.69438 1.72688 9.00188 2.13375 9.00001 2.625C8.99063 4.485 8.22563 7.88813 4.99501 9.435C4.68188 9.585 4.31813 9.585 4.00501 9.435C0.772509 7.88813 0.00938353 4.485 8.52842e-06 2.625C-0.00186647 2.13375 0.305634 1.72688 0.718134 1.5525L4.24876 0.054375C4.32751 0.01875 4.41188 0 4.49813 0Z" fill="#2DF23A" />
                  </svg>
                  <span className="text-[12px] 2xl:text-[14px] leading-[160%] font-semibold text-[#2df23a]">
                    Undetected
                  </span>
                </div>
              </div>
              <p className="text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">
                Unicore for Genshin Impact is an innovative, security-focused tool. Various teleportation methods, intelligent auto-farm, battle modifiers, dialogue automation, cutscene skipping, quest acceleration, and numerous quality-of-life features make progression faster and smoother.
              </p>
            </div>

            {/* Mobile Plan Selector - Only on mobile */}
            <div className="lg:hidden flex flex-col gap-[15px] py-[20px]">
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

              {/* Go to Payment Methods Button - Mobile only */}
              <button 
                onClick={() => router.push(`/checkout/${productId}`)}
                className="w-full h-[46px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[30px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
              >
                <span 
                  className="text-[18px] font-semibold text-[#6E3B08]"
                  style={{ fontFamily: 'Source Sans 3, sans-serif' }}
                >
                  Go to Payment Methods
                </span>
              </button>
            </div>

            {/* Tabs & Features */}
            <div className="flex flex-col gap-[20px] 2xl:gap-[30px]">
              {/* Tab Navigation */}
              <div className="w-full h-[60px] 2xl:h-[70px] bg-[#0D0525] rounded-[15px] px-[20px] lg:px-[30px] 2xl:px-[40px] flex items-center justify-between">
                <button 
                  onClick={() => setActiveTab('features')}
                  className={`h-[60px] 2xl:h-[70px] px-[15px] 2xl:px-[20px] flex items-center gap-[5px] group ${
                    activeTab === 'features' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-[#FFC260]'
                  } transition-colors`}
                >
                  <div className={activeTab === 'features' ? '' : 'opacity-50 group-hover:opacity-100'} style={activeTab === 'features' ? { filter: 'brightness(0) saturate(100%) invert(78%) sepia(61%) saturate(444%) hue-rotate(359deg) brightness(102%) contrast(101%)' } : {}}>
                    <Image 
                      src="/images/tabs/features.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <span className={`text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[160%] ${activeTab === 'features' ? 'text-white' : ''}`}>Features</span>
                </button>
                <button 
                  onClick={() => setActiveTab('system-requirements')}
                  className={`h-[60px] 2xl:h-[70px] px-[5px] flex items-center gap-[5px] group ${
                    activeTab === 'system-requirements' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-[#FFC260]'
                  } transition-colors`}
                >
                  <div className={activeTab === 'system-requirements' ? '' : 'opacity-50 group-hover:opacity-100'} style={activeTab === 'system-requirements' ? { filter: 'brightness(0) saturate(100%) invert(78%) sepia(61%) saturate(444%) hue-rotate(359deg) brightness(102%) contrast(101%)' } : {}}>
                    <Image 
                      src="/images/tabs/system.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <span className={`text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[160%] hidden sm:inline ${activeTab === 'system-requirements' ? 'text-white' : ''}`}>System Requirements</span>
                  <span className={`text-[12px] leading-[160%] sm:hidden ${activeTab === 'system-requirements' ? 'text-white' : ''}`}>System Requirements</span>
                </button>
                <button 
                  onClick={() => setActiveTab('media')}
                  className={`h-[60px] 2xl:h-[70px] px-[15px] 2xl:px-[20px] flex items-center gap-[5px] group ${
                    activeTab === 'media' 
                      ? 'border-b border-[#FFC260]' 
                      : 'text-[#737AAE] hover:text-[#FFC260]'
                  } transition-colors`}
                >
                  <div className={activeTab === 'media' ? '' : 'opacity-50 group-hover:opacity-100'} style={activeTab === 'media' ? { filter: 'brightness(0) saturate(100%) invert(78%) sepia(61%) saturate(444%) hue-rotate(359deg) brightness(102%) contrast(101%)' } : {}}>
                    <Image 
                      src="/images/tabs/media.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <span className={`text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[160%] ${activeTab === 'media' ? 'text-white' : ''}`}>Media</span>
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'features' && (
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[20px] lg:p-[30px] 2xl:p-[40px] flex flex-col gap-[25px] 2xl:gap-[30px] animate-fadeIn">
                  {/* Unique Features */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] 2xl:text-[22px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5875 1.6906C13.9593 1.95935 14.0968 2.44685 13.9281 2.87185L11.4781 8.99998H16C16.4218 8.99998 16.7968 9.26248 16.9406 9.65935C17.0843 10.0562 16.9625 10.5 16.6406 10.7687L7.6406 18.2687C7.28747 18.5625 6.78435 18.5781 6.41247 18.3094C6.0406 18.0406 5.9031 17.5531 6.07185 17.1281L8.52185 11H3.99997C3.5781 11 3.2031 10.7375 3.05935 10.3406C2.9156 9.94373 3.03747 9.49998 3.35935 9.23123L12.3593 1.73123C12.7125 1.43748 13.2156 1.42185 13.5875 1.6906Z" fill="#FFC260" />
</svg> Unique Features
                    </h3>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-[25px] 2xl:gap-x-[35px] gap-y-[10px]">
                      <span className=" text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE] ">Auto Loot</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Kill Aura</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Interactive Map</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Auto Dialogs</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">AOE Rapid Fire</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Combat */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] 2xl:text-[22px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.6288 14.0718L14.0701 11.6301L5.03729 2.59606L2.65322 2.19167C2.38238 2.15353 2.15353 2.38241 2.19167 2.65328L2.596 5.03771L11.6288 14.0718ZM17.6672 16.2884L15.8591 14.48L16.8242 12.6793C16.9272 12.4885 16.8929 12.2558 16.7403 12.1032L16.2024 11.5691C16.0117 11.3784 15.7027 11.3784 15.512 11.5691L11.564 15.5177C11.3732 15.7085 11.3732 16.0175 11.564 16.2044L12.1018 16.7424C12.2544 16.895 12.4871 16.9293 12.6778 16.8263L14.4782 15.8611L16.2864 17.6694C16.4771 17.8602 16.7899 17.8602 16.9806 17.6694L17.6672 16.9827C17.8579 16.792 17.8579 16.4791 17.6672 16.2884ZM17.404 5.03771L17.8083 2.65328C17.8465 2.38241 17.6176 2.15353 17.3468 2.19167L14.9627 2.59606L10.6904 6.86895L13.1317 9.3106L17.404 5.03771ZM6.86828 10.6916L5.23947 12.3207L4.48419 11.5653C4.29348 11.3746 3.98449 11.3746 3.79757 11.5653L3.25973 12.1032C3.10714 12.2558 3.07281 12.4885 3.17581 12.6793L4.14089 14.48L2.33282 16.2884C2.14208 16.4791 2.14208 16.792 2.33282 16.9827L3.0194 17.6694C3.21014 17.8602 3.52294 17.8602 3.71365 17.6694L5.52175 15.8611L7.3222 16.8263C7.51294 16.9293 7.7456 16.895 7.89819 16.7424L8.43222 16.2044C8.62295 16.0137 8.62295 15.7047 8.43222 15.5177L7.68075 14.7624L9.30957 13.1333L6.86828 10.6916Z" fill="#FFC260" />
</svg> Combat
                    </h3>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-[25px] 2xl:gap-x-[35px] gap-y-[10px]">
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE] ">Kill Aura</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Rapid Fire</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">AOE Damage</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Hit Multiplier</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">CD Reducer</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Infinite Ultimate</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Magnetizer</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">F&S Enemies</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Player */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] 2xl:text-[22px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 9.75C12.0719 9.75 13.75 8.07188 13.75 6C13.75 3.92812 12.0719 2.25 10 2.25C7.92812 2.25 6.25 3.92812 6.25 6C6.25 8.07188 7.92812 9.75 10 9.75ZM9.07187 11.5C5.99375 11.5 3.5 13.9937 3.5 17.0719C3.5 17.5844 3.91562 18 4.42812 18H15.5719C16.0844 18 16.5 17.5844 16.5 17.0719C16.5 13.9937 14.0063 11.5 10.9281 11.5H9.07187Z" fill="#FFC260" />
</svg> Player
                    </h3>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-[25px] 2xl:gap-x-[35px] gap-y-[10px]">
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE] ">Fly Speed</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Godmode</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">No Fall Damage</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Auto Loot</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Char. Transparency</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Utility */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] 2xl:text-[22px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.21247 1.79061C3.38122 1.62186 3.64372 1.59686 3.84372 1.72811L7.55935 4.20311C7.83747 4.38748 8.0031 4.69998 8.0031 5.03436V6.58436L10.8406 9.42186C11.8812 8.95311 13.15 9.14373 14.0031 9.99998L17.9437 13.9406C18.5281 14.525 18.5281 15.475 17.9437 16.0625L16.0656 17.9406C15.4812 18.525 14.5312 18.525 13.9437 17.9406L10.0031 14C9.14685 13.1437 8.95622 11.8781 9.42497 10.8375L6.58747 7.99998H5.03747C4.7031 7.99998 4.3906 7.83436 4.20622 7.55623L1.73122 3.84061C1.59997 3.64373 1.62497 3.37811 1.79372 3.20936L3.21247 1.79061ZM7.74372 11.275C7.54685 12.4281 7.8156 13.6469 8.56247 14.625L5.59685 17.5937C4.71872 18.4719 3.29372 18.4719 2.4156 17.5937C1.53747 16.7156 1.53747 15.2906 2.4156 14.4125L6.64685 10.1781L7.74685 11.275H7.74372ZM13.0031 1.99998C13.6312 1.99998 14.2343 2.11561 14.7875 2.32811C15.1 2.44686 15.1562 2.84373 14.9218 3.08123L13.15 4.85311C13.0562 4.94686 13.0031 5.07498 13.0031 5.20623V6.49998C13.0031 6.77498 13.2281 6.99998 13.5031 6.99998H14.7968C14.9281 6.99998 15.0562 6.94686 15.15 6.85311L16.9218 5.08123C17.1593 4.84686 17.5562 4.90311 17.675 5.21561C17.8875 5.76873 18.0031 6.37186 18.0031 6.99998C18.0031 8.34998 17.4656 9.57186 16.5968 10.4719L15.0625 8.93748C14.0281 7.90623 12.6093 7.50936 11.2781 7.73748L9.5031 5.96248V5.03436L9.49685 4.87811C9.47185 4.49061 9.35935 4.11873 9.16872 3.78748C10.0875 2.69373 11.4625 1.99998 13.0031 1.99686V1.99998Z" fill="#FFC260" />
</svg> Utility
                    </h3>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-[25px] 2xl:gap-x-[35px] gap-y-[10px]">
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE] ">Auto Dialogs</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Speed Up Dialogs</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Skip Cutscenes</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Custom Time</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Remove Fog</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Auto Seelies</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Profile Changer</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Teleports */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] 2xl:text-[22px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.9888 1.28906C14.6022 1.28906 13.458 4.61521 13.2921 8.91113H12.8583L11.9693 7.09919C11.544 6.2315 10.7656 5.59349 9.86814 5.36381L7.44797 4.64499C6.49096 4.4153 5.47865 4.62797 4.70028 5.2277L3.3477 6.26553C2.87132 6.63132 2.782 7.31186 3.14779 7.79249C3.51358 8.26887 4.19838 8.35819 4.67476 7.9924L6.02308 6.95883C6.28679 6.75467 6.61856 6.68661 6.88227 6.74616L7.38417 6.89503L6.1124 9.8724C5.68281 10.8762 6.06562 12.0459 7.00562 12.6031L9.89792 14.3129L8.96217 17.2946C8.78353 17.8688 9.10254 18.4813 9.67674 18.6599C10.2509 18.8385 10.8592 18.5195 11.0378 17.9453L12.1182 14.5086C12.3181 13.794 12.0161 13.0369 11.3781 12.6584L9.29394 11.4291L10.3615 8.76226L11.0506 10.1744C11.3271 10.7316 11.897 11.0846 12.518 11.0889H13.2921C13.458 15.3848 14.6022 18.7109 15.9888 18.7109C17.4902 18.7109 18.7109 14.8106 18.7109 10C18.7109 5.18942 17.4902 1.28906 15.9888 1.28906ZM10.5444 4.55566C11.4462 4.55566 12.1777 3.82408 12.1777 2.92236C12.1777 2.02065 11.4462 1.28906 10.5444 1.28906C9.64272 1.28906 8.91113 2.02065 8.91113 2.92236C8.91113 3.82408 9.64272 4.55566 10.5444 4.55566ZM5.15965 12.0927L4.65349 13.2666H2.37793C1.7782 13.2666 1.28906 13.7515 1.28906 14.3555C1.28906 14.9552 1.7782 15.4443 2.37793 15.4443H5.01503C5.6658 15.4443 6.25702 15.0573 6.51222 14.4533L6.81421 13.7557L6.45267 13.5431C5.88272 13.2028 5.43186 12.6966 5.15539 12.0927H5.15965Z" fill="#FFC260" />
</svg> Teleports
                    </h3>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-[25px] 2xl:gap-x-[35px] gap-y-[10px]">
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE] ">Mouse Teleport</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Quest Teleport</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Filters List</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Draw Target To TP</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'system-requirements' && (
                <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] 2xl:p-[40px] flex flex-col gap-[25px] 2xl:gap-[30px] animate-fadeIn">
                  {/* Supported OS */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] 2xl:text-[22px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <span className="text-[18px]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 4.92812L8.7375 4.1375V9.68125H3V4.92812ZM3 15.0719L8.7375 15.8625V10.3875H3V15.0719ZM9.36875 15.9469L17 17V10.3875H9.36875V15.9469ZM9.36875 4.05312V9.68125H17V3L9.36875 4.05312Z" fill="#FFC260" />
</svg></span> Supported OS
                    </h3>
                    <div className="grid grid-cols-3 gap-x-[25px] 2xl:gap-x-[35px] items-start">
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Windows 11</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Windows 10</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Linux</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#737AAE] opacity-10" />

                  {/* Supported CPU */}
                  <div className="flex flex-col gap-[10px]">
                    <h3 
                      className="text-[18px] 2xl:text-[22px] leading-[26px] font-bold text-white flex items-center gap-[8px]"
                      style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                    >
                      <span className="text-[18px]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 2.75C7.5 2.33437 7.16563 2 6.75 2C6.33437 2 6 2.33437 6 2.75V4C4.89688 4 4 4.89688 4 6H2.75C2.33437 6 2 6.33437 2 6.75C2 7.16563 2.33437 7.5 2.75 7.5H4V9.25H2.75C2.33437 9.25 2 9.58437 2 10C2 10.4156 2.33437 10.75 2.75 10.75H4V12.5H2.75C2.33437 12.5 2 12.8344 2 13.25C2 13.6656 2.33437 14 2.75 14H4C4 15.1031 4.89688 16 6 16V17.25C6 17.6656 6.33437 18 6.75 18C7.16563 18 7.5 17.6656 7.5 17.25V16H9.25V17.25C9.25 17.6656 9.58437 18 10 18C10.4156 18 10.75 17.6656 10.75 17.25V16H12.5V17.25C12.5 17.6656 12.8344 18 13.25 18C13.6656 18 14 17.6656 14 17.25V16C15.1031 16 16 15.1031 16 14H17.25C17.6656 14 18 13.6656 18 13.25C18 12.8344 17.6656 12.5 17.25 12.5H16V10.75H17.25C17.6656 10.75 18 10.4156 18 10C18 9.58437 17.6656 9.25 17.25 9.25H16V7.5H17.25C17.6656 7.5 18 7.16563 18 6.75C18 6.33437 17.6656 6 17.25 6H16C16 4.89688 15.1031 4 14 4V2.75C14 2.33437 13.6656 2 13.25 2C12.8344 2 12.5 2.33437 12.5 2.75V4H10.75V2.75C10.75 2.33437 10.4156 2 10 2C9.58437 2 9.25 2.33437 9.25 2.75V4H7.5V2.75ZM7 6H13C13.5531 6 14 6.44687 14 7V13C14 13.5531 13.5531 14 13 14H7C6.44687 14 6 13.5531 6 13V7C6 6.44687 6.44687 6 7 6ZM7.5 7.5V12.5H12.5V7.5H7.5Z" fill="#FFC260" />
</svg></span> Supported CPU
                    </h3>
                    <div className="grid grid-cols-3 gap-x-[25px] 2xl:gap-x-[35px] items-start">
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">Intel</span>
                      <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[160%] text-[#737AAE]">AMD</span>
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
                      <span className="text-[18px]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_228_426)">
    <path d="M6.05225 13.9478C6.05225 14.2587 6.30525 14.5117 6.61621 14.5117C6.92717 14.5117 7.18018 14.2587 7.18018 13.9478C7.18018 13.6368 6.92717 13.3838 6.61621 13.3838C6.30525 13.3838 6.05225 13.6368 6.05225 13.9478ZM13.9478 6.05225C13.9478 5.74129 13.6947 5.48828 13.3838 5.48828C13.0728 5.48828 12.8198 5.74129 12.8198 6.05225C12.8198 6.3632 13.0728 6.61621 13.3838 6.61621C13.6947 6.61621 13.9478 6.3632 13.9478 6.05225ZM7.46216 0.976562C6.43997 0.976562 5.62927 1.75201 5.52353 2.73895C4.53659 2.98569 3.79639 3.86688 3.79639 4.92432C3.79639 5.1358 3.83163 5.34729 3.90213 5.55878C2.87994 5.77026 2.10449 6.65146 2.10449 7.74414C2.10449 8.27286 2.28073 8.76633 2.59796 9.15405C1.64627 9.61227 0.976562 10.564 0.976562 11.6919C0.976562 12.8903 1.75201 13.9125 2.80945 14.3355C2.73895 14.547 2.66846 14.7937 2.66846 15.0757C2.66846 16.3094 3.69064 17.3315 4.92432 17.3315C5.1358 17.3315 5.31204 17.2963 5.52353 17.261C5.59402 18.248 6.43997 19.0234 7.46216 19.0234C8.55484 19.0234 9.43604 18.1422 9.43604 17.0496V10.564H7.74414C7.43297 10.564 7.18018 10.8168 7.18018 11.1279V12.6588C7.67717 12.8767 8.02612 13.3703 8.02612 13.9478C8.02612 14.7264 7.39491 15.3577 6.61621 15.3577C5.83752 15.3577 5.2063 14.7264 5.2063 13.9478C5.2063 13.3703 5.55525 12.8767 6.05225 12.6588V11.1279C6.05225 10.195 6.81117 9.43604 7.74414 9.43604H9.43604V6.61621H7.90515C7.68722 7.1132 7.19368 7.46216 6.61621 7.46216C5.83752 7.46216 5.2063 6.83094 5.2063 6.05225C5.2063 5.27355 5.83752 4.64233 6.61621 4.64233C7.19368 4.64233 7.68722 4.99129 7.90515 5.48828H9.43604V2.95044C9.43604 1.85776 8.55484 0.976562 7.46216 0.976562ZM6.05225 6.05225C6.05225 6.3632 6.30525 6.61621 6.61621 6.61621C6.92717 6.61621 7.18018 6.3632 7.18018 6.05225C7.18018 5.74129 6.92717 5.48828 6.61621 5.48828C6.30525 5.48828 6.05225 5.74129 6.05225 6.05225ZM19.0234 11.6919C19.0234 10.564 18.3537 9.61227 17.402 9.15405C17.7193 8.76633 17.8955 8.27286 17.8955 7.74414C17.8955 6.65146 17.1201 5.77026 16.0979 5.55878C16.1684 5.34729 16.2036 5.1358 16.2036 4.92432C16.2036 3.86688 15.4634 2.98569 14.4765 2.73895C14.3707 1.75201 13.56 0.976562 12.5378 0.976562C11.4452 0.976562 10.564 1.85776 10.564 2.95044V9.43604H12.2559C12.567 9.43604 12.8198 9.18324 12.8198 8.87207V7.34119C12.3228 7.12325 11.9739 6.62971 11.9739 6.05225C11.9739 5.27355 12.6051 4.64233 13.3838 4.64233C14.1625 4.64233 14.7937 5.27355 14.7937 6.05225C14.7937 6.62971 14.4447 7.12325 13.9478 7.34119V8.87207C13.9478 9.80504 13.1888 10.564 12.2559 10.564H10.564V13.3838H12.0948C12.3128 12.8868 12.8063 12.5378 13.3838 12.5378C14.1625 12.5378 14.7937 13.1691 14.7937 13.9478C14.7937 14.7264 14.1625 15.3577 13.3838 15.3577C12.8063 15.3577 12.3128 15.0087 12.0948 14.5117H10.564V17.0496C10.564 18.1422 11.4452 19.0234 12.5378 19.0234C13.56 19.0234 14.406 18.248 14.4765 17.261C14.688 17.2963 14.8642 17.3315 15.0757 17.3315C16.3094 17.3315 17.3315 16.3094 17.3315 15.0757C17.3315 14.7937 17.261 14.547 17.1906 14.3355C18.248 13.9125 19.0234 12.8903 19.0234 11.6919ZM13.9478 13.9478C13.9478 13.6368 13.6947 13.3838 13.3838 13.3838C13.0728 13.3838 12.8198 13.6368 12.8198 13.9478C12.8198 14.2587 13.0728 14.5117 13.3838 14.5117C13.6947 14.5117 13.9478 14.2587 13.9478 13.9478Z" fill="#FFC260" />
  </g>
  <defs>
    <clipPath id="clip0_228_426">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg></span> Supported GPU
                    </h3>
                    <div className="grid grid-cols-3 gap-x-[25px] items-start">
                      <span className="text-[12px] lg:text-[14px] leading-[160%] text-[#737AAE]">NVIDIA</span>
                      <span className="text-[12px] lg:text-[14px] leading-[160%] text-[#737AAE]">AMD</span>
                      <span className="text-[12px] lg:text-[14px] leading-[160%] text-[#737AAE]">Intel ARC</span>
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
                      <span className="text-[18px]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.70215 1.52344H2.58301C1.99779 1.52344 1.52344 1.99779 1.52344 2.58301V4.70215C1.52344 5.28736 1.99779 5.76172 2.58301 5.76172H4.70215C5.28736 5.76172 5.76172 5.28736 5.76172 4.70215V2.58301C5.76172 1.99779 5.28736 1.52344 4.70215 1.52344ZM11.0596 1.52344H8.94043C8.35522 1.52344 7.88086 1.99779 7.88086 2.58301V4.70215C7.88086 5.28736 8.35522 5.76172 8.94043 5.76172H11.0596C11.6448 5.76172 12.1191 5.28736 12.1191 4.70215V2.58301C12.1191 1.99779 11.6448 1.52344 11.0596 1.52344ZM17.417 1.52344H15.2979C14.7126 1.52344 14.2383 1.99779 14.2383 2.58301V4.70215C14.2383 5.28736 14.7126 5.76172 15.2979 5.76172H17.417C18.0022 5.76172 18.4766 5.28736 18.4766 4.70215V2.58301C18.4766 1.99779 18.0022 1.52344 17.417 1.52344ZM4.70215 14.2383H2.58301C1.99779 14.2383 1.52344 14.7126 1.52344 15.2979V17.417C1.52344 18.0022 1.99779 18.4766 2.58301 18.4766H4.70215C5.28736 18.4766 5.76172 18.0022 5.76172 17.417V15.2979C5.76172 14.7126 5.28736 14.2383 4.70215 14.2383ZM11.0596 14.2383H8.94043C8.35522 14.2383 7.88086 14.7126 7.88086 15.2979V17.417C7.88086 18.0022 8.35522 18.4766 8.94043 18.4766H11.0596C11.6448 18.4766 12.1191 18.0022 12.1191 17.417V15.2979C12.1191 14.7126 11.6448 14.2383 11.0596 14.2383ZM17.417 14.2383H15.2979C14.7126 14.2383 14.2383 14.7126 14.2383 15.2979V17.417C14.2383 18.0022 14.7126 18.4766 15.2979 18.4766H17.417C18.0022 18.4766 18.4766 18.0022 18.4766 17.417V15.2979C18.4766 14.7126 18.0022 14.2383 17.417 14.2383ZM4.70215 7.88086H2.58301C1.99779 7.88086 1.52344 8.35522 1.52344 8.94043V11.0596C1.52344 11.6448 1.99779 12.1191 2.58301 12.1191H4.70215C5.28736 12.1191 5.76172 11.6448 5.76172 11.0596V8.94043C5.76172 8.35522 5.28736 7.88086 4.70215 7.88086ZM11.0596 7.88086H8.94043C8.35522 7.88086 7.88086 8.35522 7.88086 8.94043V11.0596C7.88086 11.6448 8.35522 12.1191 8.94043 12.1191H11.0596C11.6448 12.1191 12.1191 11.6448 12.1191 11.0596V8.94043C12.1191 8.35522 11.6448 7.88086 11.0596 7.88086ZM17.417 7.88086H15.2979C14.7126 7.88086 14.2383 8.35522 14.2383 8.94043V11.0596C14.2383 11.6448 14.7126 12.1191 15.2979 12.1191H17.417C18.0022 12.1191 18.4766 11.6448 18.4766 11.0596V8.94043C18.4766 8.35522 18.0022 7.88086 17.417 7.88086Z" fill="#FFC260" />
</svg></span> Additional
                    </h3>
                    <div className="grid grid-cols-3 gap-x-[25px] items-start">
                      <span className="text-[12px] lg:text-[14px] leading-[160%] text-[#737AAE]">Stable Network Connection</span>
                      <span className="text-[12px] lg:text-[14px] leading-[160%] text-[#737AAE]">AVX2 CPU Instructions</span>
                      <span className="text-[12px] lg:text-[14px] leading-[160%] text-[#737AAE]">DirectX 12</span>
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
                    className="w-full h-[329px] 2xl:h-[400px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundImage: `url(${mediaItems[0].src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <span className="text-[16px] 2xl:text-[18px] text-[#737AAE] bg-[#0D0525] px-4 py-2 rounded-lg">Click to view</span>
                  </a>

                  {/* Thumbnail Grid - 2 rows x 2 cols */}
                  <div id="media-gallery" className="grid grid-cols-2 gap-[25px] 2xl:gap-[35px]">
                    {mediaItems.slice(0, 4).map((item, index) => (
                      <a
                        key={index}
                        href={item.src}
                        data-pswp-width={item.w}
                        data-pswp-height={item.h}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full h-[157px] 2xl:h-[200px] bg-[#100A36] rounded-[8px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
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
          <div className="w-full lg:w-[40%] flex flex-col gap-[10px] 2xl:gap-[15px] hidden lg:flex">
            <div className='flex gap-2 2xl:gap-3 align-center ml-[20px]'>
              <Image src="/images/tabs/select-plan.svg" width={40} height={40} alt="Select Plan" className="2xl:w-[50px] 2xl:h-[50px]" />
            <h2 
              className="text-[24px] lg:text-[36px] 2xl:text-[48px] leading-[42px] 2xl:leading-[56px] font-bold text-white"
              style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
            >
              Select Plan
            </h2>
            </div>
            
            
            <div className="w-full bg-[#0D0525] rounded-[30px] p-[30px] 2xl:p-[40px] flex flex-col gap-[20px] 2xl:gap-[25px]">
              {/* Plan Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full h-[46px] 2xl:h-[56px] bg-[#100A36] border border-[#1D1550] rounded-[10px] p-[15px] 2xl:p-[20px] flex items-center justify-between cursor-pointer hover:border-[#FFC260] transition-colors"
                >
                  <span className="text-[14px] 2xl:text-[16px] leading-[160%] text-white">
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
                className="w-full h-[46px] 2xl:h-[56px] bg-[#FFC260] border border-[#6E3B08] rounded-[10px] px-[30px] 2xl:px-[40px] py-[10px] flex items-center justify-center hover:bg-[#FFD280] transition-colors"
              >
                <span 
                  className="text-[18px] 2xl:text-[22px] font-semibold text-[#6E3B08]"
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
