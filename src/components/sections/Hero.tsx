import { motion } from 'framer-motion';
import { useLenis } from '../../hooks/useLenis';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const Hero = () => {
  const { lenis } = useLenis();

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el && lenis) lenis.scrollTo(el, { duration: 1.1, offset: -80 });
    else if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{ position: 'relative', width: '100%', marginTop: 80, overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1549738102-ef918f248ea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU2OTZ8&ixlib=rb-4.1.0&q=80&w=1920"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FAF9F6', opacity: 0.18 }} />

      <motion.div
        id="hero-content"
        style={{
          position: 'relative', zIndex: 1,
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 28, padding: '0 20px',
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div style={{ display: 'flex', alignItems: 'center', gap: 8 }} variants={item}>
          <div className="hero-badge-line" style={{ width: 32, height: 1, backgroundColor: '#C4A265' }} />
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 3, color: '#C4A265' }}>
            Sunnmøre / Oslo — Est. 2009
          </span>
          <div className="hero-badge-line" style={{ width: 32, height: 1, backgroundColor: '#C4A265' }} />
        </motion.div>

        {/* H1 — clamp адаптируется к экрану */}
        <motion.h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(52px, 11vw, 120px)',
            fontWeight: 400, fontStyle: 'italic',
            letterSpacing: -2, lineHeight: 0.9,
            color: '#FAF9F6', textAlign: 'center', margin: 0,
          }}
          variants={item}
        >
          Håndverk<br />som varer.
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="hero-sub"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: 'clamp(13px, 1.8vw, 17px)',
            letterSpacing: 1, lineHeight: 1.7,
            color: '#FAF9F6', textAlign: 'center',
            opacity: 0.9, maxWidth: 560, margin: 0,
          }}
          variants={item}
        >
          Eksklusive møbler skapt med respekt for naturen
          <br />
          og skandinavisk designtradisjon.
        </motion.p>

        {/* CTA */}
        <motion.div className="hero-cta" variants={item}>
          <motion.button
            onClick={scrollTo('kolleksjonen')}
            className="hero-btn-primary"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 13, letterSpacing: 3,
              color: '#FAF9F6', backgroundColor: '#2A2826',
              padding: '16px 40px', border: 'none', cursor: 'pointer',
            }}
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.97 }}
          >
            Se kolleksjonen
          </motion.button>

          <motion.a
            href="#kontakt"
            onClick={scrollTo('kontakt')}
            className="hero-btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ width: 28, height: 1, backgroundColor: '#FAF9F6', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, letterSpacing: 2, color: '#FAF9F6', whiteSpace: 'nowrap' }}>
              Bestill konsultasjon
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ScrollHint — скрывается на мобилке через CSS */}
      <motion.div
        className="hero-scroll-hint"
        style={{
          position: 'absolute', bottom: 40, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 1, height: 40, backgroundColor: '#FAF9F6', opacity: 0.5 }} />
        <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 9, letterSpacing: 3, color: '#FAF9F6', opacity: 0.5 }}>
          SCROLL
        </span>
      </motion.div>
    </section>
  );
};
