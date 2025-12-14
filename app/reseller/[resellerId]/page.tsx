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
            <path d="M3.0004684925079346 1.7985938787460327L7.801406145095825 10.201406836509705" stroke="#737AAE" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <Link 
            href="/payment/genshin-impact"
            className="text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Genshin Impact
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3.0004684925079346 1.7985938787460327L7.801406145095825 10.201406836509705" stroke="#737AAE" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <Link 
            href="/checkout/genshin-impact"
            className="text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Payment Methods
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3.0004684925079346 1.7985938787460327L7.801406145095825 10.201406836509705" stroke="#737AAE" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[16px] leading-[160%] text-white">
            Resellers
          </span>
        </nav>

        {/* Content */}
        <div className="flex flex-col gap-[20px]">
          {/* Product Info Header */}
          <div className="flex items-center gap-[15px]">
            <div className="w-[64px] h-[64px] bg-[#0D0525] rounded-[15px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/products/genshin-logo.png"
                alt="Genshin Impact"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 
                className="text-[36px] leading-[44px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Genshin Impact
              </h1>
              <span className="text-[16px] text-[#737AAE] leading-[160%]">
                1 Day Subscription Plan, $2
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 
            className="text-[36px] leading-[44px] font-bold text-white"
            style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
          >
            Resellers
          </h2>

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
                <div className="w-[32px] h-[32px] rounded-[8px] overflow-hidden flex-shrink-0">
                  <Image
                    src={reseller.logo}
                    alt={reseller.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-[1px] flex-1 min-w-0">
                  <span className="text-[18px] font-semibold text-white leading-none">
                    {reseller.name}
                  </span>
                  <span className="text-[12px] text-[#737AAE] leading-none">
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
