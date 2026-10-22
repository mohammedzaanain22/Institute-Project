import { useState } from 'react';
import data from '../../data.json'
import { useLocation } from 'react-router-dom';
function Register() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
   course: location.state?.course || '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    }
    if (!/^05\d{8}$/.test(formData.phone.trim())) {
      newErrors.phone = 'رقم الهاتف يجب أن يكون 10 أرقام ويبدأ بـ 05';
    }
    if (!formData.course) {
      newErrors.course = 'يرجى اختيار الكورس المطلوب';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    setSendError(false);

    try {
      const res = await fetch("https://formspree.io/f/xnpjgyze", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    }

    setSending(false);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-[#1B2A4A]">التسجيل</h1>
      <p className="mt-2 text-lg text-gray-600">
        عبّي بياناتك وبنتواصل معك لتأكيد التسجيل.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center md:col-span-1">
            <h2 className="text-2xl font-bold text-[#1B2A4A]">تم إرسال طلبك بنجاح!</h2>
            <p className="mt-3 text-gray-600">سنقوم بالتواصل معك خلال 24 ساعة لتأكيد التسجيل وتحديد موعد اختبار المستوى.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-5"
          >
            <div>
              <label className="block font-semibold mb-1">الاسم الكامل</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="محمد أيمن"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#F2A33A]"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="059XXXXXXX"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#F2A33A]"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">الإيميل (اختياري)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@email.com"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#F2A33A]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">الكورس المطلوب</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none focus:border-[#F2A33A] bg-white"
              >
                <option disabled value="">اختر الكورس</option>
                {data.courses.map((el) => (
                  <option key={el.id} value={el.title}>{el.title}</option>
                ))}
              </select>
              {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1">ملاحظات (اختياري)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#F2A33A]"
              />
            </div>

            {sendError && (
              <p className="text-red-500 text-sm">
                صار خطأ بالإرسال، جرّب مرة ثانية أو راسلنا على واتساب.
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="bg-[#F2A33A] text-[#101828] rounded-full px-8 py-3 font-bold text-lg cursor-pointer transition hover:bg-[#1B2A4A] hover:text-[#F2A33A] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "جاري الإرسال..." : "إرسال الطلب"}
            </button>
          </form>
        )}

        <div className="bg-[#1B2A4A] text-white rounded-3xl p-8">
          <h2 className="text-xl font-bold text-[#F2A33A]">شو بيصير بعد الإرسال؟</h2>
          <ol className="mt-4 leading-9 list-decimal list-inside">
            <li>بنوصلنا طلبك</li>
            <li>بنتواصل معك خلال يوم</li>
            <li>بنحدد لك موعد اختبار مستوى</li>
            <li>بتبدأ بالكورس المناسب</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Register;