import React, { useState } from 'react';
import { Trophy, ArrowRight, Flame, Activity } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/gymData';
import { OptimizedImage } from './OptimizedImage';

interface ResultsProps {
  onOpenInscription: (planName?: string) => void;
}

export const Results: React.FC<ResultsProps> = ({ onOpenInscription }) => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const activeCase = TRANSFORMATIONS[selectedCase];

  return (
    <section id="resultados" className="py-24 bg-[#09090b] relative border-t border-zinc-900" aria-label="Resultados y Transformaciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <Trophy className="w-4 h-4 text-[#FFE500]" />
            TRANSFORMACIONES @CONVERSION_FIT.CO
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            RECOMPOSICIÓN CORPORAL <span className="text-[#FFE500]">REAL EN VALLEDUPAR</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base text-balance">
            Desliza el comparador para ver la evolución física real de personas como tú que confiaron en nuestro método de entrenamiento y alimentación.
          </p>
        </div>

        {/* Transformation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" role="tablist" aria-label="Seleccionar caso de transformación">
          {TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={selectedCase === idx}
              onClick={() => {
                setSelectedCase(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-3 rounded-xl font-bebas text-base tracking-wider transition-all duration-300 border focus-ring ${
                selectedCase === idx
                  ? 'bg-[#FFE500] text-black border-[#FFE500] font-black shadow-lg shadow-[#FFE500]/20'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              {item.name} ({item.timeframe.split(' ')[0]} {item.timeframe.split(' ')[1]})
            </button>
          ))}
        </div>

        {/* Transformation Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-card p-6 sm:p-10 rounded-3xl border border-zinc-800">
          
          {/* Interactive Before / After Image Splitter */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl select-none">
            {/* After Image (Background) */}
            <OptimizedImage
              src={activeCase.afterImage}
              alt={`${activeCase.name} Después`}
              className="absolute inset-0 w-full h-full object-cover filter contrast-105"
              wrapperClassName="absolute inset-0 w-full h-full"
            />
            <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-lg bg-[#FFE500] text-black font-bebas text-lg shadow-lg z-10 font-black" aria-hidden="true">
              DESPUÉS
            </div>

            {/* Before Image (Foreground Clipped) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <OptimizedImage
                src={activeCase.beforeImage}
                alt={`${activeCase.name} Antes`}
                className="absolute inset-0 w-full h-full object-cover filter contrast-90 grayscale-[30%]"
                wrapperClassName="absolute inset-0 w-full h-full"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white font-bebas text-lg border border-zinc-700 shadow-lg z-10" aria-hidden="true">
                ANTES
              </div>
            </div>

            {/* Drag Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
              aria-hidden="true"
            >
              <div className="w-9 h-9 rounded-full bg-[#FFE500] border-2 border-black text-black flex items-center justify-center shadow-2xl font-black text-xs">
                ↔
              </div>
            </div>

            {/* Slider Input overlay accessible */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 focus-ring"
              aria-label={`Comparar antes y después de la transformación de ${activeCase.name}`}
            />
          </div>

          {/* Transformation Stats & Narrative */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#FFE500] bg-[#FFE500]/10 px-3 py-1 rounded-md border border-[#FFE500]/30 inline-block mb-2">
                {activeCase.timeframe}
              </span>
              <h3 className="font-bebas text-4xl text-white tracking-wide">{activeCase.name}, {activeCase.age} años</h3>
            </div>

            {/* Key Metrics Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <span className="text-xs font-inter text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Flame className="w-4 h-4 text-[#FFE500]" />
                  Grasa Corporal
                </span>
                <span className="font-bebas text-3xl text-white">{activeCase.weightLoss}</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <span className="text-xs font-inter text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Masa Muscular
                </span>
                <span className="font-bebas text-3xl text-white">{activeCase.muscleGain}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 italic text-sm text-zinc-300 font-inter">
              "{activeCase.testimonial}"
            </div>

            {/* CTA */}
            <button
              onClick={() => onOpenInscription()}
              className="w-full py-4 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-xl tracking-wider shadow-xl flex items-center justify-center gap-2 font-black focus-ring"
            >
              <span>QUIERO MI PROPIA TRANSFORMACIÓN</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
