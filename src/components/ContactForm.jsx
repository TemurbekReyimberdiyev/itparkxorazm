import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, BookOpen, MessageSquare } from 'lucide-react';

export default function ContactForm({ language, selectedCourse, translations }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(selectedCourse ? selectedCourse.id : '');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const t = translations[language].contact;

  // React to change of selectedCourse via prop
  React.useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse.id);
    }
  }, [selectedCourse]);

  const coursesList = [
    { id: 'comp_lit', uz: 'Kompyuter Savodxonligi', ru: 'Компьютерная грамотность' },
    { id: 'foundation', uz: 'Foundation', ru: 'Foundation' },
    { id: 'frontend', uz: 'Frontend dasturlash', ru: 'Frontend разработка' },
    { id: 'backend', uz: 'Backend dasturlash', ru: 'Backend разработка' },
    { id: 'video_edit', uz: 'Video montaj', ru: 'Видеомонтаж' },
    { id: 'mobilography', uz: 'Mobilografiya', ru: 'Мобилография' },
    { id: 'design', uz: 'Grafik dizayn', ru: 'Графический дизайн' },
    { id: 'it_math', uz: 'IT Matematika', ru: 'IT Математика' },
    { id: 'it_english_ielts', uz: 'IT English + IELTS', ru: 'IT English + IELTS' },
    { id: 'it_english_kids', uz: 'IT English (kids)', ru: 'IT English (kids)' },
    { id: 'comp_lit_kids', uz: 'Kompyuter savodxonligi (kids)', ru: 'Компьютерная грамотность (kids)' },
    { id: 'robototexnika', uz: 'Robototexnika', ru: 'Робототехника' },
    { id: '3d', uz: '3D modelash', ru: '3D моделирование' },
    { id: 'foreign_languages', uz: 'Chet tillari', ru: 'Иностранные языки' },
    { id: 'smm', uz: 'SMM va Targetologiya', ru: 'SMM и Таргетинг' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError(language === 'uz' ? 'Iltimos, ismingizni kiriting' : 'Пожалуйста, введите ваше имя');
      return;
    }

    if (!phone.trim() || phone.length < 9) {
      setError(language === 'uz' ? 'Iltimos, telefon raqamingizni to\'liq kiriting' : 'Пожалуйста, введите корректный номер телефона');
      return;
    }

    setLoading(true);

    const selectedCourseObj = coursesList.find(c => c.id === course);
    const courseName = selectedCourseObj ? `${selectedCourseObj.uz} (${selectedCourseObj.ru})` : course;

    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('phone', `+998 ${phone}`);
    formData.append('course', courseName);
    formData.append('message', message);
    formData.append('timestamp', new Date().toLocaleString());

    fetch('https://script.google.com/macros/s/AKfycbymq0dtVJi6ou8O9bvpaSspksK6lnWwbLpdY_OXj388fJ265GPp3okB3Un5os8cHxPHDA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    })
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setPhone('');
      setCourse('');
      setMessage('');
    })
    .catch((err) => {
      console.error(err);
      setError(language === 'uz' ? 'Xatolik yuz berdi. Qayta urinib ko\'ring.' : 'Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Form Box */}
        <div className="relative bg-[#F0F2F5] border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden">
          
          {/* Decorative glows inside card */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-itpark/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-itpark/15 rounded-full blur-2xl pointer-events-none" />

          {!success ? (
            <>
              {/* Form Title */}
              <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.title}</h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {t.subtext}
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {error && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-600 text-sm font-semibold rounded-xl">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-itpark-dark" />
                      <span>{t.labelName}</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'uz' ? 'Masalan: Sherzod' : 'Например: Шерзод'}
                      className="w-full bg-white border border-slate-200 focus:border-itpark/60 focus:ring-1 focus:ring-itpark/30 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                      <Phone className="w-3.5 h-3.5 text-itpark-dark" />
                      <span>{t.labelPhone}</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-sm text-slate-400 font-bold">+998</span>
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder=" (99) 053-11-99"
                        maxLength="9"
                        className="w-full bg-white border border-slate-200 focus:border-itpark/60 focus:ring-1 focus:ring-itpark/30 rounded-xl pl-16 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                    <BookOpen className="w-3.5 h-3.5 text-itpark-dark" />
                    <span>{t.labelCourse}</span>
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-itpark/60 focus:ring-1 focus:ring-itpark/30 rounded-xl px-4 py-3.5 text-sm text-slate-800 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="text-slate-400">
                      {language === 'uz' ? 'Kursni tanlang' : 'Выберите курс'}
                    </option>
                    {coursesList.map((c) => (
                      <option key={c.id} value={c.id} className="text-slate-800 bg-white">
                        {language === 'uz' ? c.uz : c.ru}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1">
                    <MessageSquare className="w-3.5 h-3.5 text-itpark-dark" />
                    <span>{t.labelMessage}</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'uz' ? 'Savollaringiz bo\'lsa yozing...' : 'Если есть вопросы, напишите...'}
                    rows="4"
                    className="w-full bg-white border border-slate-200 focus:border-itpark/60 focus:ring-1 focus:ring-itpark/30 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-itpark hover:bg-itpark-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-itpark/10 hover:shadow-itpark/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.btnSubmit}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-500 text-center leading-relaxed mt-4">
                  {language === 'uz' 
                    ? "Tugmani bosish orqali Siz oferta shartlariga va shaxsiy ma'lumotlarni qayta ishlashga rozilik berasiz."
                    : "Нажимая на кнопку, Вы соглашаетесь с условиями оферты и обработкой персональных данных."}
                </p>

              </form>
            </>
          ) : (
            // Success view
            <div className="text-center py-10 space-y-6 relative z-10 animate-fade-in">
              <div className="w-20 h-20 bg-itpark/10 border border-itpark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-itpark-dark" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.successTitle}</h2>
              <p className="text-slate-650 text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                {t.successSub}
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-white border border-slate-200 hover:border-slate-350 hover:bg-slate-100 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all"
              >
                {language === 'uz' ? 'Yangi so\'rov yuborish' : 'Отправить новый запрос'}
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
