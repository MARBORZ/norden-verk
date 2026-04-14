import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from '../../hooks/useLenis';

const links = [
  { label: 'Kolleksjonen', href: 'kolleksjonen' },
  { label: 'Materialer',   href: 'materialer'   },
  { label: 'Verkstedet',   href: 'verkstedet'   },
  { label: 'Kontakt',      href: 'kontakt'       },
];

export const Header = () => {
  const { lenis } = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    setMenuOpen(false);
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { duration: 1.1, offset: -80 });
    else {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, width: '100%',
          height: 80, backgroundColor: '#FAF9F6', zIndex: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 60px', boxSizing: 'border-box',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Логотип */}
        <span
          onClick={scrollToTop}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 22, fontWeight: 600, letterSpacing: 6,
            color: '#2A2826', userSelect: 'none',
            padding: '16px 0', cursor: 'pointer',
          }}
        >
          NORDEN VERK
        </span>

        {/* Desktop nav */}
        <nav className="header-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={scrollToSection(link.href)}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13, letterSpacing: 2,
                color: '#2A2826', textDecoration: 'none',
                padding: '28px 20px', display: 'inline-block',
                opacity: 1, transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.45')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Бургер — только на мобилке */}
        <button
          className="header-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            display: 'none', // показывается через CSS на мобилке
            flexDirection: 'column', justifyContent: 'center',
            alignItems: 'center', gap: 5,
            width: 44, height: 44, background: 'none',
            border: 'none', cursor: 'pointer', padding: 0,
          }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: 24, height: 1.5, backgroundColor: '#2A2826', transformOrigin: 'center' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.18 }}
            style={{ display: 'block', width: 24, height: 1.5, backgroundColor: '#2A2826' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: 24, height: 1.5, backgroundColor: '#2A2826', transformOrigin: 'center' }}
          />
        </button>

        {/* Нижняя линия */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 1, backgroundColor: '#C4A265', opacity: 0.3,
        }} />
      </motion.header>

      {/* Mobile Menu Overlay — z-index выше всего */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: 80, left: 0, right: 0, bottom: 0,
              backgroundColor: '#FAF9F6', zIndex: 55,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: 12,
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={`#${link.href}`}
                onClick={scrollToSection(link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 42, fontWeight: 400, fontStyle: 'italic',
                  letterSpacing: -1, color: '#2A2826', textDecoration: 'none',
                  padding: '12px 40px', textAlign: 'center', display: 'block', width: '100%',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C4A265')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#2A2826')}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Декоративная линия снизу */}
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 1, backgroundColor: '#C4A265', opacity: 0.5 }} />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 3, color: '#C4A265' }}>
                EST. 2009
              </span>
              <div style={{ width: 40, height: 1, backgroundColor: '#C4A265', opacity: 0.5 }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
