import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, CheckCircle2, Phone } from 'lucide-react';
import { GYM_INFO, PLANS } from '../data/gymData';
import { ConversionFitLogo } from './ConversionFitLogo';

interface InscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanName?: string;
}

export const InscriptionModal: React.FC<InscriptionModalProps> = ({
  isOpen,
  onClose,
  defaultPlanName = 'PLAN MENSUAL CONVERSIÓN FIT'
}) => {
  const [selectedPlan, setSelectedPlan] = useState(defaultPlanName);
  const [selectedSede, setSelectedSede] = useState('Valledupar (3 Plantas)');
  const [activeTab, setActiveTab] = useState<'app' | 'direct'>('app');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitDirect = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hola Conversion Fit (${selectedSede}), mi nombre es ${name || 'un nuevo usuario'} (${phone || 'sin teléfono'}) y deseo ayuda para mi preinscripción en la App al ${selectedPlan}.`;
    window.open(`https://wa.me/573152932226?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inscription-modal-title"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full bg-zinc-950 border-2 border-[#FFE500]/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-left my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 hover:bg-[#FFE500] hover:text-black text-white flex items-center justify-center transition-colors focus-ring"
            aria-label="Cerrar ventana de preinscripción"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Brand */}
          <div className="mb-6 border-b border-zinc-800 pb-5">
            <ConversionFitLogo size="sm" showSubtitle={false} />
            <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
              <span id="inscription-modal-title" className="text-xs font-mono uppercase font-bold text-[#FFE500] tracking-widest flex items-center gap-1.5">
                <Smartphone className="w-4 h-4" /> MÓDULO DE PREINSCRIPCIÓN OFICIAL
              </span>
              <span className="text-xs font-mono text-zinc-400">SEDES: VALLEDUPAR & FONSECA</span>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6" role="tablist" aria-label="Método de preinscripción">
            <button
              role="tab"
              aria-selected={activeTab === 'app'}
              onClick={() => setActiveTab('app')}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bebas tracking-wider transition-all flex items-center justify-center gap-2 focus-ring ${
                activeTab === 'app'
                  ? 'bg-[#FFE500] text-black font-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>PREINSCRIPCIÓN EN LA APP (RECOMENDADO)</span>
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'direct'}
              onClick={() => setActiveTab('direct')}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bebas tracking-wider transition-all flex items-center justify-center gap-2 focus-ring ${
                activeTab === 'direct'
                  ? 'bg-zinc-800 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>AYUDA POR WHATSAPP</span>
            </button>
          </div>

          {/* TAB 1: Mobile App Pre-inscription */}
          {activeTab === 'app' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-2xl bg-[#FFE500]/10 border border-[#FFE500]/30 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-[#FFE500] text-black flex items-center justify-center font-bold shrink-0 mt-0.5" aria-hidden="true">
                  ✓
                </div>
                <div>
                  <h4 className="font-bebas text-lg text-white tracking-wide">
                    PREINSCRÍBETE DESDE LA APP OFICIAL
                  </h4>
                  <p className="text-xs text-zinc-300 font-inter leading-relaxed mt-0.5">
                    Todas las reservas de cupo para nuestra sede de 3 plantas en Valledupar por <strong>$80.000 COP al mes</strong> se gestionan directamente a través de la aplicación Conversion Fit.
                  </p>
                </div>
              </div>

              {/* 3 Step Instruction Guide */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase text-[#FFE500] font-bold block">
                  PASOS PARA PREINSCRIBIRTE:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <span className="w-6 h-6 rounded-full bg-[#FFE500] text-black font-bold flex items-center justify-center font-mono text-xs mb-2">1</span>
                    <h5 className="font-bebas text-base text-white">DESCARGA LA APP</h5>
                    <p className="text-[11px] text-zinc-400 font-inter mt-1">
                      Disponible gratis en Google Play y App Store.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <span className="w-6 h-6 rounded-full bg-[#FFE500] text-black font-bold flex items-center justify-center font-mono text-xs mb-2">2</span>
                    <h5 className="font-bebas text-base text-white">CREA TU CUENTA</h5>
                    <p className="text-[11px] text-zinc-400 font-inter mt-1">
                      Ingresa tu nombre y número de celular.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <span className="w-6 h-6 rounded-full bg-[#FFE500] text-black font-bold flex items-center justify-center font-mono text-xs mb-2">3</span>
                    <h5 className="font-bebas text-base text-white">CONFIRMA CUPO</h5>
                    <p className="text-[11px] text-zinc-400 font-inter mt-1">
                      Selecciona tu plan de $80.000 y queda listo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Buttons Row */}
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 font-bold block mb-2.5">
                  SELECCIONA TU TIENDA DE APLICACIONES:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Google Play Button */}
                  <a
                    href={GYM_INFO.apps.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black border-2 border-zinc-700 hover:border-[#FFE500] text-white transition-all flex items-center gap-3.5 group shadow-lg focus-ring"
                    aria-label="Descargar Conversion Fit en Google Play Store"
                  >
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.03 2.03 0 0 1-.61-.954V2.768c0-.36.223-.71.61-.954z" fill="#00D3FF" />
                      <path d="M17.158 8.636l-3.365 3.364 3.365 3.364 3.791-2.158c1.082-.616 1.082-1.756 0-2.372l-3.791-2.198z" fill="#FFCE00" />
                      <path d="M3.609 1.814l10.184 10.186 3.365-3.364L6.155.67C4.845-.075 3.609.68 3.609 1.814z" fill="#00F076" />
                      <path d="M13.793 12L3.609 22.186c0 1.134 1.236 1.889 2.546 1.144l11.003-6.966-3.365-3.364z" fill="#FF3A44" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block tracking-wider">DESCARGAR EN</span>
                      <span className="font-bebas text-2xl tracking-wide text-white group-hover:text-[#FFE500] transition-colors">GOOGLE PLAY</span>
                    </div>
                  </a>

                  {/* App Store Button */}
                  <a
                    href={GYM_INFO.apps.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-black border-2 border-zinc-700 hover:border-[#FFE500] text-white transition-all flex items-center gap-3.5 group shadow-lg focus-ring"
                    aria-label="Descargar Conversion Fit en Apple App Store"
                  >
                    <svg className="w-7 h-7 shrink-0 fill-white group-hover:fill-[#FFE500] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-1.97.6-2.6 1.34-.56.64-.99 1.7-0.87 2.72 1 .08 1.99-.49 2.55-1.19z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block tracking-wider">DESCARGAR EN EL</span>
                      <span className="font-bebas text-2xl tracking-wide text-white group-hover:text-[#FFE500] transition-colors">APP STORE</span>
                    </div>
                  </a>

                </div>
              </div>

              {/* What happens next */}
              <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                <span>¿Prefieres asistencia personalizada con tu preinscripción?</span>
                <button
                  onClick={() => setActiveTab('direct')}
                  className="text-[#FFE500] hover:underline font-mono font-bold focus-ring rounded"
                >
                  Escríbenos por WhatsApp &gt;
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: Direct WhatsApp Assistance */}
          {activeTab === 'direct' && (
            <div>
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFE500]/20 text-[#FFE500] border border-[#FFE500]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#FFE500]" />
                  </div>
                  <h4 className="font-bebas text-3xl text-white">¡DATOS LISTOS!</h4>
                  <p className="text-sm text-zinc-300 font-inter">
                    Haz clic en el botón verde para abrir el chat de WhatsApp con la sede Valledupar.
                  </p>

                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bebas text-2xl tracking-wider shadow-lg flex items-center justify-center gap-2 font-black focus-ring"
                  >
                    <Phone className="w-5 h-5 text-black" />
                    <span>ABRIR CHAT DE WHATSAPP</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitDirect} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Plan de Interés</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {PLANS.map((p) => (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => setSelectedPlan(p.name)}
                          className={`p-3 rounded-xl text-left border transition-all focus-ring ${
                            selectedPlan === p.name
                              ? 'bg-[#FFE500]/15 border-[#FFE500] text-white'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                        >
                          <span className="font-bebas text-sm block">{p.name}</span>
                          <span className="text-[11px] font-mono text-[#FFE500] font-bold">{p.priceCOP}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Sede a la que deseas asistir</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedSede('Sede Valledupar (Cra 11 #9-184)')}
                        className={`p-2.5 rounded-xl text-left border text-xs font-mono transition-all ${
                          selectedSede.includes('Valledupar')
                            ? 'bg-[#FFE500]/15 border-[#FFE500] text-white font-bold'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                      >
                        Valledupar (3 Plantas)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedSede('Sede Fonseca (La Guajira)')}
                        className={`p-2.5 rounded-xl text-left border text-xs font-mono transition-all ${
                          selectedSede.includes('Fonseca')
                            ? 'bg-[#FFE500]/15 border-[#FFE500] text-white font-bold'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                      >
                        Fonseca (La Guajira)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user-full-name" className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1">Tu Nombre Completo</label>
                    <input
                      id="user-full-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Carlos Mendoza"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="user-phone-number" className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1">Número de WhatsApp</label>
                    <input
                      id="user-phone-number"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej: 315 293 2226"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus-ring"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-xl tracking-wider shadow-xl font-black focus-ring"
                  >
                    CONTINUAR A WHATSAPP
                  </button>
                </form>
              )}
            </div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
