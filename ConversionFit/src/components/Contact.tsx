import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Instagram, Smartphone, Building2 } from 'lucide-react';
import { GYM_INFO, GYM_LOCATIONS, PLANS } from '../data/gymData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    selectedSede: 'Sede Principal Valledupar (Cra 11 #9-184)',
    selectedPlan: 'PLAN MENSUAL CONVERSIÓN FIT',
    goal: 'Perder Grasa y Tonificar (Recomposición)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[#09090b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#FFE500] font-mono text-xs font-bold tracking-wider mb-3">
            <Send className="w-4 h-4 text-[#FFE500]" />
            UBICACIÓN & CONTACTO VALLEDUPAR Y FONSECA
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-white uppercase mb-4">
            EMPIEZA TU <span className="text-[#FFE500]">RECOMPOSICIÓN CORPORAL</span>
          </h2>
          <p className="text-zinc-300 font-inter text-sm sm:text-base text-balance">
            Preinscríbete desde nuestra App oficial por $80.000 COP o comunícate directamente con nuestro equipo en <strong>Valledupar</strong> o <strong>Fonseca</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Direct Contact Info Card with Both Sedes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-zinc-800/90 space-y-6">
              <h3 className="font-bebas text-3xl text-white">INFORMACIÓN DE CONTACTO</h3>
              
              <div className="space-y-4">
                {/* Sede 1 */}
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FFE500]" />
                      SEDE VALLEDUPAR (PRINCIPAL)
                    </span>
                    <a
                      href={GYM_LOCATIONS[0].googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#FFE500] hover:underline"
                    >
                      Ver Mapa &gt;
                    </a>
                  </div>
                  <p className="font-inter text-sm text-white">{GYM_LOCATIONS[0].address}</p>
                  <p className="font-inter text-xs text-zinc-400">3 Plantas Especializadas de Entrenamiento</p>
                </div>

                {/* Sede 2 */}
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FFE500]" />
                      SEDE FONSECA (LA GUAJIRA)
                    </span>
                    <a
                      href={GYM_LOCATIONS[1].googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#FFE500] hover:underline"
                    >
                      Ver Mapa &gt;
                    </a>
                  </div>
                  <p className="font-inter text-sm text-white">{GYM_LOCATIONS[1].address}</p>
                  <p className="font-inter text-xs text-zinc-400">Musculación, Fuerza y Acondicionamiento</p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE500]/10 border border-[#FFE500]/30 flex items-center justify-center text-[#FFE500] shrink-0">
                    <Phone className="w-5 h-5 text-[#FFE500]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase block">WHATSAPP DIRECTO</span>
                    <a href={GYM_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-inter text-sm text-white hover:text-[#FFE500] font-medium block">
                      {GYM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE500]/10 border border-[#FFE500]/30 flex items-center justify-center text-[#FFE500] shrink-0">
                    <Instagram className="w-5 h-5 text-[#FFE500]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase block">INSTAGRAM OFICIAL</span>
                    <a href={GYM_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="font-inter text-sm text-white hover:text-[#FFE500] font-medium block">
                      @conversion_fit.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE500]/10 border border-[#FFE500]/30 flex items-center justify-center text-[#FFE500] shrink-0">
                    <Clock className="w-5 h-5 text-[#FFE500]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#FFE500] tracking-wider uppercase block">HORARIO AMBAS SEDES</span>
                    <span className="font-inter text-xs text-zinc-300 block">L-V: {GYM_INFO.hours.weekdays}</span>
                    <span className="font-inter text-xs text-zinc-300 block">Sábados: {GYM_INFO.hours.saturdays}</span>
                    <span className="font-inter text-xs text-zinc-300 block">Domingos: {GYM_INFO.hours.sundays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* App quick download promo */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-[#FFE500]/30">
              <div className="flex items-center gap-3 mb-2">
                <Smartphone className="w-6 h-6 text-[#FFE500]" />
                <h4 className="font-bebas text-2xl text-white">APP CONVERSION FIT</h4>
              </div>
              <p className="text-xs text-zinc-300 font-inter mb-4">
                Disponible en Google Play Store y Apple App Store para tu preinscripción a precio especial en cualquiera de nuestras sedes.
              </p>
              <div className="flex gap-2">
                <a
                  href={GYM_INFO.appStoreLinks.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-center text-xs font-mono font-bold text-white border border-zinc-700"
                >
                  Play Store
                </a>
                <a
                  href={GYM_INFO.appStoreLinks.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-center text-xs font-mono font-bold text-white border border-zinc-700"
                >
                  App Store
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFE500]/20 text-[#FFE500] border border-[#FFE500]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#FFE500]" />
                  </div>
                  <h3 className="font-bebas text-3xl text-white">¡SOLICITUD RECIBIDA CON ÉXITO!</h3>
                  <p className="text-sm text-zinc-300 font-inter max-w-md mx-auto">
                    Gracias por comunicarte con Conversion Fit. Nos contactaremos al número <strong className="text-white">{formData.phone}</strong> para coordinar tu ingreso en <strong className="text-[#FFE500]">{formData.selectedSede}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-[#FFE500] hover:text-black text-white font-bebas text-lg transition-colors font-black"
                  >
                    ENVIAR OTRA CONSULTA
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <h3 className="font-bebas text-3xl text-white border-b border-zinc-800 pb-4">FORMULARIO DE CONTACTO</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej: Andrés Morales"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-[#FFE500] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Teléfono / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej: 315 293 2226"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-[#FFE500] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Sede de Preferencia *</label>
                      <select
                        value={formData.selectedSede}
                        onChange={(e) => setFormData({ ...formData, selectedSede: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-[#FFE500] focus:outline-none transition-colors font-medium"
                      >
                        <option value="Sede Principal Valledupar (Cra 11 #9-184)" className="bg-zinc-900 text-white">
                          Sede Valledupar (Cra 11 #9-184 • 3 Plantas)
                        </option>
                        <option value="Sede Fonseca (Calle 11 #15-17)" className="bg-zinc-900 text-white">
                          Sede Fonseca (La Guajira • Cl 11 #15-17)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Programa de Interés</label>
                      <select
                        value={formData.selectedPlan}
                        onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-[#FFE500] focus:outline-none transition-colors"
                      >
                        {PLANS.map((p) => (
                          <option key={p.id} value={p.name} className="bg-zinc-900 text-white">
                            {p.name} ({p.priceCOP})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Correo Electrónico</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-[#FFE500] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Tu Objetivo Principal</label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-[#FFE500] focus:outline-none transition-colors"
                      >
                        <option className="bg-zinc-900">Perder Grasa y Tonificar (Recomposición)</option>
                        <option className="bg-zinc-900">Aumento de Masa Muscular Magra</option>
                        <option className="bg-zinc-900">Preparación Física o Deporte</option>
                        <option className="bg-zinc-900">Mejorar Salud y Estilo de Vida</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-zinc-300 uppercase mb-1.5">Mensaje o Dudas</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Indícanos si tienes alguna duda o deseas agendar tu visita a la sede..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-[#FFE500] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas text-xl tracking-wider shadow-xl transition-all font-black"
                  >
                    SOLICITAR INFORMACIÓN
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
