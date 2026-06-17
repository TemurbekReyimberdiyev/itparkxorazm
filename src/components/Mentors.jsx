import React, { useRef, useEffect, useState } from 'react';
import { Award, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Mentors({ language, translations }) {
  const t = translations[language].mentors;

  const mentorsData = [
    {
      name: 'Temurbek Reyimberdiyev',
      roleUz: 'Kompyuter savodxonligi mentori',
      roleRu: 'Ментор по компьютерной грамотности',
      bioUz: 'Kompyuter savodxonligi va ofis dasturlari (Word, Excel, PowerPoint) bo\'yicha boshlang\'ich bilimlarni o\'rgatish sohasida katta tajribaga ega.',
      bioRu: 'Специалист с большим опытом обучения компьютерной грамотности и офисным программам (Word, Excel, PowerPoint).',
      skills: ['Windows OS', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Internet'],
      experienceUz: '3+ yil tajriba',
      experienceRu: 'Опыт 3+ года',
      avatarColor: 'from-blue-600 to-cyan-500',
      image: '/temurbek.webp'
    },
    {
      name: 'Izzatbek Mahmudjonov',
      roleUz: 'IT Foundation mentori',
      roleRu: 'Ментор по IT Foundation',
      bioUz: 'Dasturlash asoslari, C tili, algoritm va ma\'lumotlar tuzilmalarini o\'rgatuvchi tajribali mutaxassis.',
      bioRu: 'Опытный специалист, обучающий основам программирования, языку C, алгоритмам и структурам данных.',
      skills: ['C programming', 'Algorithms', 'Data Structures', 'Git', 'Problem Solving'],
      experienceUz: '4+ yil tajriba',
      experienceRu: 'Опыт 4+ года',
      avatarColor: 'from-emerald-600 to-teal-500',
      image: '/izzatbek.webp'
    },
    {
      name: 'Humoyun Madrahimov',
      roleUz: 'Grafik dizayn mentori',
      roleRu: 'Ментор по графическому дизайну',
      bioUz: 'Ranglar nazariyasi, kompozitsiya va Adobe Photoshop, Illustrator dasturlarida grafik dizayn elementlarini yaratish sirlarini o\'rgatadi.',
      bioRu: 'Обучает теории цвета, композиции и секретам создания элементов графического дизайна в Adobe Photoshop и Illustrator.',
      skills: ['Photoshop', 'Illustrator', 'Graphic Design', 'Branding', 'Vector Art'],
      experienceUz: '3+ yil tajriba',
      experienceRu: 'Опыт 3+ года',
      avatarColor: 'from-purple-650 to-indigo-500',
      image: '/humoyun.webp'
    },
    {
      name: 'Shohrux Abdullayev',
      roleUz: 'Frontend dasturlash mentori',
      roleRu: 'Ментор по Frontend разработке',
      bioUz: 'Zamonaviy veb-dasturlash (HTML, CSS, JavaScript, React) asoslarini amaliy loyihalar bilan o\'rgatuvchi frontend dasturchi.',
      bioRu: 'Frontend-разработчик, обучающий основам современной веб-разработки (HTML, CSS, JavaScript, React) на практических проектах.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
      experienceUz: '3+ yil tajriba',
      experienceRu: 'Опыт 3+ года',
      avatarColor: 'from-amber-500 to-rose-500',
      image: '/shohrux.webp'
    },
    {
      name: 'Dostonbek Jumayev',
      roleUz: 'Video montaj mentori',
      roleRu: 'Ментор по видеомонтажу',
      bioUz: 'Adobe Premiere Pro va After Effects dasturlari orqali professional video tahrirlash, dinamik montaj va rang berish sirlari mentori.',
      bioRu: 'Ментор по профессиональному редактированию видео, динамическому монтажу и цветокоррекции в Adobe Premiere Pro и After Effects.',
      skills: ['Premiere Pro', 'After Effects', 'Video Editing', 'Color Grading', 'Sound Design'],
      experienceUz: '4+ yil tajriba',
      experienceRu: 'Опыт 4+ года',
      avatarColor: 'from-orange-500 to-amber-500',
      image: '/dostonbek.webp'
    },
    {
      name: 'Jonibek Uralov',
      roleUz: 'Backend dasturlash mentori',
      roleRu: 'Ментор по Backend разработке',
      bioUz: 'Python tili, Django frameworki va relyatsion ma\'lumotlar bazalari yordamida veb-saytlarning server qismini yaratish bo\'yicha mutaxassis.',
      bioRu: 'Специалист по созданию серверной части веб-сайтов с использованием языка Python, фреймворка Django и реляционных баз данных.',
      skills: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Git'],
      experienceUz: '5+ yil tajriba',
      experienceRu: 'Опыт 5+ лет',
      avatarColor: 'from-rose-600 to-orange-500',
      image: '/jonibek.webp'
    },
    {
      name: 'Dilshodbek Rajabov',
      roleUz: 'Ingliz tili va IELTS mentori',
      roleRu: 'Ментор по английскому языку и IELTS',
      bioUz: 'Ingliz tili grammatikasi, erkin so\'zlashuv va IELTS imtihoniga tayyorlash bo\'yicha ko\'p yillik tajribaga ega sertifikatlangan o\'qituvchi.',
      bioRu: 'Сертифицированный преподаватель с многолетним опытом подготовки к экзамену IELTS, обучению грамматике и разговорному английскому.',
      skills: ['IELTS Preparation', 'English Grammar', 'Speaking Practice', 'Academic Writing'],
      experienceUz: '5+ yil tajriba',
      experienceRu: 'Опыт 5+ лет',
      avatarColor: 'from-blue-500 to-indigo-600',
      image: '/dilshodbek.webp'
    }
  ];

  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.firstChild ? scrollRef.current.firstChild.clientWidth + 24 : clientWidth / 2;
      const scrollTo = direction === 'left' 
        ? scrollLeft - cardWidth
        : scrollLeft + cardWidth;
      
      const maxScroll = scrollWidth - clientWidth;
      if (direction === 'right' && scrollLeft >= maxScroll - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = scrollRef.current.firstChild ? scrollRef.current.firstChild.clientWidth + 24 : clientWidth / 2;

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000); // Autoplay slide transition every 4 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="mentors" className="py-20 bg-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-itpark/5 rounded-full blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {t.sectionTitle} <span className="text-itpark-dark">{t.sectionTitleColor}</span>
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              {t.sectionSub}
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex space-x-2 mt-6 md:mt-0 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-itpark/40 text-slate-600 hover:text-itpark-dark flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="Previous mentor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-itpark/40 text-slate-600 hover:text-itpark-dark flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="Next mentor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mentors Autoplay Carousel snap container */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 pt-2 px-1 scrollbar-none"
        >
          {mentorsData.map((mentor, idx) => (
            <div
              key={idx}
              className="glass-card bg-[#F0F2F5] hover:bg-[#e7e9ec] rounded-3xl p-6 flex flex-col justify-between border border-slate-200 group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start transition-all duration-300"
            >
              <div>
                
                {/* Mentor Avatar or Placeholder */}
                <div className="relative w-full aspect-square rounded-2xl mb-6 overflow-hidden bg-white border border-slate-200/60 flex items-center justify-center">
                  {mentor.image ? (
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover object-[center_30%] transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-tr ${mentor.avatarColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      {/* Clean Silhouette SVG */}
                      <svg className="w-24 h-24 text-slate-300 group-hover:text-slate-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </>
                  )}

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/95 border border-slate-200/80 backdrop-blur-xs px-2.5 py-1 rounded-lg flex items-center space-x-1 z-10">
                    <Award className="w-3.5 h-3.5 text-itpark-dark" />
                    <span className="text-xs text-slate-700 font-bold uppercase">{language === 'uz' ? mentor.experienceUz : mentor.experienceRu}</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-itpark-dark transition-colors duration-250">
                  {mentor.name}
                </h3>
                <span className="text-sm text-itpark-dark font-semibold block mt-1.5">
                  {language === 'uz' ? mentor.roleUz : mentor.roleRu}
                </span>
                
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {language === 'uz' ? mentor.bioUz : mentor.bioRu}
                </p>

              </div>

              {/* Skills and Social */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {mentor.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3 text-slate-400">
                  <a href="#" className="hover:text-slate-900 transition-colors" aria-label="GitHub">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-slate-900 transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                    <Code2 className="w-3.5 h-3.5 text-itpark-dark" />
                    <span>Mentor</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
