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
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h1 style={{
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#1a1a1a'
      }}>Contact</h1>

      <p style={{
        color: '#666',
        marginBottom: '32px',
        fontSize: '16px'
      }}>Heb je een vraag? Vul het formulier in!</p>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            fontWeight: '500',
            color: '#333'
          }}>Naam</label>
          <input
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            fontWeight: '500',
            color: '#333'
          }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            fontWeight: '500',
            color: '#333'
          }}>Bericht</label>
          <textarea
            value={bericht}
            onChange={(e) => setBericht(e.target.value)}
            required
            rows={5}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        <button type="submit" style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Verstuur Bericht
        </button>
      </form>
    </div>
  );
}
