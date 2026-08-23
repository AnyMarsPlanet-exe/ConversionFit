import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Dumbbell, Cpu, Flame, ShieldAlert, UserCheck, Zap, Award, CheckCircle2, ArrowRight, X, Smartphone } from 'lucide-react';
import { AREAS } from '../data/gymData';
import { GymArea } from '../types';
import { OptimizedImage } from './OptimizedImage';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Dumbbell,
  Cpu,
  Flame,
  ShieldAlert,
  UserCheck,
  Zap,
  Award
};

interface AreasProps {
  onOpenInscription: (planName?: string) => void;
}

export const Areas: React.FC<AreasProps> = ({ onOpenInscription }) => {
  const [selectedArea, setSelectedArea] = useState<GymArea | null>(null);

  return (
    <section id="areas" className="py-24 bg-[#09090b] relative border-t border-zinc-900" aria-label="Áreas de Entrenamiento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <Dumbbell className="w-4 h-4 text-[#FFE500]" />
            ÁREAS DE ENTRENAMIENTO & EVALUACIÓN
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            ZONAS DISEÑADAS PARA <span className="text-[#FFE500]">TU TRANSFORMACIÓN</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base text-balance">
            Cada una de nuestras 3 plantas en Valledupar cumple un rol estratégico en tu entrenamiento: musculación principal, cardio/clases personalizadas y área de CrossFit libre.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS.map((area, idx) => {
            const IconComponent = iconMap[area.iconName] || Dumbbell;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => setSelectedArea(area)}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalles de ${area.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedArea(area);
                  }
                }}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-zinc-800/80 flex flex-col justify-between group cursor-pointer relative overflow-hidden text-left focus-ring"
              >
                {/* Image Accent Preview */}
                <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden">
                  <OptimizedImage
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75 group-hover:brightness-90"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-90" />
                  
                  {/* Top Badge Icon */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FFE500]">
                    <IconComponent className="w-5 h-5 text-[#FFE500]" />
                  </div>
                </div>

                <div>
                  <h3 className="font-bebas text-2xl text-white tracking-wide mb-2 group-hover:text-[#FFE500] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-inter line-clamp-3 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-[#FFE500] transition-colors">
                  <span>VER EQUIPOS & DETALLES</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Detail for Selected Area */}
        <AnimatePresence>
          {selectedArea && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedArea(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="area-modal-title"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-left"
              >
                <button
                  onClick={() => setSelectedArea(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#FFE500] hover:text-black text-white flex items-center justify-center transition-colors focus-ring"
                  aria-label="Cerrar detalles del área"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-52 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6">
                  <OptimizedImage
                    src={selectedArea.image}
                    alt={selectedArea.title}
                    className="w-full h-full object-cover filter brightness-90"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs uppercase font-mono text-[#FFE500] bg-black/60 px-3 py-1 rounded-md border border-[#FFE500]/30 font-bold">
                      @CONVERSION_FIT.CO
                    </span>
                    <h3 id="area-modal-title" className="font-bebas text-3xl sm:text-4xl text-white mt-1">{selectedArea.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 font-inter leading-relaxed mb-6">
                  {selectedArea.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-3">ELEMENTOS CLAVE DE ESTA ZONA:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedArea.equipmentList.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-200 bg-zinc-950 p-2.5 rounded-xl border border-zinc-800">
                        <CheckCircle2 className="w-4 h-4 text-[#FFE500] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFE500]/10 border border-[#FFE500]/30 mb-6 text-xs text-zinc-200">
                  <strong className="text-[#FFE500]">Propósito:</strong> {selectedArea.highlight}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedArea(null);
                      onOpenInscription();
                    }}
                    className="flex-1 py-3.5 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-xl tracking-wider shadow-lg text-center font-black flex items-center justify-center gap-2 focus-ring"
                  >
                    <Smartphone className="w-5 h-5" />
                    <span>PREINSCRIBIRME EN LA APP ($80.000)</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
