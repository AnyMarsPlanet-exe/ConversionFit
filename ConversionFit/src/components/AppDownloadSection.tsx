import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Download, QrCode, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, ExternalLink, Star } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ConversionFitLogo } from './ConversionFitLogo';

interface AppDownloadSectionProps {
  onOpenInscription: (planName?: string) => void;
}

export const AppDownloadSection: React.FC<AppDownloadSectionProps> = ({ onOpenInscription }) => {
  const [copied, setCopied] = useState(false);

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="app" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#090909] via-[#0f0f08] to-[#090909]">
      {/* Ambient Yellow Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-zinc-950/90 border-2 border-[#FFE500]/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Text, Value Prop & Download Badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/40 text-[#FFE500] font-mono text-xs font-bold tracking-wider">
                <Smartphone className="w-4 h-4 text-[#FFE500]" />
                <span>APLICACIÓN OFICIAL CONVERSION FIT</span>
              </div>

              <div>
                <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase leading-tight">
                  PREINSCRÍBETE EN LA <span className="text-[#FFE500]">APP OFICIAL</span>
                </h2>
                <p className="text-zinc-300 font-inter text-base sm:text-lg mt-3 leading-relaxed">
                  Para asegurar tu cupo en nuestra sede de 3 plantas en Valledupar por <strong className="text-white font-bold">$80.000 COP al mes</strong>, realiza tu <strong>preinscripción directa</strong> descargando la aplicación oficial en tu teléfono móvil.
                </p>
              </div>

              {/* Key Benefits of App Pre-inscription */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2">
                {[
                  { title: 'Reserva de Cupo Inmediata', desc: 'Asegura tu cupo en el Plan de $80.000/mes' },
                  { title: 'Acceso a las 3 Plantas', desc: 'Musculación, Cardio/Clases y CrossFit' },
                  { title: 'Control de Tu Membresía', desc: 'Gestiona tus fechas y asistencias' },
                  { title: 'Seguimiento por Entrenadores', desc: 'Coordinación directa de tus rutinas' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                    <CheckCircle2 className="w-5 h-5 text-[#FFE500] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bebas text-base tracking-wider">{item.title}</h4>
                      <p className="text-xs text-zinc-400 font-inter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Buttons / Official Stores */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500] font-bold block mb-3">
                  DESCARGA GRATIS PARA ANDROID & IOS:
                </span>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  
                  {/* Google Play Store Badge */}
                  <a
                    href={GYM_INFO.apps.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3.5 rounded-2xl bg-black border-2 border-zinc-700 hover:border-[#FFE500] text-white transition-all duration-300 flex items-center justify-center gap-3.5 group shadow-lg hover:shadow-[#FFE500]/10 hover:-translate-y-0.5"
                  >
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.03 2.03 0 0 1-.61-.954V2.768c0-.36.223-.71.61-.954z" fill="#00D3FF" />
                      <path d="M17.158 8.636l-3.365 3.364 3.365 3.364 3.791-2.158c1.082-.616 1.082-1.756 0-2.372l-3.791-2.198z" fill="#FFCE00" />
                      <path d="M3.609 1.814l10.184 10.186 3.365-3.364L6.155.67C4.845-.075 3.609.68 3.609 1.814z" fill="#00F076" />
                      <path d="M13.793 12L3.609 22.186c0 1.134 1.236 1.889 2.546 1.144l11.003-6.966-3.365-3.364z" fill="#FF3A44" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block tracking-wider">DISPONIBLE EN</span>
                      <span className="font-bebas text-2xl tracking-wide text-white group-hover:text-[#FFE500] transition-colors">GOOGLE PLAY</span>
                    </div>
                  </a>

                  {/* Apple App Store Badge */}
                  <a
                    href={GYM_INFO.apps.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3.5 rounded-2xl bg-black border-2 border-zinc-700 hover:border-[#FFE500] text-white transition-all duration-300 flex items-center justify-center gap-3.5 group shadow-lg hover:shadow-[#FFE500]/10 hover:-translate-y-0.5"
                  >
                    <svg className="w-7 h-7 shrink-0 fill-white group-hover:fill-[#FFE500] transition-colors" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-1.97.6-2.6 1.34-.56.64-.99 1.7-0.87 2.72 1 .08 1.99-.49 2.55-1.19z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block tracking-wider">CONSIGUE EN EL</span>
                      <span className="font-bebas text-2xl tracking-wide text-white group-hover:text-[#FFE500] transition-colors">APP STORE</span>
                    </div>
                  </a>

                </div>
              </div>

              {/* Micro-instructions */}
              <div className="p-4 rounded-2xl bg-black/60 border border-zinc-800 text-xs text-zinc-400 font-inter flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFE500] text-black font-bold flex items-center justify-center font-mono text-xs shrink-0">1</span>
                  <span>Descarga la app &gt; Crea tu perfil &gt; Selecciona tu preinscripción</span>
                </div>
                <button
                  onClick={() => onOpenInscription()}
                  className="text-[#FFE500] hover:underline font-mono text-xs font-bold shrink-0 hidden sm:inline-flex items-center gap-1"
                >
                  Ver Asistente <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </motion.div>

            {/* Right Column: Phone Mockup & QR Code */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              {/* Phone Device Frame */}
              <div className="relative w-full max-w-[320px] rounded-[36px] bg-black p-3.5 border-4 border-zinc-800 shadow-[0_0_50px_rgba(255,229,0,0.15)]">
                
                {/* Speaker notch */}
                <div className="w-24 h-4 bg-zinc-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                </div>

                {/* Inner Screen */}
                <div className="rounded-[26px] bg-zinc-950 p-5 border border-zinc-800 space-y-4 text-center">
                  
                  {/* Top Branding in App */}
                  <div className="py-2 border-b border-zinc-800/80">
                    <ConversionFitLogo size="sm" centered={true} showSubtitle={false} />
                    <span className="text-[10px] font-mono text-[#FFE500] uppercase font-bold tracking-wider block mt-1">
                      MÓDULO DE PREINSCRIPCIONES
                    </span>
                  </div>

                  {/* Plan Badge Inside App */}
                  <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-[#FFE500]/40 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">SEDE VALLEDUPAR</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FFE500] text-black text-[9px] font-bold font-mono">DISPONIBLE</span>
                    </div>
                    <div className="font-bebas text-2xl text-white mt-1">PLAN MENSUAL 3 PLANTAS</div>
                    <div className="font-bebas text-3xl text-[#FFE500] font-bold">$80.000 <span className="text-xs font-inter text-zinc-400 font-normal">COP/mes</span></div>
                  </div>

                  {/* QR Code for Instant Scan */}
                  <div className="p-4 rounded-2xl bg-white text-black flex flex-col items-center justify-center shadow-lg">
                    <div className="w-32 h-32 relative flex items-center justify-center">
                      {/* Generated SVG QR Code pattern */}
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                        {/* Corners */}
                        <rect x="5" y="5" width="28" height="28" fill="black" rx="3" />
                        <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
                        <rect x="13" y="13" width="12" height="12" fill="black" rx="1" />

                        <rect x="67" y="5" width="28" height="28" fill="black" rx="3" />
                        <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
                        <rect x="75" y="13" width="12" height="12" fill="black" rx="1" />

                        <rect x="5" y="67" width="28" height="28" fill="black" rx="3" />
                        <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
                        <rect x="13" y="75" width="12" height="12" fill="black" rx="1" />

                        {/* Data Matrix Dots */}
                        <rect x="38" y="10" width="8" height="8" />
                        <rect x="50" y="10" width="8" height="8" />
                        <rect x="38" y="24" width="8" height="8" />
                        <rect x="50" y="24" width="8" height="8" />
                        <rect x="10" y="38" width="8" height="8" />
                        <rect x="24" y="38" width="8" height="8" />
                        <rect x="38" y="38" width="8" height="8" />
                        <rect x="50" y="38" width="8" height="8" />
                        <rect x="64" y="38" width="8" height="8" />
                        <rect x="78" y="38" width="8" height="8" />
                        <rect x="10" y="50" width="8" height="8" />
                        <rect x="24" y="50" width="8" height="8" />
                        <rect x="38" y="50" width="8" height="8" />
                        <rect x="50" y="50" width="8" height="8" />
                        <rect x="64" y="50" width="8" height="8" />
                        <rect x="78" y="50" width="8" height="8" />
                        <rect x="38" y="64" width="8" height="8" />
                        <rect x="50" y="64" width="8" height="8" />
                        <rect x="64" y="64" width="8" height="8" />
                        <rect x="78" y="64" width="8" height="8" />
                        <rect x="38" y="78" width="8" height="8" />
                        <rect x="50" y="78" width="8" height="8" />
                        <rect x="64" y="78" width="8" height="8" />
                        <rect x="78" y="78" width="8" height="8" />
                      </svg>
                      {/* Center badge */}
                      <div className="absolute inset-0 m-auto w-8 h-8 rounded-lg bg-[#FFE500] border-2 border-black flex items-center justify-center font-bebas text-xs font-black">
                        CF
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-900 mt-2 uppercase tracking-wider">
                      ESCANEA PARA DESCARGAR LA APP
                    </span>
                  </div>

                  {/* App rating badge */}
                  <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-300 font-inter">
                    <div className="flex text-[#FFE500]">
                      {'★'.repeat(5)}
                    </div>
                    <span className="font-bold text-white">4.9 / 5</span>
                    <span className="text-zinc-500">• Sede Valledupar</span>
                  </div>

                </div>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
