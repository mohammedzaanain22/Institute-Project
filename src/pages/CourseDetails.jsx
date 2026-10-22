import { Link, useParams } from "react-router-dom"
import data from "../../data.json"

function CourseDetails() {
  const { id } = useParams()
  const course = data.courses.find((c) => c.id === Number(id))

  if (!course) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#1B2A4A]">الكورس غير موجود</h1>
        <Link to="/CoursesPage" className="mt-4 inline-block text-[#B36B00] font-semibold">
          ← الرجوع للكورسات
        </Link>
      </section>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <Link to="/CoursesPage" className="text-[#B36B00] font-semibold">← كل الكورسات</Link>

      <div className="mt-6 grid gap-10 md:grid-cols-3">

        <div className="md:col-span-2">
          <span className="font-bold text-[#8A5200]">{course.level}</span>
          <h1 className="mt-1 text-4xl font-extrabold text-[#1B2A4A]">{course.title}</h1>
          <p className="mt-4 text-lg text-gray-600 leading-8">{course.description}</p>

          {course.image && (
            <img src={course.image} alt={course.title} className="mt-6 w-full h-72 object-cover rounded-3xl" />
          )}

          <h2 className="mt-10 text-2xl font-bold text-[#1B2A4A]">شو رح تتعلم؟</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {course.learn.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-6 w-6 shrink-0 rounded-full bg-[#FDF1DD] text-[#B36B00] flex items-center justify-center font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="bg-white rounded-3xl p-7 shadow-sm h-fit flex flex-col gap-5">
          <h2 className="text-xl font-bold text-[#1B2A4A]">معلومات الكورس</h2>

          <div>
            <div className="text-sm text-gray-500">المدة</div>
            <div className="font-bold text-[#1B2A4A]">{course.duration}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">عدد الحصص</div>
            <div className="font-bold text-[#1B2A4A]">{course.sessions}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">الجدول</div>
            <div className="font-bold text-[#1B2A4A]">{course.schedule}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">السعر</div>
            <div className="font-bold text-[#1B2A4A]">{course.price}</div>
          </div>

          <Link
            to="/register"
              state={{ course: course.title }}
              className="bg-[#F2A33A] text-[#101828] text-center rounded-full px-8 py-3 font-bold text-lg transition hover:bg-[#1B2A4A] hover:text-[#F2A33A]"
          >
            سجّل بهذا الكورس
          </Link>
        </aside>

      </div>
    </section>
  )
}

export default CourseDetails