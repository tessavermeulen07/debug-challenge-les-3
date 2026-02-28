import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '40px 20px',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '32px'
      }}>
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '12px'
          }}>🚀 Debug Challenge</h3>
          <p style={{
            color: '#9ca3af',
            maxWidth: '300px',
            lineHeight: '1.6',
            fontSize: '14px'
          }}>
            Een project van NOVI Hogeschool om te leren
            debuggen met Cursor AI.
          </p>
        </div>

        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '12px'
          }}>Links</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
            <Link href="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Over Ons</Link>
            <Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Contact</Link>
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '12px'
          }}>NOVI Hogeschool</h3>
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
            AI Development Cursus<br/>
            Utrecht, Nederland
          </p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #374151',
        marginTop: '32px',
        paddingTop: '20px',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '13px'
      }}>
        © 2025 Debug Challenge — Les 3 Huiswerk
      </div>
    </footer>
  )
}
