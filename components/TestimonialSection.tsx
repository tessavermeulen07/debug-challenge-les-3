const testimonials = [
  {
    naam: "Lisa de Vries",
    rol: "Frontend Developer",
    tekst: "Cursor heeft mijn workflow compleet veranderd. Ik bouw nu in uren wat vroeger dagen kostte.",
  },
  {
    naam: "Mark Jansen",
    rol: "Student NOVI",
    tekst: "Eindelijk een tool die écht begrijpt wat ik wil bouwen. De Composer feature is geweldig!",
  },
  {
    naam: "Sophie Bakker",
    rol: "Full-Stack Developer",
    tekst: "Van OpenCode naar Cursor was de beste beslissing. Geen token limits meer, gewoon bouwen.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-[60px] px-5 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1a1a1a]">Wat Anderen Zeggen</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-7 bg-purple-50 rounded-2xl border border-purple-200">
              <p className="italic text-gray-600 mb-4 leading-relaxed text-[15px]">
                "{t.tekst}"
              </p>
              <div>
                <p className="font-semibold text-[#1a1a1a] text-[15px]">{t.naam}</p>
                <p className="text-violet-600 text-[13px]">{t.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
