const nav1 = ['Eik Stol №04', 'Valnøtt Bord', 'Skulpturell Hylle'];
const nav2 = ['Om oss', 'Verkstedet', 'Bestilling'];

export const Footer = () => (
  <footer style={{ width: '100%', backgroundColor: '#2A2826', display: 'flex', flexDirection: 'column' }}>
    {/* footerTop */}
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40, padding: '48px 60px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 280 }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 600, letterSpacing: 6, color: '#FAF9F6' }}>
          NORDEN VERK
        </span>
        <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 1, lineHeight: 1.7, color: '#FAF9F6', opacity: 0.4 }}>
          Møbelatelié. Sunnmøre / Oslo.
        </span>
      </div>

      {[{ heading: 'KOLLEKSJON', items: nav1 }, { heading: 'ATELIER', items: nav2 }].map(({ heading, items }) => (
        <div key={heading} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 10, letterSpacing: 3, color: '#C4A265' }}>
            {heading}
          </span>
          {items.map((label) => (
            <span key={label} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, letterSpacing: 1, color: '#FAF9F6', opacity: 0.5 }}>
              {label}
            </span>
          ))}
        </div>
      ))}
    </div>

    {/* Line */}
    <div style={{ height: 1, backgroundColor: '#C4A265', opacity: 0.15 }} />

    {/* Bottom */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '24px 60px' }}>
      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 1, color: '#FAF9F6', opacity: 0.25 }}>
        © 2025 Norden Verk AS. Alle rettigheter forbeholdt.
      </span>
      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 1, color: '#FAF9F6', opacity: 0.25 }}>
        Personvern · Vilkår
      </span>
    </div>
  </footer>
);
