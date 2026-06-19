import React from 'react';
import { MapPin, Phone, Clock, Globe } from 'lucide-react';

export default function About({ language, translations }) {
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-white relative">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[21.875rem] h-[21.875rem] bg-itpark/5 rounded-full blur-[5.625rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.sectionTitle} <span className="text-itpark-dark">{t.sectionTitleColor}</span>
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            {t.sectionSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Details / Text */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{t.cardTitle}</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.cardText}
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-150 text-itpark-dark rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">{t.labelAddress}</h4>
                  <p className="text-base text-slate-800 leading-relaxed">
                    {language === 'uz' 
                      ? "Xorazm viloyati, Urganch shahri, Pahlavon Mahmud ko'chasi, 6-uy" 
                      : "Хорезмская область, город Ургенч, улица Пахлавана Махмуда, дом 6"}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-150 text-itpark-dark rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">{t.labelPhone}</h4>
                  <div className="flex flex-col text-base text-slate-800 space-y-0.5">
                    <a href="tel:+998990531199" className="hover:text-itpark-dark transition-colors">+998 99 053-11-99</a>
                    <a href="tel:+998931501199" className="hover:text-itpark-dark transition-colors">+998 93 150-11-99</a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-150 text-itpark-dark rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">{t.labelHours}</h4>
                  <p className="text-base text-slate-800 leading-relaxed">
                    Dushanba - Shanba: 09:00 - 20:00
                  </p>
                </div>
              </div>

              {/* Social Networks */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-150 text-itpark-dark rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">{language === 'uz' ? 'Ijtimoiy tarmoqlarimiz' : 'Мы в соцсетях'}</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://t.me/xorazm_it_park"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-slate-50 border border-slate-200 hover:border-itpark/40 hover:bg-slate-100 hover:text-slate-900 rounded-xl text-xs font-semibold text-slate-700 transition-colors flex items-center space-x-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#0088cc]" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.46c.538-.204 1.006.12 1.006.918s-.072 1.344-.136 1.482z" />
                      </svg>
                      <span>Telegram</span>
                    </a>
                    <a
                      href="https://www.instagram.com/itpark_xorazm_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-slate-50 border border-slate-200 hover:border-itpark/40 hover:bg-slate-100 hover:text-slate-900 rounded-xl text-xs font-semibold text-slate-700 transition-colors flex items-center space-x-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#e1306c]" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Map Frame */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[25rem] bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
              
              {/* Google Maps Embed pointing directly to Pahlavon Mahmud 6, Urgench */}
              <iframe
                title="IT Park Urgench Location Map"
                src="https://maps.google.com/maps?q=41.558419,60.621838&z=18&t=m&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
