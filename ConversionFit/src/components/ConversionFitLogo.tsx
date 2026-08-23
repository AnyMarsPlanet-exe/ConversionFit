import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
}

export const ConversionFitLogo: React.FC<LogoProps> = ({
  className = '',
  showSubtitle = false,
  size = 'md',
  centered = false
}) => {
  const sizeClasses = {
    sm: {
      text: 'text-xl sm:text-2xl',
      badge: 'h-5 px-1 sm:h-6 sm:px-1.5',
      badgeText: 'text-xs sm:text-sm',
      sub: 'text-[7px] sm:text-[8px]',
      gap: 'gap-0.5 sm:gap-1'
    },
    md: {
      text: 'text-2xl sm:text-3xl lg:text-4xl',
      badge: 'h-6 px-1.5 sm:h-8 sm:px-2',
      badgeText: 'text-sm sm:text-base font-black',
      sub: 'text-[8px] sm:text-[9px] tracking-wider',
      gap: 'gap-1'
    },
    lg: {
      text: 'text-3xl sm:text-5xl lg:text-6xl',
      badge: 'h-8 px-2 sm:h-12 sm:px-3',
      badgeText: 'text-lg sm:text-2xl font-black',
      sub: 'text-[9px] sm:text-xs tracking-widest',
      gap: 'gap-1.5'
    },
    xl: {
      text: 'text-4xl sm:text-6xl lg:text-7xl',
      badge: 'h-10 px-2.5 sm:h-16 sm:px-4',
      badgeText: 'text-xl sm:text-3xl font-black',
      sub: 'text-[10px] sm:text-sm tracking-widest',
      gap: 'gap-2'
    }
  }[size];

  return (
    <div className={`inline-flex flex-col select-none ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {/* Main Logo Text Line */}
      <div className={`flex items-center leading-none ${sizeClasses.gap} font-bebas tracking-tight`}>
        {/* CONV */}
        <span className={`${sizeClasses.text} text-[#FFE500] font-black tracking-normal`}>
          CONV
        </span>

        {/* Stylized ER Badge with lines */}
        <div className={`relative inline-flex items-center justify-center bg-[#FFE500] text-black font-black rounded-xs ${sizeClasses.badge} shadow-xs`}>
          <div className="flex items-center justify-center gap-0.5">
            {/* Stylized geometric E with horizontal bars */}
            <svg viewBox="0 0 24 24" className="w-auto h-full max-h-[85%] fill-black stroke-none" fill="currentColor">
              <path d="M4 4h16v4H9v3h10v3.5H9v3.5h11V21H4V4z" />
            </svg>
            {/* Stylized geometric R */}
            <svg viewBox="0 0 24 24" className="w-auto h-full max-h-[85%] fill-black stroke-none" fill="currentColor">
              <path d="M4 4h11c3.5 0 6 2 6 5.5 0 2.5-1.5 4.5-4 5.2L21 21h-5.5l-3.5-5.5H9V21H4V4zm5 4v4h5.5c1.2 0 2-.8 2-2s-.8-2-2-2H9z" />
            </svg>
          </div>
        </div>

        {/* SION */}
        <span className={`${sizeClasses.text} text-[#FFE500] font-black tracking-normal`}>
          SION
        </span>

        {/* fit */}
        <span className={`${sizeClasses.text} text-white font-black tracking-tight ml-0.5`}>
          fit
        </span>
      </div>

      {/* Subtitle is hidden by default to keep typography clean */}
      {showSubtitle && (
        <span className={`text-zinc-400 font-mono uppercase font-semibold ${sizeClasses.sub} mt-1 tracking-[0.14em]`}>
          CENTRO DE ENTRENAMIENTO VALLEDUPAR
        </span>
      )}
    </div>
  );
};
