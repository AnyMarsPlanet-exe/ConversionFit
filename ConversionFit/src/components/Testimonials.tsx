import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';
import { OptimizedImage } from './OptimizedImage';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonios" className="py-24 bg-[#09090b] relative border-t border-zinc-900 overflow-hidden" aria-label="Testimonios de Clientes">
      {/* Accent Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFE500]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <MessageSquare className="w-4 h-4 text-[#FFE500]" />
            TESTIMONIOS @CONVERSION_FIT.CO
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            TESTIMONIOS REALES DE <span className="text-[#FFE500]">CONVERSIÓN EN VALLEDUPAR</span>
          </h2>
        </div>

        {/* Carousel Container Card */}
        <div className="relative glass-card p-8 sm:p-12 rounded-3xl border border-zinc-800/90 shadow-2xl">
          <Quote className="w-16 h-16 text-[#FFE500]/20 mx-auto mb-6" aria-hidden="true" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1" aria-label={`Calificación: ${activeTestimonial.rating} de 5 estrellas`}>
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFE500] text-[#FFE500]" aria-hidden="true" />
                ))}
              </div>

              {/* Comment Quote */}
              <blockquote className="text-lg sm:text-2xl text-zinc-200 font-inter font-normal italic leading-relaxed max-w-3xl mx-auto">
                "{activeTestimonial.comment}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-zinc-800 flex items-center justify-center gap-4">
                <OptimizedImage
                  src={activeTestimonial.photo}
                  alt={`Foto de ${activeTestimonial.name}`}
                  className="w-14 h-14 rounded-full object-cover"
                  wrapperClassName="w-14 h-14 rounded-full border-2 border-[#FFE500] shadow-md shrink-0"
                />
                <div className="text-left">
                  <h3 className="font-bebas text-2xl text-white tracking-wide leading-none">{activeTestimonial.name}</h3>
                  <p className="text-xs text-zinc-400 font-inter">{activeTestimonial.occupation} • <span className="text-[#FFE500] font-semibold">{activeTestimonial.planUsed}</span></p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800/80">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFE500] text-white transition-all hover:scale-105 focus-ring"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all focus-ring ${
                    idx === currentIndex ? 'bg-[#FFE500] w-8' : 'bg-zinc-800 hover:bg-zinc-700 w-3'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFE500] text-white transition-all hover:scale-105 focus-ring"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
