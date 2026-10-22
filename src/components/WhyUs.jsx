import * as Icons from "lucide-react";
import CountUp from "react-countup";
import data from "../../data.json"
import { useEffect, useRef, useState } from "react";

function WhyUs() {
const [counterOn, setCounterOn] = useState(false);
const counterRef = useRef(null);

useEffect(() => {
  const element = counterRef.current;

  if (!element) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setCounterOn(true);
       observer.disconnect()
    }

  });

  observer.observe(element);

  return () => observer.disconnect();
}, []);


  return (
    
    <section className="max-w-7xl mx-auto px-6 py-16">
        <div>
    </div>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1B2A4A]">ليش تختار Lumen؟</h2>
        <p className="mt-3 text-gray-600">نهتم بتجربتك من أول محاضرة لحد ما تحقق هدفك.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.whyUs.map((item) => {
          const Icon = Icons[item.icon]
          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="h-14 w-14 rounded-2xl bg-[#FDF1DD] text-[#1B2A4A] flex items-center justify-center">
                <Icon size={28} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#1B2A4A]">{item.title}</h3>
              <p className="mt-2 text-gray-600 leading-7">{item.description}</p>
            </div>
          )
        })}
      </div>

      <div ref={counterRef} className="mt-12 bg-[#1B2A4A] rounded-3xl px-8 py-10 grid gap-8 text-center sm:grid-cols-3">
        {data.stats.map((stat) => (
          <div key={stat.id}>
            <div className="text-4xl font-extrabold text-[#F2A33A]">
                 {counterOn && <CountUp start={0} end={stat.value} duration={4} delay={0.4} suffix="+" /> }    
                </div>
            <div className="mt-1 text-white">{stat.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default WhyUs