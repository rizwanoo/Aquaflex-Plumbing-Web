import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'auto';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'auto'
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7 sm:w-8 sm:h-8',
    lg: 'w-9 h-9 sm:w-10 sm:h-10'
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-xl',
    lg: 'text-xl sm:text-2xl'
  };

  const isLight = variant === 'light'; // Light text (for dark backgrounds)

  return (
    <div className={`flex items-center gap-2.5 select-none shrink-0 ${className}`}>
      {/* Brand Icon: Direct reference to hydraulic flex + pipe wrench red node */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 36 36" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="4" fill={isLight ? '#0c1322' : '#09090b'} stroke={isLight ? '#1e293b' : 'none'} strokeWidth="1" />
          {/* Aqua wave curve */}
          <path
            d="M7 24 C11 13, 18 9, 29 11 C25 20, 18 23, 9 22"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Flex cerulean arc */}
          <path
            d="M10 27 C16 18, 23 16, 30 15"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Tradesman tool red accent */}
          <circle cx="28" cy="11" r="2.2" fill="#dc2626" />
        </svg>
      </div>

      {/* Brand Name Lockup based on real sign: Aqua + Flex [Blue] + Plumbing */}
      <div className="flex items-baseline gap-1 whitespace-nowrap">
        <span className={`${textSizes[size]} font-extrabold tracking-tight font-display uppercase leading-none ${
          isLight ? 'text-white' : 'text-zinc-950'
        }`}>
          AQUA<span className="text-sky-500">FLEX</span>
        </span>
        <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase font-sans ${
          isLight ? 'text-slate-400' : 'text-zinc-500'
        }`}>
          PLUMBING
        </span>
      </div>
    </div>
  );
};
