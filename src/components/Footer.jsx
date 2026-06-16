import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Footer({ language, translations }) {
  const t = translations[language].footer;

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and About Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="IT Park Khorezm Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-650 text-slate-600 mt-4 leading-relaxed">
              {t.brandDesc}
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://t.me/xorazm_it_park"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-itpark-dark hover:border-itpark/40 transition-all shadow-xs"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.46c.538-.204 1.006.12 1.006.918s-.072 1.344-.136 1.482z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/itpark_xorazm_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-itpark-dark hover:border-itpark/40 transition-all shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#courses" className="text-slate-500 hover:text-itpark-dark transition-colors">{translations[language].header.navCourses}</a>
              </li>
              <li>
                <a href="#mentors" className="text-slate-500 hover:text-itpark-dark transition-colors">{translations[language].header.navMentors}</a>
              </li>
              <li>
                <a href="#about" className="text-slate-500 hover:text-itpark-dark transition-colors">{translations[language].header.navAbout}</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-500 hover:text-itpark-dark transition-colors">{translations[language].header.navContact}</a>
              </li>
            </ul>
          </div>

          {/* Government Initiatives */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">{t.governmentLinks}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://lex.uz/uz/docs/-5030957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-itpark-dark transition-colors block"
                >
                  «Raqamli O'zbekiston — 2030»
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-500 hover:text-itpark-dark transition-colors block">
                  {t.legalInfo}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-itpark-dark transition-colors block">
                  {t.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">{t.contacts}</h4>
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-itpark-dark shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-600">
                  {language === 'uz' 
                    ? "Xorazm viloyati, Urganch shahri, Pahlavon Mahmud ko'chasi, 6-uy" 
                    : "Хорезмская область, город Ургенч, улица Пахлавана Махмуда, дом 6"}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-itpark-dark shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+998990531199" className="hover:text-itpark-dark transition-colors text-slate-655 text-slate-600">+998 99 053-11-99</a>
                  <a href="tel:+998931501199" className="hover:text-itpark-dark transition-colors text-slate-655 text-slate-600">+998 93 150-11-99</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-200 my-8" />

        {/* Copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IT Park Xorazm Filiali. Barcha huquqlar himoyalangan.</p>
          <p className="mt-2 sm:mt-0">{t.madeWith} ❤️</p>
        </div>
      </div>
    </footer>
  );
}
