import React, { useState } from 'react';
import { 
  Laptop, 
  Layers, 
  Code, 
  Database, 
  Palette, 
  Film, 
  Camera, 
  Globe, 
  Award, 
  PlusCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function Courses({ language, onSelectCourse, translations }) {
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);
  
  const t = translations[language].courses;

  const coursesData = [
    {
      id: 'comp_lit',
      category: 'basic',
      icon: <Laptop className="w-6 h-6 text-current" />,
      image: '/images/comp_lit.jpg',
      titleUz: 'Kompyuter Savodxonligi',
      titleRu: 'Компьютерная грамотность',
      durationUz: '2 oy',
      durationRu: '2 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Kompyuter va Windows OT bilan ishlash, MS Office (Word, Excel, PowerPoint) va internet xavfsizligi asoslari.',
      descRu: 'Работа с ПК и ОС Windows, пакет программ MS Office (Word, Excel, PowerPoint) и основы интернет-безопасности.',
      stack: ['Windows OS', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Browsers & Email'],
      programs: ['windows', 'word', 'excel', 'powerpoint'],
      audienceUz: 'Noldan boshlovchilar, ofis xodimlari va o\'quvchilar.',
      audienceRu: 'Новички, офисные сотрудники и школьники.',
      syllabusUz: [
        'Kompyuterning tuzilishi va operatsion tizim',
        'MS Word yordamida matnlar bilan ishlash',
        'MS Excel dasturida jadvallar va hisob-kitoblar',
        'MS PowerPoint dasturida prezentatsiyalar yaratish',
        'Internet tarmog\'i, brauzerlar va elektron pochta'
      ],
      syllabusRu: [
        'Устройство компьютера и операционная система',
        'Работа с текстом в MS Word',
        'Таблицы и вычисления в MS Excel',
        'Создание презентаций в MS PowerPoint',
        'Сеть Интернет, браузеры и электронная почта'
      ]
    },
    {
      id: 'foundation',
      category: 'dev',
      icon: <Layers className="w-6 h-6 text-current" />,
      titleUz: 'Foundation',
      titleRu: 'Foundation',
      durationUz: '2 oy',
      durationRu: '2 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Algoritmlash asoslari, C va Python tillarida mantiqiy fikrlash hamda muammolarni hal qilish ko\'nikmalari.',
      descRu: 'Основы алгоритмов, логическое мышление и решение задач на языках программирования C и Python.',
      stack: ['C Language', 'Python Basics', 'Algorithms', 'Data Structures', 'Git basics'],
      programs: ['c', 'python', 'git'],
      audienceUz: 'Dasturlashga endigina kirib kelayotgan va mustahkam poydevor qurmoqchi bo\'lganlar.',
      audienceRu: 'Все, кто начинает свой путь в IT и хочет построить прочный фундамент.',
      syllabusUz: [
        'Algoritmlash va mantiqiy fikrlash asoslari',
        'C dasturlash tili sintaksisi va o\'zgaruvchilar',
        'Sikllar, shartlar va massivlar bilan ishlash',
        'Python tiliga kirish va asosiy operatorlar',
        'Git versiyalar nazorati tizimi bilan ishlash'
      ],
      syllabusRu: [
        'Основы алгоритмов и логического мышления',
        'Синтаксис языка программирования C и переменные',
        'Работа с циклами, условиями и массивами',
        'Введение в язык Python и базовые операторы',
        'Работа с системой контроля версий Git'
      ]
    },
    {
      id: 'frontend',
      category: 'dev',
      icon: <Code className="w-6 h-6 text-current" />,
      titleUz: 'Frontend dasturlash',
      titleRu: 'Frontend разработка',
      durationUz: '6 oy',
      durationRu: '6 месяцев',
      intensityUz: 'Haftada 3 marta, 2 soatdan + amaliyot',
      intensityRu: '3 раза в неделю по 2 часа + практика',
      descUz: 'Zamonaviy va moslashuvchan veb-saytlar va web-ilovalarni yaratish. HTML, CSS, JavaScript va React.',
      descRu: 'Создание современных, адаптивных веб-сайтов и веб-приложений. HTML, CSS, JavaScript и React.',
      stack: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'ReactJS', 'Tailwind CSS', 'Git & GitHub', 'REST API'],
      programs: ['html', 'css', 'js', 'react', 'tailwind'],
      audienceUz: 'Veb-saytlarning ko\'rinishi va foydalanuvchi interfeysini yaratishga qiziquvchilar.',
      audienceRu: 'Те, кто хочет создавать визуальную часть и интерфейс веб-сайтов.',
      syllabusUz: [
        'HTML5 & CSS3 yordamida veb-sahifalar yaratish',
        'Responsive Web Design (Flexbox, Grid, Media Queries)',
        'JavaScript (ES6+) asoslari va DOM manipulyatsiyasi',
        'ReactJS freymvorkiga kirish, komponentlar va holatlar (States)',
        'API bilan ishlash va real loyihani joylashtirish (Hosting)'
      ],
      syllabusRu: [
        'Создание веб-страниц с помощью HTML5 и CSS3',
        'Адаптивный дизайн (Flexbox, Grid, Media Queries)',
        'Основы JavaScript (ES6+) и манипуляции с DOM',
        'Введение во фреймворк ReactJS, компоненты и состояния',
        'Работа с API и деплой реального проекта на хостинг'
      ]
    },
    {
      id: 'backend',
      category: 'dev',
      icon: <Database className="w-6 h-6 text-current" />,
      image: '/images/backend.png',
      titleUz: 'Backend dasturlash',
      titleRu: 'Backend разработка',
      durationUz: '6 oy',
      durationRu: '6 месяцев',
      intensityUz: 'Haftada 3 marta, 2 soatdan + amaliyot',
      intensityRu: '3 раза в неделю по 2 часа + практика',
      descUz: 'Veb-ilovalarning server qismi, ma\'lumotlar bazasi va xavfsizlik arxitekturasini loyihalash. Python, Django, PostgreSQL.',
      descRu: 'Проектирование серверной части веб-приложений, баз данных и архитектуры безопасности. Python, Django, PostgreSQL.',
      stack: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Docker', 'Git', 'RESTful API'],
      programs: ['python', 'django', 'postgres', 'docker'],
      audienceUz: 'Ma\'lumotlar bilan ishlash, algoritmlar va tizim arxitekturasiga qiziquvchilar.',
      audienceRu: 'Те, кто интересуется работой с данными, алгоритмами и архитектурой систем.',
      syllabusUz: [
        'Python dasturlash tili va OOP (Obyektga yo\'naltirilgan dasturlash)',
        'Ma\'lumotlar bazasi bilan ishlash (PostgreSQL va SQL)',
        'Django Web Framework va MVC arxitekturasi',
        'Django REST Framework yordamida xavfsiz API yaratish',
        'Docker konteynerlashtirish va loyihani serverga yuklash (Deploy)'
      ],
      syllabusRu: [
        'Язык программирования Python и ООП',
        'Работа с базами данных (PostgreSQL и SQL)',
        'Django Web Framework и архитектура MVC',
        'Создание безопасных API с помощью Django REST Framework',
        'Контейнеризация в Docker и развертывание проекта на сервере'
      ]
    },
    {
      id: 'video_edit',
      category: 'media',
      icon: <Film className="w-6 h-6 text-current" />,
      titleUz: 'Video montaj',
      titleRu: 'Видеомонтаж',
      durationUz: '3 oy',
      durationRu: '3 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Kliplar, ijtimoiy tarmoqlar va YouTube uchun professional darajada video tahrirlash va rang berish.',
      descRu: 'Профессиональное редактирование, цветокоррекция и монтаж видео для клипов, соцсетей и YouTube.',
      stack: ['Adobe Premiere Pro', 'Adobe After Effects', 'Color Grading', 'Sound Design', 'Storytelling'],
      programs: ['premiere', 'aftereffects'],
      audienceUz: 'Video blogerlik, kinematografiya va reklama roliklari yaratishga qiziquvchilar.',
      audienceRu: 'Желающие создавать видеоблоги, рекламу и заниматься кинопроизводством.',
      syllabusUz: [
        'Adobe Premiere Pro dasturining interfeysi va asosiy asboblari',
        'Kadrlar ketma-ketligi, dinamik montaj va xronometraj',
        'Rang berish (Color Grading) va vizual effektlar bilan ishlash',
        'Ovoz bilan ishlash (Sound Design) va effektlar',
        'Adobe After Effects: oddiy animatsiyalar va titrlar'
      ],
      syllabusRu: [
        'Интерфейс и основные инструменты Adobe Premiere Pro',
        'Последовательность кадров, динамичный монтаж и тайминг',
        'Цветокоррекция (Color Grading) и визуальные эффекты',
        'Работа со звуком (Sound Design) и эффекты',
        'Adobe After Effects: простые анимации и титры'
      ]
    },
    {
      id: 'mobilography',
      category: 'media',
      icon: <Camera className="w-6 h-6 text-current" />,
      titleUz: 'Mobilografiya',
      titleRu: 'Мобилография',
      durationUz: '2 oy',
      durationRu: '2 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Faqatgina smartfon yordamida yuqori sifatli va trenddagi videolar, Reels va rasmlarni suratga olish va montaj qilish.',
      descRu: 'Съемка и монтаж качественных и трендовых видео, Reels и фотографий с помощью обычного смартфона.',
      stack: ['CapCut', 'Lightroom Mobile', 'Storytelling', 'Lighting composition', 'Reels algorithms'],
      programs: ['capcut', 'lightroom'],
      audienceUz: 'SMM mutaxassislari, tadbirkorlar va ijtimoiy tarmoqda faol bo\'lganlar.',
      audienceRu: 'SMM-специалисты, предприниматели и активные пользователи соцсетей.',
      syllabusUz: [
        'Kamera sozlamalari, kompozitsiya va yorug\'lik qoidalari',
        'Smartfonda suratga olish va fokuslash sirlari',
        'CapCut mobil ilovasida professional montaj qilish',
        'Musiqa tanlash, o\'tishlar (transitions) va trenddagi effektlar',
        'SMM asoslari: Videolarni joylashtirish va auditoriya yig\'ish'
      ],
      syllabusRu: [
        'Настройки камеры, композиция и правила освещения',
        'Секреты качественной съемки и фокуса на смартфоне',
        'Профессиональный монтаж в мобильном приложении CapCut',
        'Подбор музыки, переходы и трендовые эффекты',
        'Основы SMM: Публикация видео и привлечение аудитории'
      ]
    },
    {
      id: 'design',
      category: 'media',
      icon: <Palette className="w-6 h-6 text-current" />,
      titleUz: 'Grafik dizayn',
      titleRu: 'Графический дизайн',
      durationUz: '3 oy',
      durationRu: '3 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Brending, bannerlar, reklama materiallari va ijtimoiy tarmoqlar uchun professional vizual dizayn yaratish.',
      descRu: 'Создание профессионального визуального дизайна для брендинга, баннеров, рекламы и соцсетей.',
      stack: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Typography', 'Color Theory', 'Branding'],
      programs: ['photoshop', 'illustrator', 'figma'],
      audienceUz: 'Kreativ fikrlaydigan, chizish va brend uslubini yaratishga qiziquvchilar.',
      audienceRu: 'Креативные люди, желающие создавать фирменные стили и дизайн.',
      syllabusUz: [
        'Adobe Photoshop: Rastrli grafika bilan ishlash',
        'Adobe Illustrator: Vektorli grafika va logotiplar yaratish',
        'Figma: UI/UX dizayn va interfeys elementlari',
        'Brending: Firma uslubini yaratish qoidalari',
        'Taqdimot tayyorlash va buyurtmachilar bilan ishlash'
      ],
      syllabusRu: [
        'Adobe Photoshop: Работа с растровой графикой',
        'Adobe Illustrator: Создание векторной графики и логотипов',
        'Figma: UI/UX дизайн и элементы интерфейса',
        'Брендинг: Правила создания фирменного стиля',
        'Подготовка презентаций и работа с заказчиками'
      ]
    },
    {
      id: 'it_math',
      category: 'languages',
      icon: <PlusCircle className="w-6 h-6 text-current" />,
      titleUz: 'IT Matematika',
      titleRu: 'IT Математика',
      durationUz: '6 oy',
      durationRu: '6 месяцев',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Dasturlash uchun zarur bo\'lgan diskret matematika, mantiqiy fikrlash, tenglamalar va algoritmlar asoslari.',
      descRu: 'Дискретная математика, основы логики, уравнения и алгоритмы, необходимые для программирования.',
      stack: ['Discrete Math', 'Logic', 'Algebra', 'Geometry', 'Algorithms'],
      programs: ['algebra', 'geometry'],
      audienceUz: 'Bo\'lajak dasturchilar, maktab bitiruvchilari va mantiqiy fikrlashini kuchaytirmoqchi bo\'lganlar.',
      audienceRu: 'Будущие программисты, выпускники школ и те, кто хочет развить логическое мышление.',
      syllabusUz: [
        'Mantiqiy ifodalar va sanoq tizimlari',
        'Algebraik tenglamalar va funksiyalar',
        'Diskret matematika va to\'plamlar nazorati',
        'Geometrik kompozitsiyalar va vektorlar',
        'Algoritmlashda matematikaning o\'rni'
      ],
      syllabusRu: [
        'Логические выражения и системы счисления',
        'Алгебраические уравнения и функции',
        'Дискретная математика и теория множеств',
        'Геометрические композиции и векторы',
        'Роль математики в алгоритмизации'
      ]
    },
    {
      id: 'it_english_ielts',
      category: 'languages',
      icon: <Globe className="w-6 h-6 text-current" />,
      titleUz: 'IT English + IELTS',
      titleRu: 'IT English + IELTS',
      durationUz: '6 oy',
      durationRu: '6 месяцев',
      intensityUz: 'Haftada 3 marta, 1.5 soatdan',
      intensityRu: '3 раза в неделю по 1.5 часа',
      descUz: 'Ingliz tilida gapirish, eshitish va yozish ko\'nikmalarini oshirish hamda IELTS xalqaro sertifikatiga tayyorgarlik.',
      descRu: 'Развитие разговорных навыков английского языка, аудирования и письма, а также подготовка к IELTS.',
      stack: ['IT Vocabulary', 'Speaking & Listening', 'IELTS Writing', 'Mock Tests'],
      programs: ['ielts', 'grammar', 'speaking'],
      audienceUz: 'Chet tili darajasini oshirib, IT sohasida global ishlashni xohlovchilar.',
      audienceRu: 'Те, кто хочет повысить уровень языка для работы в глобальной IT сфере.',
      syllabusUz: [
        'IT sohasiga oid ingliz tili terminologiyasi',
        'IELTS imtihoni formati va Speaking strategiyalari',
        'Writing Task 1 va 2 yozish qoidalari',
        'Eshitish (Listening) va o\'qish (Reading) mashqlari',
        'Haftalik Mock Tests (imtihon simulyatsiyasi)'
      ],
      syllabusRu: [
        'Английская терминология в сфере IT',
        'Формат экзамена IELTS и стратегии Speaking',
        'Правила написания Writing Task 1 и 2',
        'Упражнения на аудирование и чтение',
        'Еженедельные Mock Tests'
      ]
    },
    {
      id: 'it_english_kids',
      category: 'languages',
      icon: <Globe className="w-6 h-6 text-current" />,
      titleUz: 'IT English (kids)',
      titleRu: 'IT English (kids)',
      durationUz: '6 oy',
      durationRu: '6 месяцев',
      intensityUz: 'Haftada 3 marta, 1.5 soatdan',
      intensityRu: '3 раза в неделю по 1.5 часа',
      descUz: 'Bolalar uchun interaktiv va qiziqarli o\'yinlar orqali ingliz tilini o\'rganish va IT terminlari bilan tanishish.',
      descRu: 'Изучение английского языка для детей через интерактивные игры и знакомство с IT-терминами.',
      stack: ['Basic English', 'Conversational English', 'Interactive Games', 'IT Terms for kids'],
      programs: ['grammar', 'speaking'],
      audienceUz: 'Dasturlashga qiziquvchi maktab yoshidagi bolalar.',
      audienceRu: 'Дети школьного возраста, интересующиеся технологиями.',
      syllabusUz: [
        'Alifbo, raqamlar va asosiy so\'zlar',
        'Interaktiv o\'yinlar orqali gapirish mashqlari',
        'Kompyuterga oid sodda inglizcha terminlar',
        'Multfilmlar ko\'rish va muhokama qilish',
        'Bolalar uchun maxsus darslik va qo\'shiqlar'
      ],
      syllabusRu: [
        'Алфавит, цифры и базовые слова',
        'Разговорная практика через интерактивные игры',
        'Простые английские термины на тему компьютера',
        'Просмотр и обсуждение мультфильмов',
        'Специальные детские учебники и песни'
      ]
    },
    {
      id: 'comp_lit_kids',
      category: 'basic',
      icon: <Laptop className="w-6 h-6 text-current" />,
      titleUz: 'Kompyuter savodxonligi (kids)',
      titleRu: 'Компьютерная грамотность (kids)',
      durationUz: '2 oy',
      durationRu: '2 месяца',
      intensityUz: 'Haftada 3 marta, 1.5 soatdan',
      intensityRu: '3 раза в неделю по 1.5 часа',
      descUz: 'Bolalar uchun kompyuterdan to\'g\'ri foydalanish, Paint, yozish mashqlari va Scratch vizual dasturlash asoslari.',
      descRu: 'Обучение детей правильному использованию ПК, Paint, клавиатурным тренажерам и визуальному программированию Scratch.',
      stack: ['Computer Basics', 'Keyboard Typing', 'Paint Drawing', 'Scratch programming'],
      programs: ['windows', 'scratch', 'paint'],
      audienceUz: 'Kompyuter bilan tanishishni va mantiqiy fikrlashni boshlayotgan bolalar.',
      audienceRu: 'Дети, начинающие знакомство с компьютером и логическим мышлением.',
      syllabusUz: [
        'Kompyuterning asosiy qurilmalari va xavfsizlik',
        'Tezkor yozish va klaviatura mashqlari',
        'Paint va MS Office dasturlarida ishlash',
        'Scratch dasturida sodda o\'yinlar yaratish',
        'Mantiqiy jumboqlar va kompyuter savodxonligi'
      ],
      syllabusRu: [
        'Основные устройства компьютера и техника безопасности',
        'Быстрый набор текста и клавиатурные тренажеры',
        'Работа в MS Office и графическом редакторе Paint',
        'Создание простых игр в среде Scratch',
        'Логические задачи и компьютерная грамотность'
      ]
    },
    {
      id: 'robototexnika',
      category: 'dev',
      icon: <Award className="w-6 h-6 text-current" />,
      titleUz: 'Robototexnika',
      titleRu: 'Робототехника',
      durationUz: '3 oy',
      durationRu: '3 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Arduino platformasi asosida elektronika, datchiklar va robotlarni loyihalash hamda dasturlash.',
      descRu: 'Проектирование и программирование роботов, электроники и датчиков на платформе Arduino.',
      stack: ['Arduino Uno', 'Sensors', 'Electronics basics', 'C++ coding', 'Robotics design'],
      programs: ['arduino', 'c'],
      audienceUz: 'Elektronika va o\'z qo\'llari bilan robotlar yasashga qiziquvchi yoshlar.',
      audienceRu: 'Молодежь, интересующаяся электроникой и сборкой роботов своими руками.',
      syllabusUz: [
        'Elektronika asoslari, sxemalar va tok kuchi',
        'Arduino platasi va datchiklar (sensorlar) bilan ishlash',
        'C++ tilida mikrocontrollerlarni dasturlash',
        'Aqlli uy tizimlari va avtomatlashtirish',
        'Mustaqil loyiha: Mobil robot yasash va ishga tushirish'
      ],
      syllabusRu: [
        'Основы электроники, схемы и сила тока',
        'Работа с платой Arduino и датчиками (сенсорами)',
        'Программирование микроконтроллеров на языке C++',
        'Системы "Умный дом" и автоматизация',
        'Самостоятельный проект: Создание и запуск мобильного робота'
      ]
    },
    {
      id: '3d',
      category: 'media',
      icon: <Palette className="w-6 h-6 text-current" />,
      titleUz: '3D modelash',
      titleRu: '3D моделирование',
      durationUz: '3 oy',
      durationRu: '3 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Blender dasturi yordamida 3D modellar, xarakterlar yaratish, tekstura berish va animatsiya qilish sirlari.',
      descRu: 'Секреты создания 3D моделей, персонажей, текстурирования и анимации с использованием программы Blender.',
      stack: ['Blender 3D', '3D Modeling', 'Sculpting', 'Texturing', 'Lighting & Render'],
      programs: ['blender'],
      audienceUz: 'O\'yin yaratish, interyer dizayn va 3D grafika sohasiga qiziquvchilar.',
      audienceRu: 'Интересующиеся созданием игр, дизайном интерьера и 3D-графикой.',
      syllabusUz: [
        'Blender dasturi interfeysi va asosiy asboblari',
        'Poligonal modelash va shakllar bilan ishlash',
        'Skulpting (haykaltaroshlik) va xarakterlar loyihalash',
        'Tekstura berish, materiallar va yorug\'lik sozlamalari',
        '3D animatsiya va sifatli vizualizatsiya (Render)'
      ],
      syllabusRu: [
        'Интерфейс программы Blender и основные инструменты',
        'Полигональное моделирование и работа с формами',
        'Скульптинг и проектирование персонажей',
        'Текстурирование, настройка материалов и освещения',
        '3D-анимация и качественная визуализация (Рендер)'
      ]
    },
    {
      id: 'foreign_languages',
      category: 'languages',
      icon: <Globe className="w-6 h-6 text-current" />,
      titleUz: 'Chet tillari',
      titleRu: 'Иностранные языки',
      durationUz: '3 oy',
      durationRu: '3 месяца',
      intensityUz: 'Haftada 3 marta, 1.5 soatdan',
      intensityRu: '3 раза в неделю по 1.5 часа',
      descUz: 'Nemis, Rus va boshqa chet tillarini gapirish va muloqot qilish ko\'nikmalarini noldan boshlab o\'rganish.',
      descRu: 'Изучение немецкого, русского и других иностранных языков с нуля для общения и разговорной практики.',
      stack: ['Grammar', 'Vocabulary', 'Speaking', 'Listening'],
      programs: ['grammar', 'speaking'],
      audienceUz: 'Chet ellik mijozlar bilan ishlash yoki chet elda o\'qish/ishlash niyatida bo\'lganlar.',
      audienceRu: 'Желающие учиться или работать за рубежом, либо общаться с иностранными клиентами.',
      syllabusUz: [
        'Tanlangan chet tili alifbosi va o\'qish qoidalari',
        'Kundalik muloqot uchun zarur bo\'lgan asosiy mavzular',
        'Grammatik qoidalar va gap tuzish mashqlari',
        'Eshitish (Listening) va tushunish mashqlari',
        'Erkin so\'zlashuv mashg\'ulotlari (Speaking sessions)'
      ],
      syllabusRu: [
        'Алфавит и правила чтения выбранного языка',
        'Основные разговорные темы для повседневного общения',
        'Грамматические правила и построение предложений',
        'Упражнения на аудирование и понимание речи',
        'Разговорные сессии для свободного общения'
      ]
    },
    {
      id: 'smm',
      category: 'media',
      icon: <Layers className="w-6 h-6 text-current" />,
      titleUz: 'SMM va Targetologiya',
      titleRu: 'SMM и Таргетинг',
      durationUz: '3 oy',
      durationRu: '3 месяца',
      intensityUz: 'Haftada 3 marta, 2 soatdan',
      intensityRu: '3 раза в неделю по 2 часа',
      descUz: 'Ijtimoiy tarmoqlarda brendlarni targ\'ib qilish, reklama kampaniyalarini sozlash va SMM strategiyasini yaratish.',
      descRu: 'Продвижение брендов в социальных сетях, настройка таргетированной рекламы и создание SMM-стратегий.',
      stack: ['Targeting', 'Content Plan', 'Copywriting', 'Budgeting', 'Analytics'],
      programs: ['figma', 'smm', 'targeting'],
      audienceUz: 'Brend egalari, ijtimoiy tarmoq adminlari va targetolog bo\'lishni xohlovchilar.',
      audienceRu: 'Владельцы бизнеса, администраторы соцсетей и желающие стать таргетологами.',
      syllabusUz: [
        'SMM asoslari va ijtimoiy tarmoqlar algoritmlari',
        'Kopirayting va kontent-reja (Content Plan) tuzish',
        'Figma yordamida postlar uchun vizual dizayn yaratish',
        'Facebook Ads Manager va targetlangan reklama sozlamalari',
        'Reklama tahlili (Analytics) va natijalarni optimallashtirish'
      ],
      syllabusRu: [
        'Основы SMM и алгоритмы социальных сетей',
        'Копирайтинг и составление контент-плана',
        'Создание визуального дизайна для постов в Figma',
        'Facebook Ads Manager и настройки таргетированной рекламы',
        'Анализ рекламы (Analytics) и оптимизация результатов'
      ]
    }
  ];

  const filterTabs = [
    { id: 'all', labelUz: 'Barchasi', labelRu: 'Все курсы' },
    { id: 'dev', labelUz: 'Dasturlash', labelRu: 'Программирование' },
    { id: 'media', labelUz: 'Dizayn & Media', labelRu: 'Дизайн и медиа' },
    { id: 'languages', labelUz: 'Tillar & Fanlar', labelRu: 'Языки и науки' }
  ];

  const getProgramIcon = (name) => {
    // Utility style classes for standard uniform 8x8 badges without text labels
    const badgeClass = "w-8 h-8 bg-white border border-slate-200/80 rounded-lg flex items-center justify-center shadow-xs transition-all duration-200 hover:border-itpark/40 hover:-translate-y-0.5 hover:shadow-sm";
    
    switch (name) {
      case 'windows':
        return (
          <span key={name} title="Windows OS" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#0078d7]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z" />
            </svg>
          </span>
        );
      case 'word':
        return (
          <span key={name} title="Microsoft Word" className={badgeClass}>
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none">
              <path d="M21.58 4.31L13.11 2.1c-.24-.06-.49.12-.49.37v19.06c0 .25.25.43.49.37l8.47-2.21c.24-.06.41-.28.41-.53V4.84c0-.25-.17-.47-.41-.53z" fill="#0F6CBD" />
              <path d="M12.62 2.47V21.53c0 .22-.22.37-.42.29L2.24 18.06c-.15-.05-.24-.19-.24-.34V6.28c0-.15.09-.29.24-.34l9.96-3.76c.2-.08.42.07.42.29z" fill="#118FE4" />
              <path d="M8.28 15.5l-2.02-6.5h1.38l1.33 4.88 1.35-4.88h1.34l-2.02 6.5H8.28z" fill="white" />
            </svg>
          </span>
        );
      case 'excel':
        return (
          <span key={name} title="Microsoft Excel" className={badgeClass}>
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none">
              <path d="M21.58 4.31L13.11 2.1c-.24-.06-.49.12-.49.37v19.06c0 .25.25.43.49.37l8.47-2.21c.24-.06.41-.28.41-.53V4.84c0-.25-.17-.47-.41-.53z" fill="#107C41" />
              <path d="M12.62 2.47V21.53c0 .22-.22.37-.42.29L2.24 18.06c-.15-.05-.24-.19-.24-.34V6.28c0-.15.09-.29.24-.34l9.96-3.76c.2-.08.42.07.42.29z" fill="#1F9A55" />
              <path d="M8.2 15.5l1.64-3.25 1.62 3.25H12.8L10.5 11.8l2.25-3.8h-1.34l-1.59 3.02-1.57-3.02H6.9l2.27 3.8L6.87 15.5H8.2z" fill="white" />
            </svg>
          </span>
        );
      case 'powerpoint':
        return (
          <span key={name} title="Microsoft PowerPoint" className={badgeClass}>
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none">
              <path d="M21.58 4.31L13.11 2.1c-.24-.06-.49.12-.49.37v19.06c0 .25.25.43.49.37l8.47-2.21c.24-.06.41-.28.41-.53V4.84c0-.25-.17-.47-.41-.53z" fill="#C43E1C" />
              <path d="M12.62 2.47V21.53c0 .22-.22.37-.42.29L2.24 18.06c-.15-.05-.24-.19-.24-.34V6.28c0-.15.09-.29.24-.34l9.96-3.76c.2-.08.42.07.42.29z" fill="#D83B01" />
              <path d="M7.8 15.5V8.5h2.2c1.2 0 2 .8 2 2s-.8 2-2 2H9.2v3h-1.4zm1.4-4.5H10c.4 0 .8-.2.8-.7s-.4-.7-.8-.7H9.2V11z" fill="white" />
            </svg>
          </span>
        );
      case 'c':
        return (
          <span key={name} title="C Language" className={badgeClass}>
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c2.5 0 4.7 1.1 6.2 2.9l-2.3 2.3C14.9 8.4 13.5 8 12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.5 0 2.9-.4 3.9-1.2l2.3 2.3c-1.5 1.8-3.7 2.9-6.2 2.9z" fill="#A8B9CC" />
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6c0-1.5-.6-2.9-1.6-3.9l-1.4 1.4c.6.6 1 1.5 1 2.5 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c1 0 1.9.4 2.5 1l1.4-1.4C14.9 6.6 13.5 6 12 6z" fill="#00599C" />
            </svg>
          </span>
        );
      case 'python':
        return (
          <span key={name} title="Python" className={badgeClass}>
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none">
              <path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.85h-4.82c-.83 0-1.5.67-1.5 1.5v4.83h-4.8c-.9 0-1.66-.73-1.66-1.65V4.68c0-.9.76-1.65 1.66-1.65h3.7c.36 0 .65-.29.65-.65V1.03c0-.47.38-.85.85-.85h3.12z" fill="#3776AB" />
              <path d="M9.75 23.82c-.9 0-1.66-.73-1.66-1.65v-2.85h4.82c.83 0 1.5-.67 1.5-1.5v-4.83h-4.8c.9 0 1.66.73 1.66 1.65v4.6c0 .9-.76 1.65-1.66 1.65h-3.7c-.36 0-.65.29-.65.65v1.37c0 .47-.38.85-.85.85H9.75z" fill="#FFE052" />
              <circle cx="9.02" cy="2.2" r="0.6" fill="white" />
              <circle cx="14.98" cy="21.8" r="0.6" fill="black" />
            </svg>
          </span>
        );
      case 'git':
        return (
          <span key={name} title="Git" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.54 11.11L12.89.47a1.5 1.5 0 0 0-2.12 0L8.4 2.83l3.21 3.21a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12L10.5 11.4a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l3.21-3.21L8.8 3.21a1.5 1.5 0 0 0-2.12 0L.46 9.42a1.5 1.5 0 0 0 0 2.12l10.65 10.65a1.5 1.5 0 0 0 2.12 0l10.31-10.31a1.5 1.5 0 0 0 0-2.12z" />
            </svg>
          </span>
        );
      case 'html':
        return (
          <span key={name} title="HTML5" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.2l.33 4.171L12 19.351l5.465-1.488.75-8.113H8.531z" />
            </svg>
          </span>
        );
      case 'css':
        return (
          <span key={name} title="CSS3" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 8.78l.22 2.44h9.23l-.28 3.14-2.76.75-2.78-.75-.18-1.97H7.4l.32 3.84 4.28 1.18 4.28-1.18.52-5.7H9.27l-.2-2.22h8.04l.2-2.22H6.59z" />
            </svg>
          </span>
        );
      case 'js':
        return (
          <span key={name} title="JavaScript" className={badgeClass}>
            <span className="w-4.5 h-4.5 bg-[#f7df1e] text-black rounded-xs flex items-center justify-center text-[10px] font-extrabold leading-none">JS</span>
          </span>
        );
      case 'react':
        return (
          <span key={name} title="ReactJS" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#61DAFB] animate-[spin_15s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            </svg>
          </span>
        );
      case 'tailwind':
        return (
          <span key={name} title="Tailwind CSS" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228 1.565-.89 2.288 1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228 1.565-.89 2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          </span>
        );
      case 'django':
        return (
          <span key={name} title="Django" className={badgeClass}>
            <span className="w-4.5 h-4.5 bg-[#092e20] text-white rounded-xs flex items-center justify-center text-[10px] font-extrabold leading-none">dj</span>
          </span>
        );
      case 'postgres':
        return (
          <span key={name} title="PostgreSQL" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0529-.142.128-.314.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532 3.532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
            </svg>
          </span>
        );
      case 'docker':
        return (
          <span key={name} title="Docker" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
            </svg>
          </span>
        );
      case 'photoshop':
        return (
          <span key={name} title="Adobe Photoshop" className={badgeClass}>
            <span className="w-4.5 h-4.5 bg-[#001833] text-[#31a8ff] rounded-xs flex items-center justify-center text-[10px] font-extrabold leading-none">Ps</span>
          </span>
        );
      case 'illustrator':
        return (
          <span key={name} title="Adobe Illustrator" className={badgeClass}>
            <span className="w-4.5 h-4.5 bg-[#331c00] text-[#ff9a00] rounded-xs flex items-center justify-center text-[10px] font-extrabold leading-none">Ai</span>
          </span>
        );
      case 'figma':
        return (
          <span key={name} title="Figma" className={badgeClass}>
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none">
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z" fill="#FF7262" />
              <path d="M8.148 8.981C5.672 8.981 3.658 6.967 3.658 4.49S5.672 0 8.148 0h4.588v8.981H8.148z" fill="#F24E1E" />
              <path d="M8.148 17.962C5.672 17.962 3.658 15.948 3.658 13.47s2.014-4.49 4.49-4.49h4.588v8.981H8.148z" fill="#A259FF" />
              <path d="M8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539z" fill="#0ACF83" />
              <path d="M15.852 17.962c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.491-4.49-4.491h-4.588v8.981h4.588z" fill="#1ABC9C" />
            </svg>
          </span>
        );
      case 'premiere':
        return (
          <span key={name} title="Adobe Premiere Pro" className={badgeClass}>
            <span className="w-4.5 h-4.5 bg-[#14002b] text-[#e4a5ff] rounded-xs flex items-center justify-center text-[9px] font-extrabold leading-none">Pr</span>
          </span>
        );
      case 'aftereffects':
        return (
          <span key={name} title="Adobe After Effects" className={badgeClass}>
            <span className="w-4.5 h-4.5 bg-[#14002b] text-[#d1a5ff] rounded-xs flex items-center justify-center text-[9px] font-extrabold leading-none">Ae</span>
          </span>
        );
      case 'capcut':
        return (
          <span key={name} title="CapCut" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#00E5FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 7l-7 5 7 5V7z" fill="currentColor" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </span>
        );
      case 'lightroom':
        return (
          <span key={name} title="Adobe Lightroom" className={badgeClass}>
            <span className="w-4.5 h-4.5 bg-[#001c33] text-[#31a8ff] rounded-xs flex items-center justify-center text-[9px] font-extrabold leading-none">Lr</span>
          </span>
        );
      case 'grammar':
        return (
          <span key={name} title="Grammar" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#4F46E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </span>
        );
      case 'speaking':
        return (
          <span key={name} title="Speaking Practice" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
        );
      case 'ielts':
        return (
          <span key={name} title="IELTS" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#EF4444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          </span>
        );
      case 'mock':
        return (
          <span key={name} title="Mock Exam" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#F59E0B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </span>
        );
      case 'algebra':
        return (
          <span key={name} title="Algebra" className={badgeClass}>
            <span className="text-[#3B82F6] font-extrabold text-[11px] font-serif">x²+y</span>
          </span>
        );
      case 'geometry':
        return (
          <span key={name} title="Geometry" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#EC4899]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h18v18H3z" />
              <path d="M21 3L3 21" />
            </svg>
          </span>
        );
      case 'scratch':
        return (
          <span key={name} title="Scratch" className={badgeClass}>
            <span className="text-[#FF8C00] font-extrabold text-[11px]">S</span>
          </span>
        );
      case 'paint':
        return (
          <span key={name} title="Paint / Drawing" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.3379 19.4883 5.57757 19.7325 5.59732 19.974C5.61708 20.2154 5.42013 20.4855 5.02624 21.0256L4.81432 21.3159C4.5458 21.6837 4.41154 21.8676 4.50293 21.9687C4.59432 22.0699 4.8214 22 5.27555 22H12Z" />
              <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
              <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
              <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
              <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor" />
            </svg>
          </span>
        );
      case 'arduino':
        return (
          <span key={name} title="Arduino" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#00979D]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a4 4 0 011.55 7.69A5.85 5.85 0 0116 16c-2.67 0-4.9-1.8-5.58-4.22a.79.79 0 00-.77-.6.79.79 0 00-.77.6C7.57 14.12 5.56 16 3 16a4 4 0 010-8c2.56 0 4.57 1.88 5.25 4.3a.79.79 0 001.5 0C10.43 9.88 12.44 8 16 8zM7 11.5H5v1h2v-1zm12-1h-2v1h2v-1zm-1 2h-2v1h2v-1z" />
            </svg>
          </span>
        );
      case 'blender':
        return (
          <span key={name} title="Blender 3D" className={badgeClass}>
            <span className="text-[#EA7600] font-extrabold text-[11px]">Bl</span>
          </span>
        );
      case 'smm':
        return (
          <span key={name} title="SMM" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#e4405f]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </span>
        );
      case 'targeting':
        return (
          <span key={name} title="Facebook Ads / Targeting" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#0078d7]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </span>
        );
      case 'linux':
        return (
          <span key={name} title="Linux" className={badgeClass}>
            <span className="text-slate-800 font-extrabold text-[11px]">Lx</span>
          </span>
        );
      case 'security':
        return (
          <span key={name} title="Cybersecurity" className={badgeClass}>
            <svg className="w-4.5 h-4.5 text-[#d9383a]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.9v6h-2v-6h2zm0-4.9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
            </svg>
          </span>
        );
      default:
        return null;
    }
  };

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'basic':
        return 'border-t-blue-500 hover:border-t-blue-600 bg-gradient-to-br from-[#F0F2F5] to-blue-50/50 hover:to-blue-100/60 shadow-blue-550/5';
      case 'dev':
        return 'border-t-itpark hover:border-t-itpark-dark bg-gradient-to-br from-[#F0F2F5] to-[#7dba28]/6 hover:to-[#7dba28]/10 shadow-itpark/5';
      case 'media':
        return 'border-t-purple-500 hover:border-t-purple-600 bg-gradient-to-br from-[#F0F2F5] to-purple-50/50 hover:to-purple-100/60 shadow-purple-550/5';
      case 'languages':
        return 'border-t-amber-500 hover:border-t-amber-600 bg-gradient-to-br from-[#F0F2F5] to-amber-50/50 hover:to-amber-100/60 shadow-amber-550/5';
      default:
        return 'border-t-slate-300 bg-[#F0F2F5]';
    }
  };

  const getIconWrapperStyles = (category) => {
    switch (category) {
      case 'basic':
        return 'bg-blue-500/10 border-blue-500/20 text-blue-600';
      case 'dev':
        return 'bg-[#7dba28]/15 border-[#7dba28]/25 text-itpark-dark';
      case 'media':
        return 'bg-purple-500/10 border-purple-500/20 text-purple-600';
      case 'languages':
        return 'bg-amber-500/10 border-amber-500/20 text-amber-600';
      default:
        return 'bg-white border-slate-200 text-slate-700';
    }
  };

  const filteredCourses = activeTab === 'all' 
    ? coursesData 
    : coursesData.filter(c => c.category === activeTab || (activeTab === 'languages' && c.category === 'basic'));

  const visibleCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

  return (
    <section id="courses" className="py-20 bg-slate-50 relative border-y border-slate-200">
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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setShowAll(false); }}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                activeTab === tab.id
                  ? 'bg-itpark border-itpark text-slate-950 shadow-md shadow-itpark/10'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-350'
              }`}
            >
              {language === 'uz' ? tab.labelUz : tab.labelRu}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 transition-all duration-300 hover:shadow-lg group ${getCategoryStyles(course.category)}`}
            >
              <div>
                {course.image ? (
                  // Inline split layout for cards with a 3D illustration
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-2">
                        {/* Header of card (Icon & Duration) */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 border rounded-xl flex items-center justify-center transition-all duration-350 ${getIconWrapperStyles(course.category)}`}>
                            {course.icon}
                          </div>
                          <div className="flex items-center space-x-1.5 text-xs text-slate-700 font-semibold bg-white border border-slate-200/80 px-3 py-1 rounded-full shadow-xs">
                            <Clock className="w-3.5 h-3.5 text-itpark-dark" />
                            <span>{language === 'uz' ? course.durationUz : course.durationRu}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 hover:text-itpark-dark transition-colors leading-tight">
                          {language === 'uz' ? course.titleUz : course.titleRu}
                        </h3>
                      </div>

                      {/* 3D Transparent Illustration */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 ml-4 transition-transform duration-500 group-hover:scale-108 group-hover:rotate-2">
                        <img 
                          src={course.image} 
                          alt="" 
                          className="w-full h-full object-contain filter drop-shadow-sm" 
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-base leading-relaxed mb-5 mt-3">
                      {language === 'uz' ? course.descUz : course.descRu}
                    </p>
                  </div>
                ) : (
                  // Normal Layout for other courses
                  <div>
                    {/* Header of card */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 border rounded-xl flex items-center justify-center transition-all duration-350 ${getIconWrapperStyles(course.category)}`}>
                        {course.icon}
                      </div>
                      <div className="flex items-center space-x-1.5 text-sm text-slate-700 font-semibold bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-xs">
                        <Clock className="w-3.5 h-3.5 text-itpark-dark" />
                        <span>{language === 'uz' ? course.durationUz : course.durationRu}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 hover:text-itpark-dark transition-colors">
                      {language === 'uz' ? course.titleUz : course.titleRu}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 text-base leading-relaxed mb-5">
                      {language === 'uz' ? course.descUz : course.descRu}
                    </p>
                  </div>
                )}

                {/* Programs taught */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.programs.map((prog) => getProgramIcon(prog))}
                </div>
              </div>

              {/* Action */}
              <div className="border-t border-slate-200 pt-5 flex items-center justify-between mt-auto">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="text-base font-bold text-itpark-dark hover:text-itpark transition-colors flex items-center space-x-1"
                >
                  <span>{t.btnDetails}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href="#contact"
                  className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-bold px-4 py-2.5 rounded-lg transition-all"
                >
                  {t.btnRegister}
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Show All Button */}
        {filteredCourses.length > 6 && !showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-itpark hover:bg-itpark-dark text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-itpark/10 hover:shadow-itpark/30 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {language === 'uz' ? "Barcha kurslarni ko'rish" : 'Показать все курсы'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
