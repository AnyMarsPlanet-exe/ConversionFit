import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { FAQS, GYM_INFO } from '../data/gymData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#09090b] relative border-t border-zinc-900" aria-label="Preguntas Frecuentes">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-[#FFE500]" />
            RESOLVEMOS TUS DUDAS
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            PREGUNTAS <span className="text-[#FFE500]">FRECUENTES</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base">
            Todo lo que necesitas saber sobre Conversion Fit en Valledupar.
          </p>
        </div>

        {/* FAQ Accordion List con Accesibilidad A11y */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const questionId = `faq-btn-${faq.id}`;
            const regionId = `faq-content-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-zinc-800/80 overflow-hidden transition-colors"
              >
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus-ring hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-bebas text-xl sm:text-2xl text-white tracking-wide">{faq.question}</span>
                  <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[#FFE500] shrink-0" aria-hidden="true">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={regionId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-zinc-800/60 text-sm font-inter text-zinc-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-zinc-950 border border-zinc-800">
          <h3 className="font-bebas text-2xl text-white mb-2">¿TIENES UNA PREGUNTA ESPECÍFICA?</h3>
          <p className="text-xs text-zinc-400 font-inter mb-6">Nuestro equipo te responde directamente por WhatsApp.</p>
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-lg focus-ring"
            aria-label="Contactar al equipo de Conversion Fit por WhatsApp"
          >
            <Phone className="w-4 h-4" />
            <span>Chatear por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
