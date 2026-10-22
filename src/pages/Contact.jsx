import { MapPin, Phone, Mail, Clock } from "lucide-react"
import data from "../../data.json"

function Contact() {
  const { address, phone, email, hours, social, mapUrl } = data.institute
  const whatsapp = social.find((item) => item.name === "واتساب")
  const mapSrc =
    mapUrl ||
    `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-[#1B2A4A]">اتصل بنا</h1>
      <p className="mt-2 text-lg text-gray-600">نسعد بأسئلتك بأي وقت</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">

        <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-6">

          <div className="flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-[#FDF1DD] text-[#1B2A4A] flex items-center justify-center">
              <MapPin size={22} />
            </div>
            <div>
              <div className="text-sm text-gray-500">العنوان</div>
              <div className="font-bold text-[#1B2A4A]">{address}</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-[#FDF1DD] text-[#1B2A4A] flex items-center justify-center">
              <Phone size={22} />
            </div>
            <div>
              <div className="text-sm text-gray-500">الهاتف</div>
              <a href={`tel:${phone}`} className="font-bold text-[#1B2A4A] hover:text-[#B36B00]">{phone}</a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-[#FDF1DD] text-[#1B2A4A] flex items-center justify-center">
              <Mail size={22} />
            </div>
            <div>
              <div className="text-sm text-gray-500">الإيميل</div>
              <a href={`mailto:${email}`} className="font-bold text-[#1B2A4A] hover:text-[#B36B00]">{email}</a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-[#FDF1DD] text-[#1B2A4A] flex items-center justify-center">
              <Clock size={22} />
            </div>
            <div>
              <div className="text-sm text-gray-500">ساعات الدوام</div>
              <div className="font-bold text-[#1B2A4A]">{hours}</div>
            </div>
          </div>

          {whatsapp && (
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F2A33A] text-[#101828] text-center rounded-full px-8 py-3 font-bold text-lg transition hover:bg-[#1B2A4A] hover:text-[#F2A33A]"
            >
              راسلنا على واتساب
            </a>
          )}

        </div>

        <div className="rounded-3xl overflow-hidden shadow-sm min-h-[360px]">
          <iframe
            src={mapSrc}
            title="موقع المعهد"
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}

export default Contact