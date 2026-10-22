import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Link } from 'react-router-dom';

import data from "../../data.json"

const links = [
  { label: "الرئيسية", to: "/" },
  { label: "الكورسات", to: "/CoursesPage" },
  { label: "تحديد المستوى", to: "" },
  { label: "اتصل بنا", to: "/Contact" },
]

function Footer() {
  const { name, description, address, phone, email, hours, social } = data.institute

  return (
    <footer  className="bg-[#1B2A4A] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        <div>
          <div className="text-2xl font-extrabold"><span className="text-[#F2A33A]"> معهد Lumen لتعليم اللغة الإنجليزية</span></div>
          <p className="mt-3 text-gray-300 leading-7">{description}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            {social.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition hover:text-[#F2A33A]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#F2A33A]">روابط سريعة</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to}
               onClick={() => {
    if (link.to === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }}
             
                className="text-gray-300 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#F2A33A]">تواصل معنا</h3>
          <ul className="mt-4 flex flex-col gap-3 text-gray-300">
            <li className="flex items-center gap-3">
              <MapPin size={20} className="shrink-0" />
              {address}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="shrink-0" />
              <a href={`tel:${phone}`} dir="ltr" className="transition hover:text-white">{phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="shrink-0" />
              <a href={`mailto:${email}`} dir="ltr" className="transition hover:text-white">{email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="shrink-0" />
              {hours}
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 text-sm text-gray-400">
          © {new Date().getFullYear()} {name}. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}

export default Footer