import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const Materialer = () => {
  return (
    <motion.section
      id="materialer"
      className="w-full flex flex-col"
      style={{ backgroundColor: '#EAE0CE', padding: '80px 60px 100px 60px', gap: 40 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
    >
      {/* matTop */}
      <motion.div
        className="w-full flex items-end justify-between"
        style={{ gap: 32, flexWrap: 'wrap' }}
        variants={fadeUp}
      >
        <div className="flex flex-col" style={{ gap: 20 }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 3, color: '#8B5E2E' }}>
            03 — MATERIALER
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 88,
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 0.92,
            color: '#1A1410',
            margin: 0,
          }}>
            Eik. Lin.<br />Messing.
          </h2>
        </div>

        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 13,
          letterSpacing: 1,
          lineHeight: 1.8,
          color: '#1A1410',
          opacity: 0.55,
          width: 300,
          margin: 0,
        }}>
          Vi bruker kun naturlige materialer med sjel — tre som har levd, lin som puster,
          og messing som eldes med verdighet.
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.8 } } }}
        style={{ height: 1, backgroundColor: '#D4B87A', width: '100%' }}
      />

      {/* MatGrid — фиксированная высота 580px */}
      <motion.div
        variants={fadeUp}
        className="mat-grid"
        style={{ display: 'flex', gap: 6, height: 580 }}
      >
        {/* Левая большая картинка: width 650 */}
        <motion.div
          style={{ flexShrink: 0, width: 650, height: '100%', overflow: 'hidden', outline: '1px solid rgba(184,160,96,0.376)' }}
          whileHover={{ opacity: 0.88 }}
          transition={{ duration: 0.35 }}
        >
          <img
            src="https://images.unsplash.com/photo-1675767443637-f35f2653b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU3NTR8&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Eik" className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Правая колонка: 2 картинки */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            'https://images.unsplash.com/photo-1545042746-ec9e5a59b359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU3NTV8&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1737958416936-e81444723295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU3NTZ8&ixlib=rb-4.1.0&q=80&w=1080',
          ].map((src, i) => (
            <motion.div
              key={i}
              style={{ flex: 1, overflow: 'hidden', outline: '1px solid rgba(184,160,96,0.376)' }}
              whileHover={{ opacity: 0.88 }}
              transition={{ duration: 0.35 }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
