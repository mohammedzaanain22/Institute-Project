import { Link } from 'react-router-dom';

function Hero() {
  return (
   
   <section className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 md:items-center">
      <div>
         
         <span className="inline-block bg-[#E8EEF8] text-[#1B2A4A] rounded-full px-4 py-1 text-sm font-semibold">
        دفعة جديدة تبدأ قريباً
       </span>
        <h1 className="text-3xl md:text-5xl mt-4 font-bold text-[#1B2A4A] md:leading-[1.3]">
          تعلّم الإنجليزية بثقة، خطوة بعد خطوة
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          كورسات لكل المستويات مع مدرّسين متخصصين وصفوف صغيرة، من المبتدئ حتى IELTS.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/register"
            className="bg-[#F2A33A] text-[#101828] rounded-full px-8 py-3 font-bold text-lg
            hover:text-[#F2A33A]  hover:bg-[#101828] 
            "
          >
            سجّل الآن
          </Link>
          <button
            
            className="border-2 border-[#1B2A4A] text-[#1B2A4A] rounded-full px-8 py-3 font-bold text-lg
             hover:text-[#1B2A4A] hover:border-[#F2A33A] hover:bg-[#F2A33A] 
            "
          >
            حدّد مستواك مجاناً
          </button>
        </div>
      </div>


   <img
  src="/hero.jpg"
  className="rounded-3xl w-full h-72 md:h-96 object-cover"
  />
    </section>
  )
}

export default Hero