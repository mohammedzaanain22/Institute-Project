import { useState } from "react"
import CourseCard from "../components/CourseCard"
import data from "../../data.json"

const filters = [
  { value: "all", label: "الكل" },
  { value: "beginner", label: "مبتدئ" },
  { value: "intermediate", label: "متوسط" },
  { value: "advanced", label: "متقدم" },
  { value: "ielts", label: "IELTS" },
  { value: "conversation", label: "محادثة" },
  { value: "kids", label: "أطفال" },
]

function CoursesPage() {
  const [selected, setSelected] = useState("all")

  const shown =
    selected === "all"
      ? data.courses
      : data.courses.filter((course) => Array.isArray(course.category) 
            ? course.category.includes(selected) 
            : course.category === selected)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-[#1B2A4A]">الكورسات</h1>
      <p className="mt-2 text-lg text-gray-600">اختر المستوى المناسب لك</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setSelected(f.value)}
            className={
              "rounded-full px-5 py-2 font-semibold cursor-pointer transition " +
              (selected === f.value
                ? "bg-[#1B2A4A] text-white"
                : "bg-white border border-gray-300 text-[#1B2A4A] hover:border-[#F2A33A]")
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  )
}

export default CoursesPage