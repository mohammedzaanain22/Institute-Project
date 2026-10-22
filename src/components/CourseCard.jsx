import { Link } from "react-router-dom"

function CourseCard({ id, image, level, title, description,  }) {
  return (
    <Link to={`/CoursesPage/${id}`} className="group h-full bg-white rounded-3xl overflow-hidden shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="h-44 w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-[#E8EEF8]" />
        )}
      </div>

      <div className="p-6">
        <span className="text-sm font-bold text-[#8A5200]">{level}</span>
        <h3 className="mt-1 text-2xl font-bold text-[#1B2A4A] transition group-hover:text-[#F2A33A]">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

    </Link>
  )
}

export default CourseCard