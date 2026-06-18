import React, { useState } from 'react';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';

export default function Header({ language, setLanguage, translations }) {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  const t = translations[language].header;

  const navLinks = [
    { name: t.navCourses, href: '#courses' },
    { name: t.navMentors, href: '#mentors' },
    { name: t.navAbout, href: '#about' },
    { name: t.navContact, href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }} 
            className="flex items-center group"
          >
            <img 
              src="/logo.png" 
              alt="IT Park Xorazm Logo (itparkxorazm)" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-slate-600 hover:text-itpark transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center space-x-1.5 text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2"
              >
                <Globe className="w-4 h-4 text-itpark" />
                <span>{language === 'uz' ? "O'zbekcha" : "Русский"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdown ? 'rotate-180' : ''}`} />
              </button>

              {langDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-200 rounded-lg shadow-xl py-1 z-50">
                  <button
                    onClick={() => { setLanguage('uz'); setLangDropdown(false); }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors duration-150 ${language === 'uz' ? 'text-itpark bg-slate-50' : 'text-slate-600'}`}
                  >
                    O'zbekcha
                  </button>
                  <button
                    onClick={() => { setLanguage('ru'); setLangDropdown(false); }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors duration-150 ${language === 'ru' ? 'text-itpark bg-slate-50' : 'text-slate-600'}`}
                  >
                    Русский
                  </button>
                </div>
              )}
            </div>

            {/* Direct Calls */}
            <a
              href="tel:+998990531199"
              className="flex items-center space-x-2 bg-slate-100 border border-slate-200 hover:border-itpark/50 hover:bg-slate-200/60 px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-itpark" />
              <span>+998 99 053-11-99</span>
            </a>

            <a
              href="#contact"
              className="bg-itpark hover:bg-itpark-dark text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-itpark/10 hover:shadow-itpark/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.btnRegister}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language Switcher Mobile */}
            <button
              onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-lg"
            >
              <span className="text-xs font-bold uppercase">{language === 'uz' ? 'ru' : 'uz'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-lg"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-slate-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-100 my-2" />
            <div className="space-y-3 pt-2">
              <a
                href="tel:+998990531199"
                className="flex items-center space-x-3 px-3 py-2.5 rounded-xl bg-slate-150/40 text-slate-700 border border-slate-200"
              >
                <Phone className="w-4 h-4 text-itpark" />
                <span className="text-sm font-semibold">+998 99 053-11-99</span>
              </a>
              <a
                href="tel:+998931501199"
                className="flex items-center space-x-3 px-3 py-2.5 rounded-xl bg-slate-150/40 text-slate-700 border border-slate-200"
              >
                <Phone className="w-4 h-4 text-itpark" />
                <span className="text-sm font-semibold">+998 93 150-11-99</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-itpark hover:bg-itpark-dark text-white font-bold py-3 rounded-xl shadow-lg transition-all"
              >
                {t.btnRegister}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
