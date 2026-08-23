import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Smartphone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface SeoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoModal: React.FC<SeoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'meta' | 'schema' | 'robots' | 'sitemap' | 'ranking'>('ranking');

  if (!isOpen) return null;

  const robotsTxtContent = `User-agent: *
Allow: /
Sitemap: https://conversionfit.co/sitemap.xml
Host: https://conversionfit.co`;

  const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://conversionfit.co/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://conversionfit.co/#descarga-app</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://conversionfit.co/#planes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-left"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#FFE500] hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FFE500]/10 text-[#FFE500] border border-[#FFE500]/30 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#FFE500]" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-[#FFE500] tracking-widest block">Google Search Console & SEO #1 Strategy</span>
              <h3 className="font-bebas text-3xl text-white">ESTRATEGIA DE POSICIONAMIENTO GOOGLE VALLEDUPAR</h3>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="font-bebas text-3xl text-[#FFE500] block">#1</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase">Target "Conversion Fit"</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="font-bebas text-3xl text-[#FFE500] block">Top 3</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase">"Gimnasios Valledupar"</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="font-bebas text-3xl text-[#FFE500] block">100%</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase">Indexable & Schemas</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="font-bebas text-3xl text-[#FFE500] block">App</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase">Play Store & iOS</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('ranking')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider ${
                activeTab === 'ranking' ? 'bg-[#FFE500] text-black' : 'bg-zinc-950 text-zinc-400'
              }`}
            >
              GUÍA DE POSICIONAMIENTO
            </button>
            <button
              onClick={() => setActiveTab('meta')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider ${
                activeTab === 'meta' ? 'bg-[#FFE500] text-black' : 'bg-zinc-950 text-zinc-400'
              }`}
            >
              META TAGS
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider ${
                activeTab === 'schema' ? 'bg-[#FFE500] text-black' : 'bg-zinc-950 text-zinc-400'
              }`}
            >
              SCHEMA JSON-LD
            </button>
            <button
              onClick={() => setActiveTab('robots')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider ${
                activeTab === 'robots' ? 'bg-[#FFE500] text-black' : 'bg-zinc-950 text-zinc-400'
              }`}
            >
              ROBOTS.TXT
            </button>
            <button
              onClick={() => setActiveTab('sitemap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider ${
                activeTab === 'sitemap' ? 'bg-[#FFE500] text-black' : 'bg-zinc-950 text-zinc-400'
              }`}
            >
              SITEMAP.XML
            </button>
          </div>

          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300 max-h-60 overflow-y-auto">
            {activeTab === 'ranking' && (
              <div className="space-y-3 font-inter text-xs text-zinc-300">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <strong className="text-[#FFE500] block mb-1">1. Dominio & Verificación Google Search Console:</strong>
                  Vincular el dominio oficial (ej. conversionfit.co) y enviar el sitemap.xml para indexación inmediata.
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <strong className="text-[#FFE500] block mb-1">2. Ficha Google Mi Negocio (Google Maps):</strong>
                  Crear el perfil exacto "Conversion Fit Valledupar" con la dirección Carrera 11 #9-184, fotos de las 3 plantas, horarios y enlace a esta web y a las Apps.
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <strong className="text-[#FFE500] block mb-1">3. Vínculos a Apps Oficiales:</strong>
                  Tener enlaces directos hacia Google Play Store y App Store incrementa el Domain Authority y la confianza en los algoritmos de Google.
                </div>
              </div>
            )}

            {activeTab === 'meta' && (
              <div className="space-y-2">
                <p><span className="text-[#FFE500]">Title:</span> Conversion Fit | Gimnasio 3 Plantas en Valledupar - App Oficial</p>
                <p><span className="text-[#FFE500]">Description:</span> Gimnasio de 3 plantas en Valledupar: Musculación, Cardio/Clases y CrossFit. Preinscríbete por $80.000 en Google Play Store y App Store. Instagram: @conversion_fit.co</p>
                <p><span className="text-[#FFE500]">Keywords:</span> Conversion fit, gimnasio valledupar, crossfit valledupar, gym valledupar, recomposicion corporal, app conversion fit</p>
                <p><span className="text-[#FFE500]">Geo Coordinates:</span> 10.4742, -73.2436 (Valledupar, Cesar, CO)</p>
              </div>
            )}

            {activeTab === 'schema' && (
              <pre className="text-[11px] text-zinc-300 whitespace-pre-wrap">
                {`{
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "name": "Conversion Fit",
  "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  "url": "https://conversionfit.co",
  "telephone": "+573152932226",
  "priceRange": "$80.000 COP",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrera 11 #9-184",
    "addressLocality": "Valledupar",
    "addressRegion": "Cesar",
    "addressCountry": "CO"
  },
  "sameAs": [
    "https://www.instagram.com/conversion_fit.co/",
    "https://play.google.com/store/apps/details?id=com.quirasoftware.conversionfit&hl=es_EC",
    "https://apps.apple.com/co/app/conversion-fit/id6578075371"
  ]
}`}
              </pre>
            )}

            {activeTab === 'robots' && (
              <pre className="text-[11px] text-zinc-300 whitespace-pre-wrap">{robotsTxtContent}</pre>
            )}

            {activeTab === 'sitemap' && (
              <pre className="text-[11px] text-zinc-300 whitespace-pre-wrap">{sitemapXmlContent}</pre>
            )}
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-zinc-800 hover:bg-[#FFE500] hover:text-black text-white font-bebas text-base transition-colors font-black"
            >
              CERRAR PANEL
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
