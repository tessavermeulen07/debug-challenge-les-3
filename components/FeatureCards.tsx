import { Zap, Shield, Rocket } from "lucide-react"

interface Feature {
  icon: React.ReactNode;
  titel: string;
  beschrijving: string;
}

const features: Feature[] = [
  {
    icon: <Zap size={32} />,
    titel: "Supersnel",
    beschrijving: "Bouw componenten in seconden met AI-powered code generation."
  },
  {
    icon: <Shield size={32} />,
    titel: "Betrouwbaar",
    beschrijving: "TypeScript en ESLint zorgen voor foutloze, veilige code."
  },
  {
    icon: <Rocket size={32} />,
    titel: "Deploy Direct",
    beschrijving: "Push naar GitHub en je site is live op Vercel binnen minuten."
  }
];

export default function FeatureCards() {
  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: '#f9fafb',
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
        }}>Waarom Dit Project?</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'inline-flex',
                padding: '12px',
                backgroundColor: '#ede9fe',
                borderRadius: '12px',
                marginBottom: '16px',
                color: '#7c3aed'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>{feature.titel}</h3>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>{feature.beschrijving}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
