import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export const FooterCTA = () => {
  return (
    // bg #2A2826, layout vertical, gap 48, padding [120, 60], alignItems center
    <motion.section
      id="kontakt"
      className="w-full flex flex-col items-center"
      style={{ backgroundColor: '#2A2826', padding: '120px 60px', gap: 48 }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* footerCtaH: width 900, 96px, lineHeight 0.9, letterSpacing -2, italic, center */}
      <motion.h2
        variants={fadeUp}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 96,
          fontWeight: 400,
          fontStyle: 'italic',
          letterSpacing: -2,
          lineHeight: 0.9,
          color: '#FAF9F6',
          textAlign: 'center',
          width: 900,
          margin: 0,
        }}
      >
        Bestill din
        <br />
        egne møbel.
      </motion.h2>

      {/* footerCtaSub: opacity 0.5, 14px, lineHeight 1.7, letterSpacing 1 */}
      <motion.p
        variants={fadeUp}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 1,
          lineHeight: 1.7,
          color: '#FAF9F6',
          textAlign: 'center',
          opacity: 0.5,
          margin: 0,
        }}
      >
        Vi tar imot konsultasjoner etter avtale. Hvert stykke er skreddersydd.
      </motion.p>

      {/* footerCtaBtn: bg #FAF9F6, padding [18, 48] */}
      <motion.button
        variants={fadeUp}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 13,
          fontWeight: 400,
          letterSpacing: 3,
          color: '#2A2826',
          backgroundColor: '#FAF9F6',
          padding: '18px 48px',
          border: 'none',
          cursor: 'pointer',
        }}
        whileHover={{ opacity: 0.9, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        Ta kontakt
      </motion.button>

      {/* footerOakLine: "—", opacity 0.4, #C4A265, Barlow Condensed, 24px */}
      <motion.span
        variants={fadeUp}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 24,
          fontWeight: 400,
          color: '#C4A265',
          opacity: 0.4,
        }}
      >
        —
      </motion.span>
    </motion.section>
  );
};
