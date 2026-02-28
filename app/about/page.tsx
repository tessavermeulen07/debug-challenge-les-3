export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-6 text-[#1a1a1a]">Over Ons</h1>

      <p className="text-lg leading-loose text-gray-600 mb-5">
        Wij zijn een team van gepassioneerde developers die geloven in de
        kracht van AI-assisted development. Onze missie is om het bouwen
        van websites sneller en toegankelijker te maken voor iedereen.
      </p>

      <div className="flex gap-5 mt-10 flex-wrap">
        <div className="flex-1 min-w-[250px] p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Onze Visie</h3>
          <p className="text-gray-600 leading-relaxed">
            AI maakt development niet makkelijker — het maakt het SNELLER.
            Je moet nog steeds begrijpen wat je bouwt.
          </p>
        </div>

        <div className="flex-1 min-w-[250px] p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Ons Team</h3>
          <p className="text-gray-600 leading-relaxed">
            Vier developers, twee designers, en een AI die nooit slaapt.
            Samen bouwen we de toekomst.
          </p>
        </div>

        <div className="flex-1 min-w-[250px] p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Contact</h3>
          <p className="text-gray-600 leading-relaxed">
            Vragen? Neem contact op via ons contactformulier of stuur
            een mail naar info@debugchallenge.nl.
          </p>
        </div>
      </div>
    </div>
  );
}
