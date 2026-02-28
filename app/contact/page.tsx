"use client";

import { useState } from "react";

export default function ContactPage() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Bedankt ${naam}! Je bericht is verzonden.`);
  };

  return (
    <div className="max-w-[600px] mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-2 text-[#1a1a1a]">Contact</h1>

      <p className="text-gray-600 mb-8 text-base">Heb je een vraag? Vul het formulier in!</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1.5 font-medium text-gray-800">Naam</label>
          <input
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            required
            className="w-full py-2.5 px-3.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block mb-1.5 font-medium text-gray-800">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full py-2.5 px-3.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block mb-1.5 font-medium text-gray-800">Bericht</label>
          <textarea
            value={bericht}
            onChange={(e) => setBericht(e.target.value)}
            required
            rows={5}
            className="w-full py-2.5 px-3.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 border-0 rounded-lg text-base font-semibold cursor-pointer hover:bg-blue-600 transition-colors"
        >
          Verstuur Bericht
        </button>
      </form>
    </div>
  );
}
