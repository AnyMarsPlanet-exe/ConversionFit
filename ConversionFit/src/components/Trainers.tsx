import React from 'react';
import { motion } from 'motion/react';
import { Award, UserCheck, Calendar, CheckCircle2 } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import { OptimizedImage } from './OptimizedImage';

interface TrainersProps {
  onOpenInscription: (planName?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = () => {
  return (
    <section id="entrenadores" className="py-24 bg-[#09090b] relative border-t border-zinc-900" aria-label="Entrenadores y Coaches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <UserCheck className="w-4 h-4 text-[#FFE500]" />
            COACHES Y ESPECIALISTAS DE CONVERSIÓN
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            ACOMPAÑAMIENTO <span className="text-[#FFE500]">PROFESIONAL 1 A 1</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base text-balance mb-2">
            En Conversion Fit Valledupar estarás guiado en nuestras 3 plantas por entrenadores capacitados en musculación, cardio y CrossFit (contamos con entrenadores en sala, no con servicio de nutricionista).
          </p>
          <div className="inline-block px-4 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="text-[#FFE500]">ⓘ NOTA:</span> Perfiles y fotos presentados en calidad de referencia profesional. Próximamente presentaremos el equipo definitivo de coaches de nuestra sede Valledupar.
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-zinc-800/80 flex flex-col justify-between group"
            >
              {/* Photo Area */}
              <div className="relative h-80 w-full overflow-hidden bg-zinc-950">
                <OptimizedImage
                  src={trainer.photo}
                  alt={`Coach ${trainer.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-90" />
                
                {/* Experience Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700 text-xs font-mono font-bold tracking-wide text-[#FFE500]">
                  {trainer.experience}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FFE500] block mb-1">
                    {trainer.role}
                  </span>
                  <h3 className="font-bebas text-2xl text-white tracking-wide mb-1">{trainer.name}</h3>
                  <p className="text-xs text-zinc-300 font-inter mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>{trainer.specialty}</span>
                  </p>
                  
                  <p className="text-xs text-zinc-400 font-inter leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Certifications List */}
                  <div className="space-y-1.5 mb-6">
                    {trainer.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE500] shrink-0" />
                        <span className="line-clamp-1">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/573152932226?text=Hola,%20quisiera%20agendar%20mi%20evaluaci%C3%B3n%20con%20el%20coach%20${encodeURIComponent(trainer.name)}%20de%20Conversion%20Fit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-[#FFE500] hover:text-black border border-zinc-700 hover:border-[#FFE500] text-white font-bebas text-lg tracking-wider transition-all duration-300 flex items-center justify-center gap-2 font-black focus-ring"
                  aria-label={`Agendar valoración con el coach ${trainer.name} en WhatsApp`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>AGENDAR VALORACIÓN</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
