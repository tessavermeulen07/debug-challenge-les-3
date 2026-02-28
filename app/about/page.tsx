export default function AboutPage() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h1 style={{
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '24px',
        color: '#1a1a1a'
      }}>Over Ons</h1>

      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        color: '#444',
        marginBottom: '20px'
      }}>
        Wij zijn een team van gepassioneerde developers die geloven in de
        kracht van AI-assisted development. Onze missie is om het bouwen
        van websites sneller en toegankelijker te maken voor iedereen.
      </p>

      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '40px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: '1',
          minWidth: '250px',
          padding: '24px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#333'
          }}>Onze Visie</h3>
          <p style={{
            color: '#666',
            lineHeight: '1.6'
          }}>
            AI maakt development niet makkelijker — het maakt het SNELLER.
            Je moet nog steeds begrijpen wat je bouwt.
          </p>
        </div>

        <div style={{
          flex: '1',
          minWidth: '250px',
          padding: '24px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#333'
          }}>Ons Team</h3>
          <p style={{
            color: '#666',
            lineHeight: '1.6'
          }}>
            Vier developers, twee designers, en een AI die nooit slaapt.
            Samen bouwen we de toekomst.
          </p>
        </div>

        <div style={{
          flex: '1',
          minWidth: '250px',
          padding: '24px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#333'
          }}>Contact</h3>
          <p style={{
            color: '#666',
            lineHeight: '1.6'
          }}>
            Vragen? Neem contact op via ons contactformulier of stuur
            een mail naar info@debugchallenge.nl.
          </p>
        </div>
      </div>
    </div>
  );
}
