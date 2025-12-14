'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const paymentMethods = [
  {
    id: 'coinbase',
    name: 'Coinbase',
    description: 'Crypto, Credit Cards',
    logo: '/images/payment/coinbase.png',
    bgColor: 'bg-[#100A36]',
    borderColor: 'border-[#1D1550]',
  },
  {
    id: 'pzmpay',
    name: 'PZMPay',
    description: 'Bank Cards',
    logo: '/images/payment/pzmpay.png',
    bgColor: 'bg-[#1C0C66]',
    borderColor: 'border-[#24186E]',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'EU, USA, UA',
    logo: '/images/payment/stripe.png',
    bgColor: 'bg-[#271266]',
    borderColor: 'border-[#392A93]',
  },
  {
    id: 'funpay',
    name: 'FunPay',
    description: 'Worldwide (RU, USA, UA, KZ)',
    logo: '/images/payment/finpay.png',
    bgColor: 'bg-[#100A36]',
    borderColor: 'border-[#271266]',
  },
  {
    id: 'freekassa',
    name: 'FreeKassa',
    description: 'RU, Steam Pay, Perfect Money',
    logo: '/images/payment/freekassa.png',
    bgColor: 'bg-[#100A36]',
    borderColor: 'border-[#1D1550]',
  },
  {
    id: 'resellers',
    name: 'Resellers',
    description: 'Paypal, Stripe, Alipay, ...',
    logo: '/images/payment/resselers.png',
    bgColor: 'bg-[#100A36]',
    borderColor: 'border-[#1D1550]',
  },
];

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState('');
  const [email, setEmail] = useState('');
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;

  const handleGoToPayment = () => {
    if (selectedMethod === 'resellers') {
      router.push(`/reseller/${productId}`);
    } else {
      // Redirect to success page for now
      router.push('/success');
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#0A0218] flex justify-center py-[50px]">
      <div className="w-full max-w-[1132px] flex flex-col gap-[30px] px-4 lg:px-0">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-[15px]">
          <Link 
            href="/products"
            className="text-[12px] md:text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Products
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.8 6L4.2 9.6L3 8.4L5.4 6L3 3.6L4.2 2.4L7.8 6Z" fill="#737AAE"/>
          </svg>
          <Link 
            href="/payment/genshin-impact"
            className="text-[12px] md:text-[16px] leading-[160%] text-[#737AAE] hover:text-white transition-colors"
          >
            Genshin Impact
          </Link>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.8 6L4.2 9.6L3 8.4L5.4 6L3 3.6L4.2 2.4L7.8 6Z" fill="#737AAE"/>
          </svg>
          <span className="text-[12px] md:text-[16px] leading-[160%] text-white">
            Payment Methods
          </span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-[32px]">
          {/* Left Column - Payment Methods */}
          <div className="w-full lg:w-[647px] flex flex-col gap-[20px]">
            {/* Product Info Header */}
            <div className="flex items-center gap-[15px]">
              <div className="w-[42px] h-[42px] md:w-[64px] md:h-[64px] bg-[#0D0525] rounded-[15px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/products/genshin-logo.png"
                  alt="Genshin Impact"
                  width={64}
                  height={64}
                  className="w-[42px] h-[42px] md:w-[64px] md:h-[64px] object-cover"
                />
              </div>
              <div className="flex flex-col md:gap-[5px]">
                <h1 
                  className="text-[14px] lg:text-[32px] md:leading-[44px] font-bold text-white"
                  style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
                >
                  Genshin Impact
                </h1>
                <span className="text-[12px] text-[16px] text-[#737AAE] leading-[160%]">
                  1 Day Subscription Plan, $2
                </span>
              </div>
            </div>

            {/* Payment Methods Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full h-[84px] ${method.bgColor} border ${
                    selectedMethod === method.id ? 'border-[#FFC260]' : method.borderColor
                  } rounded-[15px] p-[20px] flex items-center gap-[10px] hover:border-[#FFC260] transition-colors`}
                >
                  <div className="w-[32px] h-[32px] rounded-[8px] overflow-hidden flex-shrink-0">
                    <Image
                      src={method.logo}
                      alt={method.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center flex-1 min-w-0">
                    <span className="text-[18px] font-semibold text-white leading-none">
                      {method.name}
                    </span>
                    <span className="text-[8px] text-[#737AAE] leading-none mt-[6px] truncate ">
                      {method.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Checkout */}
          <div className="w-full lg:w-[453px] flex flex-col gap-[20px]">
            {/* Checkout Card */}
            <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[20px]">
              <h2 
                className="text-[24px] lg:text-[36px] leading-[44px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Check Out
              </h2>

              

              {/* Service Fee */}
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#737AAE]">Service Fee</span>
                <span className="text-[14px] text-[#737AAE]">10%</span>
              </div>

              {/* Discount */}
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] text-[#737AAE]">Discount</span>
                  <span className="text-[14px] text-[#737AAE]">25%</span>
                </div>
                <div className="flex gap-[10px]">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="Enter discount code"
                      className="w-full h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] pl-[15px] pr-[35px] text-[14px] text-white placeholder:text-[#737AAE] focus:border-[#FFC260] outline-none transition-colors"
                    />
                    <svg 
                      className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.4002 1.20001C1.73832 1.20001 1.2002 1.73814 1.2002 2.40001V8.40001C1.2002 9.06189 1.73832 9.60001 2.4002 9.60001H4.5002V5.40001C4.5002 4.23939 5.43957 3.30001 6.6002 3.30001H7.8002V2.40001C7.8002 1.73814 7.26207 1.20001 6.6002 1.20001H2.4002ZM5.8502 3.30001H3.1502C2.90082 3.30001 2.7002 3.09939 2.7002 2.85001C2.7002 2.60064 2.90082 2.40001 3.1502 2.40001H5.8502C6.09957 2.40001 6.3002 2.60064 6.3002 2.85001C6.3002 3.09939 6.09957 3.30001 5.8502 3.30001ZM6.6002 4.20001C5.93832 4.20001 5.4002 4.73814 5.4002 5.40001V9.60001C5.4002 10.2619 5.93832 10.8 6.6002 10.8H9.6002C10.2621 10.8 10.8002 10.2619 10.8002 9.60001V6.49689C10.8002 6.17814 10.6746 5.87251 10.4496 5.64751L9.3527 4.55064C9.1277 4.32564 8.82207 4.20001 8.50332 4.20001H6.6002Z" fill="#737AAE" />
                    </svg>
                  </div>
                  <button className="w-[100px] h-[46px] bg-[#FFC260] rounded-[10px] text-[16px] font-semibold text-[#6E3B08] hover:bg-[#FFD280] transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between pt-[20px] border-t border-[#1D1550]">
                <span className="text-[18px] font-semibold text-white">Total</span>
                <div className="flex items-center gap-2">
                  <span className="text-[18px] font-semibold text-[#737AAE] line-through">$2</span>
                  <span className="text-[18px] font-semibold text-white">$10</span>
                </div>
              </div>

              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] px-[15px] text-[14px] text-white placeholder:text-[#737AAE] focus:border-[#FFC260] outline-none transition-colors"
              />

              {/* Go to Payment Button */}
              <button 
                onClick={handleGoToPayment}
                disabled={!selectedMethod}
                className="w-full h-[46px] bg-[#FFC260] rounded-[10px] text-[18px] font-semibold text-[#6E3B08] hover:bg-[#FFD280] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Go to Payment
              </button>

              {/* Terms */}
              <p className="text-[10px] text-[#737AAE] text-center leading-[140%]">
                By clicking on the continue, you accept the terms and the privacy policy.
              </p>
            </div>

            {/* Need Help Card */}
            <div className="w-full flex flex-col gap-[10px]">
              <h3 
                className="text-[24px] lg:ml-[30px] leading-[44px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Need Help?
              </h3>
              
              <div className="w-full bg-[#0D0525] rounded-[30px] p-[30px] flex flex-col gap-[20px]">
                <p className="text-[16px] text-[#737AAE] leading-[160%]">
                  Feel free to contact support service on our Discord server!
                </p>

                {/* Message Boxes Preview */}
                <div className="w-full h-[170px] relative flex flex-col justify-between">
                  {/* First message bubble - left aligned */}
                  <div className="absolute top-0 left-0 w-[205px] h-[69px] bg-[#100A36] rounded-[10px] flex items-center px-4">
                    <svg width="205" height="69" viewBox="0 0 205 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H197C201.418 0 205 3.58172 205 8V61C205 65.4183 201.418 69 197 69H2C0.895429 69 0 68.1046 0 67V8Z" fill="#100A36" />
                      <rect x="15" y="15" width="175" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="15" y="28" width="76" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="105" y="39" width="34" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="15" y="39" width="85" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="15" y="51" width="47" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="67" y="51" width="90" height="3" rx="1.5" fill="#737AAE" />
                    </svg>
                  </div>
                  
                  {/* Second message bubble - right aligned */}
                  <div className="absolute bottom-0 right-0 w-[227px] h-[81px]  rounded-[10px] flex items-center px-4">
                    <svg width="227" height="81" viewBox="0 0 227 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H219C223.418 0 227 3.58172 227 8V79C227 80.1046 226.105 81 225 81H8.00001C3.58173 81 0 77.4183 0 73V8Z" fill="#100A36" />
                      <rect x="15" y="15" width="64" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="85" y="15" width="31" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="123" y="15" width="68" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="197" y="15" width="12" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="15" y="28" width="30" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="51" y="28" width="99" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="15" y="39" width="18" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="39" y="39" width="59" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="104" y="39" width="69" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="179" y="39" width="33" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="15" y="51" width="41" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="61" y="51" width="89" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="15" y="63" width="121" height="3" rx="1.5" fill="#737AAE" />
                      <rect x="142" y="63" width="51" height="3" rx="1.5" fill="#737AAE" />
                    </svg>
                  </div>
                </div>

                <button className="w-full h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] text-[18px] font-semibold text-[#737AAE] hover:border-[#FFC260] hover:text-white transition-colors">
                  Contact Support Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
