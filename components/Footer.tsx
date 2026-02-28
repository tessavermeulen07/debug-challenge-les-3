import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 mt-[60px]">
      <div className="max-w-[1000px] mx-auto flex justify-between flex-wrap gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">🚀 Debug Challenge</h3>
          <p className="text-gray-400 max-w-[300px] leading-relaxed text-sm">
            Een project van NOVI Hogeschool om te leren
            debuggen met Cursor AI.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-gray-400 no-underline text-sm hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-gray-400 no-underline text-sm hover:text-gray-300">Over Ons</Link>
            <Link href="/contact" className="text-gray-400 no-underline text-sm hover:text-gray-300">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">NOVI Hogeschool</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            AI Development Cursus<br/>
            Utrecht, Nederland
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500 text-[13px]">
        © 2025 Debug Challenge — Les 3 Huiswerk
      </div>
    </footer>
  )
}
