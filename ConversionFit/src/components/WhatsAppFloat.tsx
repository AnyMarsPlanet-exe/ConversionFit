import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const WhatsAppFloat: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Tooltip Preview Popup */}
      {tooltipOpen && (
        <div className="relative glass-card p-3.5 rounded-2xl border border-zinc-700/80 shadow-2xl max-w-xs animate-bounce-short text-left">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center text-xs"
            aria-label="Cerrar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bebas text-emerald-400 tracking-wider uppercase">ASESOR EN LÍNEA • VALLEDUPAR</span>
          </div>
          <p className="text-xs text-white font-inter">
            ¡Hola! 👋🏼 ¿Tienes preguntas sobre las membresías o la clase de cortesía en Conversion Fit?
          </p>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={GYM_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300 border-2 border-white/20"
        aria-label="Contactar por WhatsApp con Conversion Fit Valledupar"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>

    </div>
  );
};
