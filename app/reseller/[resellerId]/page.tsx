'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const resellers = [
  {
    id: '1',
    name: 'Reseller 1 🇰🇿 🇺🇦',
    description: 'Cards, Crypto, Skins',
    logo: '/images/payment/coinbase.png',
  },
  {
    id: '2',
    name: 'Reseller 2 🇪🇺',
    description: 'Revolut, IBAN, Crypto',
    logo: '/images/payment/finpay.png',
  },
  {
    id: '3',
    name: 'Reseller 3 🌍',
    description: 'Worldwide (RU, USA, UA, KZ)',
    logo: '/images/payment/freekassa.png',
  },
  {
    id: '4',
    name: 'Reseller 4 🇨🇳',
    description: 'Alipay, Skins, Crypto',
    logo: '/images/payment/pzmpay.png',
  },
  {
    id: '5',
    name: 'Reseller 5 🇺🇸',
    description: 'Revolut, Bank Card, Skins, Crypto',
    logo: '/images/payment/stripe.png',
  },
];

export default function ResellerPage() {
  const params = useParams();
  const resellerId = params.resellerId as string;

  return (
    <main className="w-full h-full bg-[#0A0218] flex justify-center py-[30px] lg:py-[50px] 2xl:py-[70px]">
      <div className="w-full max-w-[1132px] lg:max-w-none lg:px-[10%] flex flex-col gap-[30px] 2xl:gap-[40px] px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-[5px]">
          <Link 
            href="/products"
            className="text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Products
          </Link>
          <svg className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px]" viewBox="0 0 10 10" fill="none">
            <path d="M2.5 1.5L5 5L7.5 1.5" stroke="#737AAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(270 5 5)"/>
          </svg>
          <Link 
            href="/payment/genshin-impact"
            className="text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Genshin Impact
          </Link>
          <svg className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px]" viewBox="0 0 10 10" fill="none">
            <path d="M2.5 1.5L5 5L7.5 1.5" stroke="#737AAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(270 5 5)"/>
          </svg>
          <Link 
            href="/checkout/genshin-impact"
            className="text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Payment Methods
          </Link>
          <svg className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px]" viewBox="0 0 10 10" fill="none">
            <path d="M2.5 1.5L5 5L7.5 1.5" stroke="#737AAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(270 5 5)"/>
          </svg>
          <span className="text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[160%] text-white">
            Resellers
          </span>
        </nav>

        {/* Content */}
        <div className="flex flex-col gap-[15px] lg:gap-[20px] 2xl:gap-[30px]">
          {/* Product Info Header */}
          <div className="flex items-center gap-[15px] 2xl:gap-[20px] pb-[10px]">
            <div className="w-[42px] h-[42px] lg:w-[64px] lg:h-[64px] 2xl:w-[80px] 2xl:h-[80px] bg-[#0D0525] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/products/genshin-logo.png"
                alt="Genshin Impact"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[0px]">
              <h1 
                className="text-[16px] lg:text-[36px] 2xl:text-[48px] leading-[29px] lg:leading-[44px] 2xl:leading-[56px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Genshin Impact
              </h1>
              <span className="text-[12px] lg:text-[16px] 2xl:text-[18px] text-[#737AAE] leading-[160%]">
                1 Day Subscription Plan, $2
              </span>
            </div>
          </div>

          {/* Title - Hidden on mobile */}
          <h2 
            className="hidden lg:block text-[36px] 2xl:text-[48px] leading-[44px] 2xl:leading-[56px] font-bold text-white"
            style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
          >
            Resellers
          </h2>

          {/* Resellers Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-[16px] lg:gap-[20px] 2xl:gap-[30px]">
            {resellers.map((reseller) => (
              <a
                key={reseller.id}
                href={`https://example.com/reseller-${reseller.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[75px] lg:h-[84px] 2xl:h-[100px] bg-[#100A36] border border-[#1D1550] rounded-[15px] p-[20px] 2xl:p-[25px] flex items-center gap-[10px] 2xl:gap-[15px] hover:border-[#FFC260] transition-colors"
              >
                <div className="w-[32px] h-[32px] 2xl:w-[40px] 2xl:h-[40px] rounded-[8px] overflow-hidden flex-shrink-0">
                  <Image
                    src={reseller.logo}
                    alt={reseller.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-[0px] flex-1 min-w-0">
                  <span className="text-[14px] lg:text-[18px] 2xl:text-[22px] font-semibold text-white leading-[20px] 2xl:leading-[28px]">
                    {reseller.name}
                  </span>
                  <span className="text-[8px] lg:text-[12px] 2xl:text-[14px] text-[#737AAE] leading-[11px] 2xl:leading-[18px]">
                    {reseller.description}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
