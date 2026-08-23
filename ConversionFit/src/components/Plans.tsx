import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, Award, Smartphone, Phone } from 'lucide-react';
import { PLANS, GYM_INFO } from '../data/gymData';

interface PlansProps {
  onOpenInscription: (planName?: string) => void;
}

export const Plans: React.FC<PlansProps> = ({ onOpenInscription }) => {
  return (
    <section id="planes" className="py-24 bg-[#09090b] relative border-t border-zinc-900">
      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#FFE500]" />
            PLANES DE ENTRENAMIENTO • 3 PLANTAS
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            PREINSCRÍBETE Y <span className="text-[#FFE500]">TRANSFORMA TU CUERPO</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base text-balance">
            La forma oficial de unirte y reservar tu cupo es a través de nuestra <strong>aplicación móvil</strong> en Play Store y App Store. Acceso a las 3 plantas en Valledupar por solo <strong>$80.000 COP al mes</strong>.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 text-left ${
                plan.popular
                  ? 'bg-zinc-900/90 border-2 border-[#FFE500] shadow-2xl shadow-[#FFE500]/20 scale-100 lg:-translate-y-2'
                  : 'glass-card border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#FFE500] text-black font-bebas tracking-wider text-sm shadow-lg flex items-center gap-1.5 font-black">
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                  <span>PREINSCRIPCIÓN ABIERTA EN LA APP</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-zinc-800 pb-6 mb-6">
                  <h3 className="font-bebas text-3xl text-white tracking-wide">{plan.name}</h3>
                  <p className="text-xs text-zinc-400 font-inter mt-1 min-h-[32px]">{plan.tagline}</p>
                  
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-bebas text-5xl sm:text-6xl text-white tracking-tight">{plan.priceCOP}</span>
                    <span className="text-xs font-inter font-bold text-[#FFE500] uppercase">{plan.period}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-inter">
                      <div className="w-5 h-5 rounded-full bg-[#FFE500]/15 border border-[#FFE500]/40 flex items-center justify-center text-[#FFE500] shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#FFE500]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => onOpenInscription(plan.name)}
                  className={`w-full py-4 rounded-xl font-bebas text-xl tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#FFE500] hover:bg-[#ebd200] text-black font-black shadow-[#FFE500]/20'
                      : 'bg-zinc-800 hover:bg-[#FFE500] hover:text-black text-white font-bold'
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                  <span>{plan.ctaText}</span>
                </button>

                <a
                  href={`https://wa.me/573152932226?text=Hola%20Conversion%20Fit,%20quiero%20informaci%C3%B3n%20sobre%20mi%20preinscripci%C3%B3n%20para%20el%20${encodeURIComponent(plan.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-zinc-800 hover:border-emerald-500 text-xs font-inter text-zinc-400 hover:text-emerald-400 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pre-inscription Info Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="font-bebas text-2xl text-white block">
              ¿CÓMO COMPLETAR TU PREINSCRIPCIÓN?
            </span>
            <p className="text-xs text-zinc-400 font-inter mt-1 max-w-xl">
              Descarga la aplicación Conversion Fit en tu tienda favorita (Play Store o App Store), crea tu perfil con tu número telefónico y activa tu plan mensual de <strong>$80.000 COP</strong>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={GYM_INFO.apps.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-black border border-zinc-700 hover:border-[#FFE500] text-white text-xs font-mono font-bold flex items-center gap-2"
            >
              <span>Google Play</span>
            </a>
            <a
              href={GYM_INFO.apps.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-black border border-zinc-700 hover:border-[#FFE500] text-white text-xs font-mono font-bold flex items-center gap-2"
            >
              <span>App Store</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
