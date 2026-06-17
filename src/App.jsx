import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import CourseModal from './components/CourseModal';
import Mentors from './components/Mentors';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Footer from './components/Footer';

// Translation Dictionary for UZ and RU
const translations = {
  uz: {
    header: {
      navCourses: "Kurslarimiz",
      navMentors: "Mentorlar",
      navAbout: "Biz haqimizda",
      navContact: "Aloqa",
      btnRegister: "Kursga yozilish"
    },
    hero: {
      tagline: "Raqamli bilimlar maskani",
      titleStart: "Kelajak kasblarini",
      titleEnd: "IT Park Xorazmda o'rganing!",
      subtext: "Xorazm viloyatida zamonaviy texnologiyalar, dasturlash va xalqaro metodikalar asosida ta'lim oling. Sifatli ta'lim, real keyslar va malakali mentorlar yordamida o'z kelajagingizni bugundan boshlab quring.",
      btnPrimary: "Hoziroq ro'yxatdan o'ting",
      btnSecondary: "Kurslar bilan tanishish",
      statCourses: "Professional kurslar",
      statMentors: "Senior & Middle mentorlar",
      statQuality: "Amaliyot kafolati",
      statCertificates: "Xalqaro va mahalliy sertifikat"
    },
    courses: {
      sectionTitle: "Bizning",
      sectionTitleColor: "kurslarimiz",
      sectionSub: "Zamonaviy IT yo'nalishlaridan o'zingizga mosini tanlang va professional faoliyatingizni boshlang.",
      btnDetails: "Batafsil ma'lumot",
      btnRegister: "Ro'yxatdan o'tish"
    },
    mentors: {
      sectionTitle: "Bizning",
      sectionTitleColor: "mentorlarimiz",
      sectionSub: "Sizga sohadagi 3 yildan ortiq tajribaga ega bo'lgan va real loyihalarda ishlaydigan mutaxassislar dars beradi."
    },
    contact: {
      title: "Kursga yozilish uchun so'rov qoldiring",
      subtext: "Ma'lumotlaringizni qoldiring, menejerlarimiz siz bilan 1 soat ichida bog'lanib, bepul maslahat berishadi.",
      labelName: "Sizning ismingiz",
      labelPhone: "Telefon raqamingiz",
      labelCourse: "Tanlamoqchi bo'lgan kursingiz",
      labelMessage: "Savollar yoki qo'shimcha izohlar",
      btnSubmit: "So'rov yuborish",
      successTitle: "SO'ROVINGIZ QABUL QILINDI!",
      successSub: "Menejerlarimiz tez fursatda siz bilan bog'lanishadi. O'qishga bo'lgan qiziqishingiz uchun tashakkur!"
    },
    about: {
      sectionTitle: "Biz haqimizda",
      sectionTitleColor: "batafsil",
      sectionSub: "IT Park Xorazm filiali viloyatda axborot texnologiyalarini rivojlantirish va yoshlarni sohaga jalb qilish markazi hisoblanadi.",
      cardTitle: "IT Park Xorazm jamoasi",
      cardText: "Biz yoshlarni zamonaviy va yuqori daromadli kasblarga tayyorlashni maqsad qilganmiz. Bizning o'quv dasturlarimiz eng so'nggi texnologik tendensiyalar va O'zbekiston Respublikasi Prezidentining «Raqamli O'zbekiston – 2030» strategiyasiga mos keladi. Darslar offline va online formatlarda, yuqori tezlikdagi internet va zamonaviy kompyuterlar bilan jihozlangan sinfxonalarda o'tiladi.",
      labelAddress: "Bizning manzil",
      labelPhone: "Telefonlarimiz",
      labelHours: "Ish vaqtimiz"
    },
    footer: {
      brandDesc: "IT Park Xorazm — kelajak dasturchilari va raqamli texnologiyalar mutaxassislarini tayyorlash markazi.",
      quickLinks: "Tezkor havolalar",
      governmentLinks: "Hujjatlar va qonunlar",
      legalInfo: "Yuridik ma'lumotlar",
      privacyPolicy: "Maxfiylik siyosati",
      contacts: "Aloqa bo'limi",
      madeWith: "IT Park Xorazm tomonidan yaratilgan"
    }
  },
  ru: {
    header: {
      navCourses: "Наши курсы",
      navMentors: "Менторы",
      navAbout: "О нас",
      navContact: "Контакты",
      btnRegister: "Записаться на курс"
    },
    hero: {
      tagline: "Центр цифровых знаний",
      titleStart: "Изучайте профессии будущего",
      titleEnd: "в IT Park Хорезм!",
      subtext: "Получите образование в Хорезмской области на основе современных технологий, программирования и международных методологий. Постройте свое будущее уже сегодня с качественным обучением, реальными кейсами и квалифицированными менторами.",
      btnPrimary: "Зарегистрироваться сейчас",
      btnSecondary: "Ознакомиться с курсами",
      statCourses: "Профессиональных курсов",
      statMentors: "Senior и Middle менторов",
      statQuality: "Гарантия практики",
      statCertificates: "Международный и местный сертификат"
    },
    courses: {
      sectionTitle: "Наши",
      sectionTitleColor: "курсы",
      sectionSub: "Выберите подходящее вам современное IT-направление и начните свою профессиональную деятельность.",
      btnDetails: "Подробнее",
      btnRegister: "Регистрация"
    },
    mentors: {
      sectionTitle: "Наши",
      sectionTitleColor: "менторы",
      sectionSub: "Вас будут обучать специалисты с практическим опытом работы более 3 лет, участвующие в реальных проектах."
    },
    contact: {
      title: "Оставьте заявку на обучение",
      subtext: "Оставьте свои данные, и наши менеджеры свяжутся с вами в течение 1 часа для бесплатной консультации.",
      labelName: "Ваше имя",
      labelPhone: "Номер телефона",
      labelCourse: "Курс, который вы хотите выбрать",
      labelMessage: "Вопросы или дополнительные комментарии",
      btnSubmit: "Отправить запрос",
      successTitle: "ВАШ ЗАПРОС ПРИНЯТ!",
      successSub: "Наши менеджеры свяжутся с вами в ближайшее время. Спасибо за проявленный интерес!"
    },
    about: {
      sectionTitle: "О нас",
      sectionTitleColor: "подробнее",
      sectionSub: "Хорезмский филиал IT Park является центром развития информационных технологий и привлечения молодежи в сферу в регионе.",
      cardTitle: "Команда IT Park Хорезм",
      cardText: "Наша цель — подготовить молодежь к востребованным и высокооплачиванным профессиям. Наши учебные программы соответствуют последним технологическим тенденциям и государственной стратегии «Цифровой Узбекистан – 2030». Занятия проходят в форматах offline и online, в учебных классах, оборудованных высокоскоростным интернетом и современными компьютерами.",
      labelAddress: "Наш адрес",
      labelPhone: "Наши телефоны",
      labelHours: "Рабочее время"
    },
    footer: {
      brandDesc: "IT Park Хорезм — центр подготовки будущих программистов и специалистов в сфере цифровых технологий.",
      quickLinks: "Быстрые ссылки",
      governmentLinks: "Документы и законы",
      legalInfo: "Юридическая информация",
      privacyPolicy: "Политика конфиденциальности",
      contacts: "Контакты",
      madeWith: "Создано со стороны IT Park Хорезм"
    }
  }
};

function App() {
  const [language, setLanguage] = useState('uz');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleRegisterFromModal = (course) => {
    setSelectedCourse(null);
    // Smooth scroll to the contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-55 bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-itpark selection:text-slate-900">
      
      {/* Header / Navigation */}
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        translations={translations} 
      />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          language={language} 
          translations={translations} 
        />

        {/* Courses Section */}
        <Courses 
          language={language} 
          onSelectCourse={handleSelectCourse} 
          translations={translations} 
        />

        {/* Mentors Section */}
        <Mentors 
          language={language} 
          translations={translations} 
        />

        {/* Contact Form Section */}
        <ContactForm 
          language={language} 
          selectedCourse={selectedCourse} 
          translations={translations} 
        />

        {/* About/Map Section */}
        <About 
          language={language} 
          translations={translations} 
        />

      </main>

      {/* Footer Section */}
      <Footer 
        language={language} 
        translations={translations} 
      />

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          language={language} 
          onClose={handleCloseModal} 
          onRegister={handleRegisterFromModal} 
        />
      )}

    </div>
  );
}

export default App;
