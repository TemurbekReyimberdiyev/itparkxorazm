import React from 'react';
import { GraduationCap, Globe, Briefcase, Trophy, ArrowRight } from 'lucide-react';

export default function Achievements({ language, translations }) {
  const t = translations[language].achievements;

  const stats = [
    {
      id: 'graduates',
      val: '2000+',
      label: t.graduates,
      icon: <GraduationCap className="w-6 h-6 text-itpark-dark" />,
      bgColor: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'certificates',
      val: '200+',
      label: t.certificates,
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'employment',
      val: '70%',
      label: t.employment,
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      bgColor: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      id: 'ranking',
      val: 'TOP-5',
      label: t.ranking,
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
      bgColor: 'bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background glow decorator */}
      <div className="absolute top-1/4 right-0 w-[18.75rem] h-[18.75rem] bg-itpark/5 rounded-full blur-[6.25rem] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[18.75rem] h-[18.75rem] bg-blue-500/5 rounded-full blur-[6.25rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-itpark/10 border border-itpark/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-itpark-dark uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            <span>{language === 'uz' ? 'Yutuqlarimiz' : 'Достижения'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.sectionTitle} <span className="text-itpark-dark">{t.sectionTitleColor}</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="glass-card bg-[#F0F2F5] hover:bg-[#e7e9ec] rounded-3xl p-8 border border-slate-200 group flex flex-col justify-between transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
            >
              <div>
                {/* Icon Wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-110 ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                
                {/* Value */}
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 block tracking-tight mb-3">
                  {stat.val}
                </span>

                {/* Label */}
                <p className="text-slate-600 text-sm font-semibold leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info card */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.note}
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://t.me/digitaledu_uz/3239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-sm font-bold border border-slate-200 px-5 py-3 rounded-xl shadow-xs transition-all"
            >
              <span>{t.source}</span>
              <ArrowRight className="w-4 h-4 text-itpark-dark" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
