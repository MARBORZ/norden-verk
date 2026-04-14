import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Verkstedet = () => {
  return (
    <section
      id="verkstedet"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FAF9F6',
        minHeight: 680,
      }}
    >
      {/* Фото: width 680px */}
      <motion.div
        style={{ flexShrink: 0, width: 680, overflow: 'hidden' }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="https://images.unsplash.com/photo-1766431066283-68e25b20ec27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU3NjF8&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Verkstedet"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </motion.div>

      {/* Контент — каждый элемент анимируется сам */}
      <div
        style={{
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '80px 64px', gap: 32,
        }}
      >
        <motion.span
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 4, color: '#C4A265' }}
        >
          04 — VERKSTEDET
        </motion.span>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: 40, height: 1, backgroundColor: '#C4A265' }}
        />

        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 60, fontWeight: 400, fontStyle: 'italic',
            letterSpacing: -1, lineHeight: 0.95, color: '#2A2826', margin: 0,
          }}
        >
          Fra skogen<br />til stuen din.
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: 15, letterSpacing: 1, lineHeight: 1.85,
            color: '#2A2826', opacity: 0.7, maxWidth: 460, margin: 0,
          }}
        >
          Vi forener tradisjonelt håndverk med moderne estetikk. Hvert møbel
          begynner sin reise i Sunnmøres skoger og fullføres av våre
          mesterhåndverkere i verkstedet vårt.
          <br /><br />
          Vi tar imot et begrenset antall bestillinger hvert år.
        </motion.p>

        <motion.a
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          href="#kontakt"
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            paddingTop: 20, textDecoration: 'none',
          }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
        >
          <div style={{ width: 28, height: 1, backgroundColor: '#2A2826' }} />
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, letterSpacing: 2, color: '#2A2826' }}>
            Besøk verkstedet
          </span>
        </motion.a>
      </div>
    </section>
  );
};
