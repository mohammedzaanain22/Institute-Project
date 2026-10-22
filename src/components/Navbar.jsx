import { useState } from "react"
import { Link , NavLink} from 'react-router-dom';

function Navbar() {

     const [open, setOpen] = useState(false)

    return(
        <header className=" bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <Link to="/" className="text-xl font-bold text-[#1B2A4A]">Lumen</Link>
            <nav className="hidden md:flex gap-6 font-semibold">
               <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}>
               الرئيسية
               </NavLink>
            <NavLink to="/CoursesPage" className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}>
              الكورسات
               </NavLink>
              <NavLink to="/level-test" className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}>
                    تحديد المستوى
             </NavLink>
              <NavLink to="/contact"  className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}>
                 اتصل بنا
                </NavLink>
                </nav>
            <Link to="/register" className="hidden md:block bg-[#F2A33A] text-[#101828]  hover:text-[#F2A33A]  hover:bg-[#101828]  rounded-full px-6 py-2 font-bold">
                    سجّل الآن
             </Link>

              <button


          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          >
          ☰
        </button>
          </div>

{open && (
  <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 font-semibold">
    <NavLink to="/" onClick={() => setOpen(false)}
    className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}
    >الرئيسية</NavLink>
    <NavLink to="/CoursesPage" onClick={() => setOpen(false)}
    className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}
    >الكورسات</NavLink>
    <NavLink to="/level-test" onClick={() => setOpen(false)}
    className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}
    >تحديد المستوى</NavLink>
    <NavLink to="/contact" onClick={() => setOpen(false)}
    className={({ isActive }) => (isActive ? 'text-[#F2A33A]' : 'text-black hover:text-[#F2A33A]')}
    >اتصل بنا</NavLink>
    <Link to="/register" onClick={() => setOpen(false)} className="bg-[#F2A33A] text-center rounded-full px-6 py-2 font-bold">
      سجّل الآن
    </Link>
  </nav>
)}
         </header>
    )
}
export default Navbar