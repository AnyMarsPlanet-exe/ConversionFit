import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, ShieldCheck, MapPin, Download, Flame, Instagram, Sparkles } from 'lucide-react';
import { GYM_INFO, GYM_STATS } from '../data/gymData';
import { ConversionFitLogo } from './ConversionFitLogo';

interface HeroProps {
  onOpenInscription: (planName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInscription }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090b]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000"
          alt="Conversion Fit Environment Valledupar"
          className="w-full h-full object-cover object-center filter brightness-[0.24] contrast-125 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-[#09090b]/90" />
        {/* Neon Yellow Glow Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FFE500]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left pt-10 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start">
            
            {/* Official Logo Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-xl">
                <Instagram className="w-4 h-4 text-[#FFE500]" />
                <span className="text-xs font-mono font-bold text-white tracking-wide">
                  INSTAGRAM OFICIAL <span className="text-[#FFE500]">@conversion_fit.co</span> • VALLEDUPAR
                </span>
              </div>
            </motion.div>

            {/* Main Headline Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 text-center lg:text-left"
            >
              <ConversionFitLogo size="xl" showSubtitle={false} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-bebas text-3xl sm:text-5xl text-white tracking-wide mt-3 mb-4"
            >
              SEDE DE <span className="text-[#FFE500]">3 PLANTAS DE ENTRENAMIENTO</span> EN VALLEDUPAR
            </motion.h2>

            {/* Subtitle Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl font-inter font-normal leading-relaxed mb-8 text-balance"
            >
              Preinscríbete a través de nuestra <strong>aplicación oficial</strong> para Android y App Store. Acceso total a Planta 1 (Musculación), Planta 2 (Cardio y Clases Personalizadas) y Planta 3 (CrossFit) por solo <strong className="text-[#FFE500]">$80.000 COP al mes</strong>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => onOpenInscription('PLAN MENSUAL CONVERSIÓN FIT')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-2xl tracking-wider shadow-2xl shadow-[#FFE500]/25 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 font-black"
              >
                <Smartphone className="w-6 h-6 text-black" />
                <span>PREINSCRIBIRME EN LA APP</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>

              <a
                href="#app"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-[#FFE500] text-white font-semibold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-xl backdrop-blur-md"
              >
                <Download className="w-5 h-5 text-[#FFE500]" />
                <span>VER DESCARGA DE APP</span>
              </a>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFE500]" />
                <span>Plan Oficial $80.000 COP / Mes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFE500]" />
                <span>Carrera 11 #9-184 Valledupar</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#FFE500]" />
                <span>Musculación • Cardio • CrossFit</span>
              </div>
            </motion.div>

          </div>

          {/* Right Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#FFE500]/30 shadow-2xl relative overflow-hidden group text-left">
              {/* Glow background shifted towards the bottom CTA button */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#FFE500]/25 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FFE500]/40 transition-all duration-500" />
              
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800 mb-5">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-[#FFE500] font-bold block">PREINSCRIPCIÓN ABIERTA</span>
                  <span className="font-bebas text-3xl text-white">PLAN MENSUAL 3 PLANTAS</span>
                  <div className="font-bebas text-4xl text-[#FFE500] font-black mt-1">$80.000 <span className="text-sm font-inter text-zinc-400 font-normal">/ MES</span></div>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-3.5 mb-7 text-sm text-zinc-300 font-inter">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFE500] mt-1.5 shrink-0" />
                  <span><strong>Preinscripción en la App:</strong> Disponible en Google Play y App Store.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFE500] mt-1.5 shrink-0" />
                  <span><strong>Acceso 3 Niveles:</strong> Planta 1 (Musculación), Planta 2 (Cardio/Clases), Planta 3 (CrossFit).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFE500] mt-1.5 shrink-0" />
                  <span><strong>Entrenadores en Sala:</strong> Acompañamiento en técnica y posturas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFE500] mt-1.5 shrink-0" />
                  <span><strong>Evaluación Corporal Inicial:</strong> Medición por bioimpedancia incluida.</span>
                </li>
              </ul>

              {/* Glowing and pulsating main CTA button */}
              <div className="relative z-10">
                <button
                  onClick={() => onOpenInscription('PLAN MENSUAL CONVERSIÓN FIT')}
                  className="w-full py-4 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-2xl tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,229,0,0.45)] hover:shadow-[0_0_35px_rgba(255,229,0,0.7)] text-center font-black block transform hover:scale-[1.02] active:scale-[0.99] ring-2 ring-[#FFE500]/50 animate-pulse hover:animate-none"
                  aria-label="Preinscribirme por 80.000 pesos al mes"
                >
                  PREINSCRIBIRME POR $80.000
                </button>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[11px] font-mono text-zinc-400">
                  Carrera 11 #9-184 • Valledupar, Cesar
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 pt-10 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {GYM_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center"
            >
              <div className="font-bebas text-4xl sm:text-5xl text-white tracking-wide flex items-center justify-center gap-0.5">
                <span className="text-[#FFE500]">{stat.prefix}</span>
                <span>{stat.value.toLocaleString()}</span>
                <span className="text-[#FFE500]">{stat.suffix}</span>
              </div>
              <div className="text-xs font-inter font-medium text-zinc-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
