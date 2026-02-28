import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '80px 20px',
      textAlign: 'center',
      color: 'white',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '700px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '16px',
          lineHeight: '1.2'
        }}>
          Bouw Sneller met AI
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '32px',
          opacity: '0.9',
          lineHeight: '1.6'
        }}>
          Ontdek hoe je met Cursor en Next.js in minuten een professionele
          website bouwt. Van idee tot deployment in no-time.
        </p>
        <Link href="/about" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'white',
          color: '#764ba2',
          padding: '14px 28px',
          borderRadius: '9999px',
          fontWeight: '600',
          fontSize: '16px',
          textDecoration: 'none'
        }}>
          Meer Weten <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
