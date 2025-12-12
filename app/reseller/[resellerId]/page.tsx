'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const resellers = [
  {
    id: '1',
    name: 'Reseller 1 🇰🇿 🇺🇦',
    description: 'Cards, Crypto, Skins',
    logo: '/images/resellers/reseller-1.png',
  },
  {
    id: '2',
    name: 'Reseller 2 🇪🇺',
    description: 'Revolut, IBAN, Crypto',
    logo: '/images/resellers/reseller-2.png',
  },
  {
    id: '3',
    name: 'Reseller 3 🌍',
    description: 'Worldwide (RU, USA, UA, KZ)',
    logo: '/images/resellers/reseller-3.png',
  },
  {
    id: '4',
    name: 'Reseller 4 🇨🇳',
    description: 'Alipay, Skins, Crypto',
    logo: '/images/resellers/reseller-4.png',
  },
  {
    id: '5',
    name: 'Reseller 5 🇺🇸',
    description: 'Revolut, Bank Card, Skins, Crypto',
    logo: '/images/resellers/reseller-5.png',
  },
];

export default function ResellerPage() {
  const params = useParams();
  const resellerId = params.resellerId as string;

  return (
    <main className="w-full min-h-screen bg-[#0A0218] flex justify-center py-[50px]">
      <div className="w-full max-w-[1132px] flex flex-col gap-[30px] px-4 lg:px-0">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-[15px]">
          <Link 
            href="/products"
            className="text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Products
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.8 6L4.2 9.6L3 8.4L5.4 6L3 3.6L4.2 2.4L7.8 6Z" fill="#737AAE"/>
          </svg>
          <Link 
            href="/payment/genshin-impact"
            className="text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Genshin Impact
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.8 6L4.2 9.6L3 8.4L5.4 6L3 3.6L4.2 2.4L7.8 6Z" fill="#737AAE"/>
          </svg>
          <Link 
            href="/checkout/genshin-impact"
            className="text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Payment Methods
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.8 6L4.2 9.6L3 8.4L5.4 6L3 3.6L4.2 2.4L7.8 6Z" fill="#737AAE"/>
          </svg>
          <span className="text-[16px] leading-[160%] text-white">
            Resellers
          </span>
        </nav>

        {/* Content */}
        <div className="flex flex-col gap-[20px]">
          {/* Title */}
          <h1 
            className="text-[36px] leading-[44px] font-bold text-white"
            style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
          >
            Resellers
          </h1>

          {/* Resellers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            {resellers.map((reseller) => (
              <a
                key={reseller.id}
                href={`https://example.com/reseller-${reseller.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[84px] bg-[#100A36] border border-[#1D1550] rounded-[15px] p-[20px] flex items-center gap-[10px] hover:border-[#FFC260] transition-colors"
              >
                <div className="w-[32px] h-[32px] bg-[#1D1550] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] text-[#737AAE]">Logo</span>
                </div>
                <div className="flex flex-col items-start justify-center flex-1 min-w-0">
                  <span className="text-[18px] font-semibold text-white leading-none">
                    {reseller.name}
                  </span>
                  <span className="text-[8px] text-[#737AAE] leading-none mt-[6px]">
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
