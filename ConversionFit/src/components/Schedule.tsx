import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Users } from 'lucide-react';
import { WEEKLY_SCHEDULE, GYM_INFO } from '../data/gymData';

export const Schedule: React.FC = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  const activeDaySchedule = WEEKLY_SCHEDULE[selectedDayIdx];

  return (
    <section id="horarios" className="py-24 bg-[#09090b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <Clock className="w-4 h-4 text-[#FFE500]" />
            HORARIOS DE ATENCIÓN & EVALUACIONES
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            ENTRENA EN EL HORARIO QUE <span className="text-[#FFE500]">MEJOR SE ADAPTE A TI</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base text-balance">
            Abrimos desde las 5:00 AM para que entrenes antes de tu jornada laboral o estudio en Valledupar.
          </p>
        </div>

        {/* Operating Hours Summary Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-3xl border border-zinc-800 text-center">
            <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase block mb-1">LUNES A VIERNES</span>
            <span className="font-bebas text-3xl sm:text-4xl text-white block">{GYM_INFO.hours.weekdays}</span>
            <span className="text-xs text-zinc-400 font-inter mt-1 block">Jornada continua con entrenadores en sala</span>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-zinc-800 text-center">
            <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase block mb-1">SÁBADOS</span>
            <span className="font-bebas text-3xl sm:text-4xl text-white block">{GYM_INFO.hours.saturdays}</span>
            <span className="text-xs text-zinc-400 font-inter mt-1 block">Evaluaciones antropométricas y retos</span>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-zinc-800 text-center">
            <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase block mb-1">DOMINGOS Y FESTIVOS</span>
            <span className="font-bebas text-3xl sm:text-4xl text-white block">{GYM_INFO.hours.sundays}</span>
            <span className="text-xs text-zinc-400 font-inter mt-1 block">Entrenamiento libre y recuperación</span>
          </div>
        </div>

        {/* Day Selector Tabs for Guided Classes */}
        <div className="glass-card p-8 rounded-3xl border border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800 mb-8">
            <div className="text-left">
              <h3 className="font-bebas text-3xl text-white">SESIONES DIRIGIDAS Y EVALUACIONES</h3>
              <p className="text-xs text-zinc-400 font-inter">Selecciona el día para ver los bloques disponibles</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {WEEKLY_SCHEDULE.map((item, idx) => (
                <button
                  key={item.day}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`px-4 py-2 rounded-xl font-bebas text-lg tracking-wider transition-all ${
                    selectedDayIdx === idx
                      ? 'bg-[#FFE500] text-black font-black shadow-lg shadow-[#FFE500]/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.day}
                </button>
              ))}
            </div>
          </div>

          {/* Timetable Session Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {activeDaySchedule.sessions.map((session, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-[#FFE500]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bebas text-2xl text-[#FFE500] tracking-wide flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {session.time}
                    </span>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {session.intensity}
                    </span>
                  </div>

                  <h4 className="font-bebas text-2xl text-white mb-1">{session.className}</h4>
                  <p className="text-xs text-zinc-400 font-inter mb-4">Zona: <strong className="text-zinc-200">{session.area}</strong></p>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400 font-inter">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#FFE500]" />
                    Coach: <strong className="text-zinc-200">{session.trainer}</strong>
                  </span>
                  <span className="text-emerald-400 font-medium">Incluido</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
