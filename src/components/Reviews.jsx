import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

export default function Reviews({ language, translations }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const reviewsData = [
    {
      name: 'Abdulloh Anvarov',
      courseUz: 'Frontend dasturlash',
      courseRu: 'Frontend разработка',
      badgeUz: 'Junior Frontend dasturchi',
      badgeRu: 'Junior Frontend разработчик',
      textUz: 'IT Park Xorazmda Frontend kursini tugatdim. Mentorlar juda tajribali, har bir dars amaliyot bilan o\'tildi. Hozirda mahalliy studiyada junior dasturchi bo\'lib ishlayapman!',
      textRu: 'Окончил курс Frontend в IT Park Хорезм. Менторы очень опытные, каждый урок проходил с практикой. Сейчас работаю junior-разработчиком в местной студии!',
      image: '/images/student_1.webp'
    },
    {
      name: 'Madina Sobirova',
      courseUz: 'Grafik dizayn',
      courseRu: 'Графический дизайн',
      badgeUz: 'Frilanser dizayner',
      badgeRu: 'Дизайнер-фрилансер',
      textUz: 'Grafik dizayn kursi hayotimni o\'zgartirdi. Ranglar nazariyasi, branding va portfolio yaratishni noldan o\'rgandim. Kurs tugamasdanoq ilk buyurtmalarimni oldim.',
      textRu: 'Курс графического дизайна изменил мою жизнь. Изучила теорию цвета, брендинг и создание портфолио с нуля. Получила первые заказы еще до окончания курса.',
      image: '/images/student_2.webp'
    },
    {
      name: 'Jasur Mansurov',
      courseUz: 'Video montaj',
      courseRu: 'Видеомонтаж',
      badgeUz: 'YouTube va Reels montajchisi',
      badgeRu: 'Монтажер YouTube и Reels',
      textUz: 'Professional darajada video montaj sirlarini o\'rganishni maqsad qilgandim va buni IT Park Xorazmda topdim. Premiere Pro va After Effects darslari juda tushunarli bo\'ldi.',
      textRu: 'Я хотел научиться профессиональному видеомонтажу и нашел это в IT Park Хорезм. Уроки по Premiere Pro и After Effects были очень понятными.',
      image: '/images/student_3.webp'
    },
    {
      name: 'Dilnoza Tojiyeva',
      courseUz: 'Ingliz tili & IELTS',
      courseRu: 'Английский язык & IELTS',
      badgeUz: 'IELTS 7.5 sohibasi',
      badgeRu: 'Обладательница IELTS 7.5',
      textUz: 'IELTS imtihoniga tayyorgarlik ko\'rish uchun eng to\'g\'ri joy. Mentorlarning yordami va doimiy speaking darslari tufayli IELTSdan 7.5 ball olishga muvaffaq bo\'ldim!',
      textRu: 'Лучшее место для подготовки к экзамену IELTS. Благодаря поддержке менторов и постоянным урокам спикинга мне удалось получить 7.5 баллов по IELTS!',
      image: '/images/student_4.webp'
    }
  ];

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  // Autoplay and progress bar logic
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // Update progress bar every 50ms
    const duration = 5000; // 5 seconds per story
    
    // Calculate initial elapsed time based on current progress (if we resumed from a pause)
    let elapsed = (progress / 100) * duration;

    const timer = setInterval(() => {
      elapsed += intervalTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setActiveIndex((curr) => (curr + 1) % reviewsData.length);
        setProgress(0);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, activeIndex, reviewsData.length]);

  const handlePrev = () => {
    setActiveIndex((curr) => (curr - 1 + reviewsData.length) % reviewsData.length);
    setIsPlaying(true);
  };

  const handleNext = () => {
    setActiveIndex((curr) => (curr + 1) % reviewsData.length);
    setIsPlaying(true);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-10 w-[280px] h-[280px] bg-itpark/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[280px] h-[280px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Tailwind CSS Responsive variables defined locally for carousel sizing */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --card-width: 280px;
          --card-gap: 16px;
        }
        @media (min-width: 640px) {
          :root {
            --card-width: 330px;
            --card-gap: 20px;
          }
        }
        @media (min-width: 768px) {
          :root {
            --card-width: 360px;
            --card-gap: 24px;
          }
        }
        @media (min-width: 1024px) {
          :root {
            --card-width: 380px;
            --card-gap: 28px;
          }
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-itpark/10 border border-itpark/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-itpark-dark uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'uz' ? 'Fikrlar' : 'Отзывы'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {language === 'uz' ? "O'quvchilar fikri" : 'Отзывы учеников'}
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed text-base sm:text-lg">
            {language === 'uz' 
              ? 'Bitiruvchilarimizning haqiqiy tajribalari va muvaffaqiyat hikoyalari' 
              : 'Реальный опыт и истории успеха наших выпускников'}
          </p>
        </div>
      </div>

      {/* Stories Carousel Container */}
      <div className="w-full relative overflow-hidden py-10">
        {/* Slider viewport */}
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[680px] overflow-visible">
          
          {/* Flex Track */}
          <div 
            className="flex absolute left-0 top-0 h-full transition-transform duration-500 ease-out"
            style={{
              width: 'max-content',
              transform: `translateX(calc(50vw - (var(--card-width) / 2) - (${activeIndex} * (var(--card-width) + var(--card-gap)))))`
            }}
          >
            {reviewsData.map((review, idx) => {
              const isActive = idx === activeIndex;
              const isPrev = idx === (activeIndex - 1 + reviewsData.length) % reviewsData.length;
              const isNext = idx === (activeIndex + 1) % reviewsData.length;

              let cardClasses = "relative aspect-[9/16] rounded-[24px] overflow-hidden bg-slate-800 shadow-lg transition-all duration-500 ease-out ";
              
              if (isActive) {
                cardClasses += "w-[var(--card-width)] scale-100 z-20 opacity-100 blur-none grayscale-0 ring-4 ring-itpark/30";
              } else {
                cardClasses += "w-[var(--card-width)] scale-80 z-10 opacity-45 blur-[1.5px] grayscale cursor-pointer hover:opacity-60";
              }

              return (
                <div
                  key={idx}
                  className={cardClasses}
                  style={{ marginRight: 'var(--card-gap)' }}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(idx);
                      setIsPlaying(true);
                    } else {
                      setIsPlaying(!isPlaying);
                    }
                  }}
                >
                  {/* Background Review Photo */}
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  />

                  {/* Play overlay when paused */}
                  {isActive && !isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 flex items-center justify-center animate-pulse">
                        <svg className="w-8 h-8 text-white fill-white ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Top Progress Bars (Only animated inside active card) */}
                  {isActive && (
                    <div className="absolute top-4 left-4 right-4 flex space-x-1.5 z-30">
                      {reviewsData.map((_, pIdx) => {
                        let fillWidth = '0%';
                        if (pIdx < activeIndex) fillWidth = '100%';
                        if (pIdx === activeIndex) fillWidth = `${progress}%`;

                        return (
                          <div key={pIdx} className="h-[3px] rounded-full bg-white/30 flex-1 overflow-hidden">
                            <div 
                              className="h-full bg-white transition-all duration-[50ms] ease-linear"
                              style={{ width: fillWidth }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10" />

                  {/* Review Text & Details (Bottom 50%) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end text-white">
                    
                    {/* Floating quote decorator */}
                    <div className="absolute right-6 top-0 -translate-y-6 w-9 h-9 rounded-full bg-itpark/90 backdrop-blur-xs flex items-center justify-center shadow-md">
                      <Quote className="w-4 h-4 text-slate-900 fill-slate-900" />
                    </div>

                    {/* Badge */}
                    <div className="mb-2 self-start bg-itpark/95 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-xs">
                      {language === 'uz' ? review.badgeUz : review.badgeRu}
                    </div>

                    {/* Name */}
                    <h3 className="text-lg sm:text-xl font-extrabold leading-tight">
                      {review.name}
                    </h3>

                    {/* Course */}
                    <span className="text-xs sm:text-sm text-itpark font-bold mt-1 block">
                      {language === 'uz' ? review.courseUz : review.courseRu}
                    </span>

                    {/* Testimonial quote text */}
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-medium mt-3 border-l-2 border-itpark/50 pl-3">
                      "{language === 'uz' ? review.textUz : review.textRu}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating controls on desktop view */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30 max-w-7xl mx-auto px-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-slate-200/50 bg-white/90 hover:bg-white text-slate-800 hover:text-itpark-dark flex items-center justify-center transition-all duration-200 shadow-md pointer-events-auto cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-slate-200/50 bg-white/90 hover:bg-white text-slate-800 hover:text-itpark-dark flex items-center justify-center transition-all duration-200 shadow-md pointer-events-auto cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
