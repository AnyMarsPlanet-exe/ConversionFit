import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, HeartPulse, Trophy, CheckCircle2, Flame, Instagram } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: '2 SEDES (VALLEDUPAR & FONSECA)',
      description: 'Sede Principal de 3 plantas en Valledupar (Musculación, Cardio, Clases, CrossFit) y Sede Fonseca en La Guajira.'
    },
    {
      icon: Shield,
      title: 'ENTRENADORES EN SALA',
      description: 'Coaches cualificados te asisten permanentemente con la técnica, posturas y progresiones de tu rutina.'
    },
    {
      icon: HeartPulse,
      title: 'CONTROL DE COMPOSICIÓN',
      description: 'Evaluación inicial y periódica de porcentaje de grasa y músculo magro por bioimpedancia.'
    },
    {
      icon: Trophy,
      title: 'COMUNIDAD @CONVERSION_FIT.CO',
      description: 'Un ambiente motivador en Valledupar donde cientos de personas comparten sus transformaciones reales.'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-[#09090b] relative overflow-hidden border-t border-zinc-900" aria-label="Sobre Nosotros">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FFE500]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3"
          >
            <Flame className="w-4 h-4 text-[#FFE500]" />
            ¿QUÉ SOMOS?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-6xl tracking-wide text-white mb-6 uppercase"
          >
            ¿QUÉ SOMOS? <span className="text-[#FFE500]">CONVERSIÓN FIT</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-300 font-inter text-base sm:text-lg leading-relaxed text-balance"
          >
            En <strong>Conversion Fit (@conversion_fit.co)</strong> te ofrecemos una sede de <strong>3 plantas de entrenamiento en Valledupar</strong>: Planta 1 de musculación y fuerza, Planta 2 de cardio y clases personalizadas, y Planta 3 para CrossFit y entrenamiento libre. Todo guiado por nuestro equipo de entrenadores en sala.
          </motion.p>
        </div>

        {/* Content Split: Image Showcase + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 text-left">
          
          {/* Left Column Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
                alt="Instalaciones y entrenamiento en Conversion Fit Valledupar"
                className="w-full h-[450px] sm:h-[520px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                wrapperClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-90" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-2xl border border-zinc-700/80">
                <span className="font-bebas text-2xl text-white block">SEDE 3 PLANTAS • CARRERA 11 #9-184</span>
                <p className="text-xs text-zinc-300 font-inter mt-1">
                  Espacio integral distribuido en 3 niveles para musculación, cardio, clases personalizadas y CrossFit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide">
              ¿CÓMO SE DISTRIBUYE <span className="text-[#FFE500]">CONVERSION FIT?</span>
            </h3>

            <div className="space-y-4">
              {[
                'Planta 1: Entrenamiento Principal de Musculación, Maquinaria Biomecánica y Peso Libre.',
                'Planta 2: Zona Cardio climatizada y espacio para Clases Personalizadas dirigidas.',
                'Planta 3: Área de CrossFit, WODs de alta intensidad y Entrenamiento Libre.',
                'Entrenadores en sala dedicados a guiar tu rutina y posturas (sin servicio de nutricionista).',
                'Evaluación corporal inicial y periódica por bioimpedancia (porcentaje de grasa y músculo).'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#FFE500] shrink-0 mt-0.5" />
                  <span className="text-sm font-inter text-zinc-300 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FFE500]/10 border border-[#FFE500]/20 text-xs text-zinc-300 font-inter leading-relaxed flex items-center gap-3">
              <Instagram className="w-5 h-5 text-[#FFE500] shrink-0" />
              <span>Sigue nuestro trabajo diario y testimonios de transformación en <strong>@conversion_fit.co</strong></span>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFE500]/10 border border-[#FFE500]/30 flex items-center justify-center text-[#FFE500] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bebas text-2xl text-white tracking-wide mb-2">{pillar.title}</h4>
                  <p className="text-xs text-zinc-400 font-inter leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
