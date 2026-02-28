"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-5 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-violet-600 no-underline">
          🚀 Debug Challenge
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/" className="text-gray-600 no-underline font-medium hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-600 no-underline font-medium hover:text-gray-900">Over Ons</Link>
          <Link href="/contact" className="text-gray-600 no-underline font-medium hover:text-gray-900">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
