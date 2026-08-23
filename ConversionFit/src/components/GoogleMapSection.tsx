import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, Compass, ExternalLink, MapPin, CheckCircle2, Clock, Phone, Building2 } from 'lucide-react';
import { GYM_LOCATIONS } from '../data/gymData';
import { OptimizedImage } from './OptimizedImage';

export const GoogleMapSection: React.FC = () => {
  const [selectedSedeId, setSelectedSedeId] = useState<'valledupar' | 'fonseca'>('valledupar');

  const activeSede = GYM_LOCATIONS.find((loc) => loc.id === selectedSedeId) || GYM_LOCATIONS[0];

  return (
    <section id="ubicacion" className="py-24 bg-[#09090b] relative border-t border-zinc-900" aria-label="Ubicación y Sedes de Conversion Fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <Compass className="w-4 h-4 text-[#FFE500]" />
            RED DE SEDES CONVERSION FIT
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            NUESTRAS <span className="text-[#FFE500]">2 SEDES OFICIALES</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base text-balance">
            Entrena con nosotros en <strong>Valledupar</strong> (Sede Principal de 3 Plantas) o en nuestra sede en <strong>Fonseca, La Guajira</strong>. Selecciona tu sede para ver el mapa interactivo y cómo llegar.
          </p>
        </div>

        {/* Sede Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10" role="tablist" aria-label="Seleccionar sede">
          {GYM_LOCATIONS.map((sede) => {
            const isSelected = selectedSedeId === sede.id;
            return (
              <button
                key={sede.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSedeId(sede.id as 'valledupar' | 'fonseca')}
                className={`px-6 py-3.5 rounded-2xl font-bebas text-lg sm:text-xl tracking-wider transition-all duration-300 border flex items-center gap-2.5 focus-ring ${
                  isSelected
                    ? 'bg-[#FFE500] text-black border-[#FFE500] font-black shadow-xl shadow-[#FFE500]/20 scale-105'
                    : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                <MapPin className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-[#FFE500]'}`} />
                <span>{sede.name.toUpperCase()}</span>
                {sede.isMain && (
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-bold ${
                    isSelected ? 'bg-black/20 text-black' : 'bg-zinc-800 text-[#FFE500]'
                  }`}>
                    Principal
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Sede Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSede.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 text-left"
          >
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-zinc-950/90 border-b lg:border-b-0 lg:border-r border-zinc-800">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFE500]/10 border border-[#FFE500]/30 text-[#FFE500] font-mono text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  {activeSede.badge}
                </div>

                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                  {activeSede.name}
                </h3>
                
                <p className="text-sm font-inter text-zinc-300 leading-relaxed">
                  <strong className="text-white">Dirección:</strong> {activeSede.address}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono uppercase text-[#FFE500] font-bold block">
                    EQUIPAMIENTO & BENEFICIOS:
                  </span>
                  {activeSede.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-inter">
                      <CheckCircle2 className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hours Box */}
                <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1 text-xs text-zinc-300 font-inter">
                  <div className="flex items-center gap-2 text-[#FFE500] font-mono font-bold text-[11px] uppercase mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>HORARIO DE ATENCIÓN</span>
                  </div>
                  <div>Lunes a Viernes: <strong>{activeSede.hours.weekdays}</strong></div>
                  <div>Sábados: <strong>{activeSede.hours.saturdays}</strong></div>
                  <div>Domingos y Festivos: <strong>{activeSede.hours.sundays}</strong></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-zinc-800 space-y-3">
                <a
                  href={activeSede.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-2xl tracking-wider shadow-xl flex items-center justify-center gap-3 transition-all font-black focus-ring"
                  aria-label={`Abrir ruta en Google Maps para ${activeSede.name}`}
                >
                  <Navigation className="w-6 h-6 fill-black text-black" />
                  <span>CÓMO LLEGAR (GOOGLE MAPS)</span>
                  <ExternalLink className="w-4 h-4 text-black" />
                </a>

                <div className="flex items-center justify-between text-xs text-zinc-400 font-inter px-1">
                  <span>Tel / WhatsApp: <strong className="text-white">{activeSede.phoneFormatted}</strong></span>
                  <a
                    href={activeSede.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFE500] hover:underline font-mono font-bold"
                  >
                    Consultar por WhatsApp &gt;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Embed Frame */}
            <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[420px] relative bg-zinc-900 flex flex-col">
              <iframe
                key={activeSede.id}
                title={`Mapa de Ubicación ${activeSede.name}`}
                src={activeSede.googleMapsEmbedUrl}
                className="w-full h-full border-0 filter grayscale-[15%] invert-[90%] hue-rotate-[180deg] contrast-125 flex-1"
                loading="lazy"
                allowFullScreen
              />
              
              {/* Map Floating Location Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/85 backdrop-blur-md p-3.5 rounded-2xl border border-zinc-700 text-xs text-zinc-200 flex items-center gap-3 shadow-2xl">
                <MapPin className="w-5 h-5 text-[#FFE500] shrink-0" />
                <div>
                  <span className="font-bebas text-base text-white block">{activeSede.shortName}</span>
                  <span className="text-[11px] text-zinc-400">{activeSede.addressShort}</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Quick 2-Sede Summary Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
          {GYM_LOCATIONS.map((sede) => (
            <div
              key={sede.id}
              onClick={() => setSelectedSedeId(sede.id as any)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                selectedSedeId === sede.id
                  ? 'bg-zinc-900 border-[#FFE500] shadow-xl shadow-[#FFE500]/10'
                  : 'bg-zinc-950/70 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase font-bold text-[#FFE500] bg-[#FFE500]/10 px-2.5 py-1 rounded-md border border-[#FFE500]/20">
                  {sede.city} • {sede.department}
                </span>
                {sede.isMain && (
                  <span className="text-[10px] font-mono uppercase text-zinc-400">Sede Principal</span>
                )}
              </div>
              <h4 className="font-bebas text-2xl text-white mb-1">{sede.name}</h4>
              <p className="text-xs text-zinc-400 font-inter mb-4">{sede.address}</p>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300">{sede.tagline}</span>
                <span className="text-[#FFE500] font-bold flex items-center gap-1">
                  Ver en mapa →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
