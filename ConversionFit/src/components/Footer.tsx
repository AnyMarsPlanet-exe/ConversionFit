import React from 'react';
import { Dumbbell, Phone, Mail, MapPin, Instagram, Facebook, ArrowUp, ShieldCheck, Smartphone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ConversionFitLogo } from './ConversionFitLogo';

interface FooterProps {
  onOpenInscription: (planName?: string) => void;
  onOpenSeo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInscription, onOpenSeo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 font-inter border-t border-zinc-800/80 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <ConversionFitLogo size="md" />
            </a>

            <p className="text-xs text-zinc-400 font-normal leading-relaxed">
              Gimnasio y Centro de Recomposición Corporal de 3 plantas en Valledupar, Colombia. Especialistas en plan de entrenamiento guiado, musculación, cardio y CrossFit. Preinscríbete desde nuestra app móvil.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFE500] hover:text-[#FFE500] flex items-center justify-center transition-colors"
                aria-label="Instagram Conversion Fit @conversion_fit.co"
              >
                <Instagram className="w-4 h-4 text-[#FFE500]" />
              </a>
              <a
                href={GYM_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFE500] hover:text-[#FFE500] flex items-center justify-center transition-colors"
                aria-label="Facebook Conversion Fit"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Conversion Fit"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bebas text-xl text-white tracking-wide uppercase">NAVEGACIÓN</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#nosotros" className="hover:text-[#FFE500] transition-colors">Nosotros</a></li>
              <li><a href="#instalaciones" className="hover:text-[#FFE500] transition-colors">3 Plantas Valledupar</a></li>
              <li><a href="#areas" className="hover:text-[#FFE500] transition-colors">Áreas & Equipos</a></li>
              <li><a href="#descarga-app" className="hover:text-[#FFE500] transition-colors">App Oficial</a></li>
              <li><a href="#planes" className="hover:text-[#FFE500] transition-colors">Planes ($80.000)</a></li>
              <li><a href="#entrenadores" className="hover:text-[#FFE500] transition-colors">Coaches</a></li>
            </ul>
          </div>

          {/* App Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bebas text-xl text-white tracking-wide uppercase">APP CONVERSION FIT</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={GYM_INFO.appStoreLinks.playStore} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE500] transition-colors flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Google Play Store</span>
                </a>
              </li>
              <li>
                <a href={GYM_INFO.appStoreLinks.appStore} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE500] transition-colors flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-[#FFE500]" />
                  <span>Apple App Store</span>
                </a>
              </li>
              <li><a href="#resultados" className="hover:text-[#FFE500] transition-colors">Transformaciones</a></li>
              <li><a href="#horarios" className="hover:text-[#FFE500] transition-colors">Horarios 5:00 AM</a></li>
              <li><a href="#faq" className="hover:text-[#FFE500] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Location & Contact Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-bebas text-xl text-white tracking-wide uppercase">NUESTRAS 2 SEDES</h4>
            
            <div className="space-y-3 text-xs text-zinc-400">
              {/* Sede Valledupar */}
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span className="text-[#FFE500] font-mono text-[11px] uppercase">SEDE VALLEDUPAR (3 PLANTAS)</span>
                  <a href={GYM_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#FFE500] hover:underline text-[10px] font-mono">Mapa &gt;</a>
                </div>
                <p className="text-[11px] text-zinc-300">Carrera 11 #9-184, Valledupar, Cesar</p>
              </div>

              {/* Sede Fonseca */}
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span className="text-[#FFE500] font-mono text-[11px] uppercase">SEDE FONSECA (LA GUAJIRA)</span>
                  <a href={GYM_INFO.googleMapsFonsecaUrl} target="_blank" rel="noopener noreferrer" className="text-[#FFE500] hover:underline text-[10px] font-mono">Mapa &gt;</a>
                </div>
                <p className="text-[11px] text-zinc-300">Calle 11 #15-17, Fonseca, La Guajira</p>
              </div>

              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#FFE500] shrink-0" />
                <span>WhatsApp: {GYM_INFO.phone}</span>
              </p>
            </div>

            <button
              onClick={() => onOpenInscription()}
              className="mt-2 w-full py-3 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-xl tracking-wider transition-colors shadow-md font-black"
            >
              PREINSCRIBIRME POR $80.000 / MES
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-bebas tracking-wide">CONVERSION FIT (@conversion_fit.co)</strong>. Todos los derechos reservados. Valledupar, Colombia.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSeo}
              className="hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFE500]" />
              <span>Estrategia SEO Google #1</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#FFE500] hover:text-black text-white flex items-center justify-center transition-colors border border-zinc-800"
              title="Volver arriba"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
