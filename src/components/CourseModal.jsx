import React from 'react';
import { X, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CourseModal({ course, language, onClose, onRegister }) {
  if (!course) return null;

  const title = language === 'uz' ? course.titleUz : course.titleRu;
  const duration = language === 'uz' ? course.durationUz : course.durationRu;
  const intensity = language === 'uz' ? course.intensityUz : course.intensityRu;
  const desc = language === 'uz' ? course.descUz : course.descRu;
  const audience = language === 'uz' ? course.audienceUz : course.audienceRu;
  const syllabus = language === 'uz' ? course.syllabusUz : course.syllabusRu;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#F0F2F5] border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Decorative Top Bar */}
        <div className="h-1.5 w-full bg-itpark" />

        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200/80 shrink-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-itpark-dark">
              {course.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">{title}</h3>
              <span className="text-xs text-itpark-dark font-semibold tracking-wider uppercase">{duration} | {intensity}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column - Meta details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">
                  {language === 'uz' ? 'Kurs Haqida' : 'О курсе'}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {desc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">
                  {language === 'uz' ? 'Bu kurs kimlar uchun?' : 'Для кого этот курс?'}
                </h4>
                <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-itpark-dark shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {audience}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">
                  {language === 'uz' ? 'Texnologiyalar' : 'Стек технологий'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:border-itpark/40 hover:text-slate-900 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Syllabus / Program */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-itpark-dark" />
                  <span>{language === 'uz' ? 'O\'quv dasturi' : 'Учебная программа'}</span>
                </h4>
                
                <div className="space-y-3">
                  {syllabus.map((module, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-3.5 bg-white/70 border border-slate-200/60 rounded-xl hover:border-slate-300 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-itpark/10 border border-itpark/20 text-itpark-dark text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-slate-755 text-slate-700 font-medium leading-relaxed pt-0.5">
                        {module}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-200/80 bg-slate-100/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-left hidden sm:block">
            <span className="text-xs text-slate-500 block">{language === 'uz' ? 'O\'qitish formati' : 'Формат обучения'}</span>
            <span className="text-sm font-bold text-slate-800">An'anaviy (offline) & Masofaviy (online)</span>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-3 bg-white border border-slate-200 hover:border-slate-350 text-slate-700 font-semibold rounded-xl text-sm transition-all"
            >
              {language === 'uz' ? 'Yopish' : 'Закрыть'}
            </button>
            <button
              onClick={() => {
                onRegister(course);
              }}
              className="w-1/2 sm:w-auto px-7 py-3 bg-itpark hover:bg-itpark-dark text-white font-bold rounded-xl text-sm shadow-lg shadow-itpark/10 transition-all flex items-center justify-center space-x-1"
            >
              <span>{language === 'uz' ? 'Kursga yozilish' : 'Записаться'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
