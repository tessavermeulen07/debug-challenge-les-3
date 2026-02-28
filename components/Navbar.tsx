"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '0 20px',
      position: 'sticky',
      top: '0',
      zIndex: '50'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#7c3aed',
          textDecoration: 'none'
        }}>
          🚀 Debug Challenge
        </Link>

        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            color: '#4b5563',
            textDecoration: 'none',
            fontWeight: '500'
          }}>Home</Link>
          <Link href="/about" style={{
            color: '#4b5563',
            textDecoration: 'none',
            fontWeight: '500'
          }}>Over Ons</Link>
          <Link href="/contact" style={{
            color: '#4b5563',
            textDecoration: 'none',
            fontWeight: '500'
          }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
