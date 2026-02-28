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
    <section style={{
      padding: '60px 20px',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#1a1a1a'
        }}>Wat Anderen Zeggen</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '28px',
              backgroundColor: '#faf5ff',
              borderRadius: '16px',
              border: '1px solid #e9d5ff'
            }}>
              <p style={{
                fontStyle: 'italic',
                color: '#4b5563',
                marginBottom: '16px',
                lineHeight: '1.6',
                fontSize: '15px'
              }}>"{t.tekst}"</p>
              <div>
                <p style={{
                  fontWeight: '600',
                  color: '#1a1a1a',
                  fontSize: '15px'
                }}>{t.naam}</p>
                <p style={{
                  color: '#7c3aed',
                  fontSize: '13px'
                }}>{t.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
