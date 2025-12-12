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
    bgColor: 'bg-[#1C0C4E]',
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
    logo: '/images/payment/funpay.png',
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
    logo: '/images/payment/resellers.png',
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
          <span className="text-[16px] leading-[160%] text-white">
            Payment Methods
          </span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-[32px]">
          {/* Left Column - Payment Methods */}
          <div className="w-full lg:w-[647px] flex flex-col gap-[20px]">
            {/* Title */}
            <h1 
              className="text-[36px] leading-[44px] font-bold text-white"
              style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
            >
              Payment Methods
            </h1>

            {/* Payment Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full h-[84px] ${method.bgColor} border ${
                    selectedMethod === method.id ? 'border-[#FFC260]' : method.borderColor
                  } rounded-[15px] p-[20px] flex items-center gap-[10px] hover:border-[#FFC260] transition-colors`}
                >
                  <div className="w-[32px] h-[32px] bg-[#1D1550] rounded-[8px] flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] text-[#737AAE]">Logo</span>
                  </div>
                  <div className="flex flex-col items-start justify-center flex-1 min-w-0">
                    <span className="text-[18px] font-semibold text-white leading-none">
                      {method.name}
                    </span>
                    <span className="text-[8px] text-[#737AAE] leading-none mt-[6px] truncate w-full">
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
                className="text-[36px] leading-[44px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Check Out
              </h2>

              {/* Product Info */}
              <div className="flex items-center gap-[15px] pb-[20px] border-b border-[#1D1550]">
                <div className="w-[48px] h-[48px] bg-[#100A36] rounded-[8px] flex items-center justify-center">
                  <span className="text-[12px] text-[#737AAE]">GI</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[16px] font-semibold text-white">Genshin Impact</span>
                  <span className="text-[12px] text-[#737AAE]">1 Day Subscription Plan, $2</span>
                </div>
              </div>

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
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Enter discount code"
                    className="flex-1 h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] px-[15px] text-[14px] text-white placeholder:text-[#737AAE] focus:border-[#FFC260] outline-none transition-colors"
                  />
                  <button className="w-[100px] h-[46px] bg-[#FFC260] rounded-[10px] text-[16px] font-semibold text-[#6E3B08] hover:bg-[#FFD280] transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between pt-[20px] border-t border-[#1D1550]">
                <span className="text-[18px] font-semibold text-white">Total</span>
                <span className="text-[18px] font-semibold text-white">$2 $10</span>
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
            <div className="w-full bg-[#0D0525] rounded-[20px] p-[30px] flex flex-col gap-[20px]">
              <h3 
                className="text-[24px] leading-[32px] font-bold text-white"
                style={{ fontFamily: 'var(--font-hywenhei, system-ui)' }}
              >
                Need Help?
              </h3>
              <p className="text-[14px] text-[#737AAE] leading-[160%]">
                Feel free to contact support service on our Discord server!
              </p>

              {/* Discord Preview Placeholder */}
              <div className="w-full h-[120px] bg-[#100A36] rounded-[10px] flex items-center justify-center">
                <span className="text-[12px] text-[#737AAE]">Discord Chat Preview</span>
              </div>

              <button className="w-full h-[46px] bg-[#100A36] border border-[#1D1550] rounded-[10px] text-[16px] font-semibold text-white hover:border-[#FFC260] transition-colors">
                Contact Support Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
