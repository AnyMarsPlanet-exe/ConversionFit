import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface MobileBottomBarProps {
  onOpenInscription: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenInscription }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-3 py-2.5 bg-[#09090b]/95 backdrop-blur-xl border-t border-zinc-800/90 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Quick WhatsApp Action */}
        <a
          href={GYM_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 border border-emerald-500/40 text-emerald-400 hover:bg-zinc-800 transition-colors font-bebas text-lg tracking-wider active:scale-[0.98]"
          aria-label="Escribir por WhatsApp a Conversion Fit"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
          <span>WHATSAPP</span>
        </a>

        {/* Quick Inscription Action */}
        <button
          onClick={onOpenInscription}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-lg tracking-wider font-black shadow-lg shadow-[#FFE500]/25 active:scale-[0.98] transition-all"
          aria-label="Abrir formulario de preinscripción"
        >
          <span>PREINSCRIBIRME</span>
          <ArrowRight className="w-4 h-4 text-black shrink-0" />
        </button>
      </div>
    </div>
  );
};
