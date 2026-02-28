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
    <section className="py-[60px] px-5 bg-gray-50">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1a1a1a]">Waarom Dit Project?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 text-center shadow-sm">
              <div className="inline-flex p-3 bg-violet-100 rounded-xl mb-4 text-violet-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">{feature.titel}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.beschrijving}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
