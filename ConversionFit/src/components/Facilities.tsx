import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Building2 } from 'lucide-react';
import { FACILITIES_GALLERY } from '../data/gymData';
import { FacilityImage } from '../types';
import { OptimizedImage } from './OptimizedImage';

export const Facilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pesas' | 'cardio' | 'cross' | 'vip'>('all');
  const [selectedImage, setSelectedImage] = useState<FacilityImage | null>(null);

  const categories = [
    { id: 'all', label: 'TODAS LAS ÁREAS' },
    { id: 'pesas', label: 'PESO LIBRE & MUSCULACIÓN' },
    { id: 'cardio', label: 'ZONA CARDIO' },
    { id: 'cross', label: 'CIRCUITO FUNCIONAL' },
    { id: 'vip', label: 'EVALUACIÓN Y PROGRESO' },
  ];

  const filteredImages = activeCategory === 'all'
    ? FACILITIES_GALLERY
    : FACILITIES_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <section id="instalaciones" className="py-24 bg-[#09090b] relative border-t border-zinc-900" aria-label="Galería de Instalaciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <Building2 className="w-4 h-4 text-[#FFE500]" />
            SEDE VALLEDUPAR • CARRERA 11 #9-184
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            INSTALACIONES DE <span className="text-[#FFE500]">CONVERSIÓN CORPORAL</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base">
            Instalaciones preparadas con ambiente climatizado, máquinas biomecánicas y zonas de evaluación de avances en Valledupar.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12" role="tablist" aria-label="Filtrar instalaciones por área">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bebas tracking-wider transition-all duration-300 border focus-ring ${
                activeCategory === cat.id
                  ? 'bg-[#FFE500] text-black border-[#FFE500] font-black shadow-lg shadow-[#FFE500]/20'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((facility) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                key={facility.id}
                onClick={() => setSelectedImage(facility)}
                tabIndex={0}
                role="button"
                aria-label={`Ver foto ampliada de ${facility.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(facility);
                  }
                }}
                className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer shadow-xl focus-ring"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <OptimizedImage
                    src={facility.imageUrl}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" aria-hidden="true">
                    <Maximize2 className="w-5 h-5 text-[#FFE500]" />
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFE500] bg-[#FFE500]/10 px-2.5 py-1 rounded-md border border-[#FFE500]/30 inline-block mb-1.5 font-bold">
                      @CONVERSION_FIT.CO
                    </span>
                    <h3 className="font-bebas text-2xl text-white tracking-wide">{facility.title}</h3>
                    <p className="text-xs text-zinc-300 font-inter line-clamp-1">{facility.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="facility-modal-title"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-zinc-700 text-white flex items-center justify-center hover:bg-[#FFE500] hover:text-black transition-colors focus-ring"
                  aria-label="Cerrar vista ampliada de la foto"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative h-[60vh] sm:h-[70vh] w-full bg-black flex items-center justify-center">
                  <OptimizedImage
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                    wrapperClassName="w-full h-full"
                  />
                </div>

                <div className="p-6 bg-zinc-900 border-t border-zinc-800 text-left">
                  <h3 id="facility-modal-title" className="font-bebas text-3xl text-white mb-1">{selectedImage.title}</h3>
                  <p className="text-sm text-zinc-300 font-inter">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
