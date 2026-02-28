import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-20 px-5 text-center text-white min-h-[500px] flex items-center justify-center">
      <div className="max-w-[700px]">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Bouw Sneller met AI
        </h1>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Ontdek hoe je met Cursor en Next.js in minuten een professionele
          website bouwt. Van idee tot deployment in no-time.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 bg-white text-[#764ba2] py-3.5 px-7 rounded-full font-semibold text-base no-underline hover:bg-gray-100 transition-colors"
        >
          Meer Weten <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
