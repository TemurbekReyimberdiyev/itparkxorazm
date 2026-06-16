import React from 'react';
import { ArrowRight, BookOpen, Award, Users, CheckCircle } from 'lucide-react';

export default function Hero({ language, translations }) {
  const t = translations[language].hero;

  const stats = [
    { icon: <BookOpen className="w-5 h-5 text-itpark-dark" />, num: "15+", label: t.statCourses },
    { icon: <Users className="w-5 h-5 text-itpark-dark" />, num: "7", label: t.statMentors },
    { icon: <CheckCircle className="w-5 h-5 text-itpark-dark" />, num: "100%", label: t.statQuality },
    { icon: <Award className="w-5 h-5 text-itpark-dark" />, num: "2", label: t.statCertificates }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-white">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-itpark/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-itpark/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-itpark/10 border border-itpark/20 rounded-full px-4 py-1.5 text-xs font-semibold text-itpark-dark mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-itpark rounded-full animate-pulse"></span>
              <span>{t.tagline}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block text-slate-900">{t.titleStart}</span>
              <span className="block text-itpark-dark mt-1">{t.titleEnd}</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-655 text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-itpark hover:bg-itpark-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-itpark/10 hover:shadow-itpark/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>{t.btnPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#courses"
                className="w-full sm:w-auto text-center bg-slate-100 border border-slate-200 hover:border-slate-300 hover:bg-slate-200/50 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                {t.btnSecondary}
              </a>
            </div>

            {/* Quote block inspired by original website */}
            <div className="pt-8 border-t border-slate-100 max-w-xl mx-auto lg:mx-0 text-left">
              <p className="text-xs italic text-slate-500 mb-1">
                "Har bir darajadagi rahbarlar raqamlashtirish masalasini kundalik vazifasi sifatida belgilab olib, uni tubdan, asoslaridan boshlab chuqur o'rganishi zarur"
              </p>
              <p className="text-xs font-bold text-slate-700">— Shavkat Mirziyoyev</p>
            </div>

          </div>

          {/* Graphical/Image Section */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="relative w-full max-w-lg h-[400px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl flex items-center justify-center bg-slate-100 group">
              
              {/* Background Building Image */}
              <img 
                src="/itpark-building.jpg" 
                alt="IT Park Xorazm Building" 
                className="absolute inset-0 w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-black/10" />
              
              {/* Kichik dumaloq active card (Small rounded active indicator in the corner) */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-3.5 py-1.5 flex items-center space-x-2 shadow-lg z-10 select-none animate-pulse">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-700 font-bold">Active</span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center"
            >
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{item.num}</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
