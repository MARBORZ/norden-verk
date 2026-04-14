import { motion } from 'framer-motion';

const products = [
  {
    label: 'EIK STOL №04', title: 'Eik Stol', price: 'fra kr 18 900',
    img: 'https://images.unsplash.com/photo-1712899979292-79209cbf3745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU3MzN8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'VALNØTT BORD', title: 'Valnøtt Bord', price: 'fra kr 42 500',
    img: 'https://images.unsplash.com/photo-1761330439356-48ccd62f7e49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU3Mzd8&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'SKULPTURELL HYLLE', title: 'Skulpturell Hylle', price: 'fra kr 12 400',
    img: 'https://images.unsplash.com/photo-1576069353653-21a2b29e3bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzYxNTU3NDB8&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export const Kolleksjonen = () => {
  return (
    <motion.section
      id="kolleksjonen"
      className="w-full bg-[#FAF9F6] flex flex-col"
      style={{ padding: 'clamp(60px, 7vw, 100px) clamp(20px, 4vw, 60px)', gap: 64 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      {/* Header */}
      <motion.div
        className="w-full flex items-end justify-between flex-wrap"
        style={{ gap: 24 }}
        variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
      >
        <div className="flex flex-col" style={{ gap: 16 }}>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 4, color: '#C4A265' }}>
            02 — KOLLEKSJONEN
          </span>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(44px, 5vw, 72px)',
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: -1,
            lineHeight: 0.95,
            color: '#2A2826',
            margin: 0,
          }}>
            Hvert stykke<br />er unikt.
          </h2>
        </div>
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 15,
          letterSpacing: 1,
          lineHeight: 1.8,
          color: '#2A2826',
          opacity: 0.6,
          maxWidth: 300,
          margin: 0,
        }}>
          Vi velger kun det fineste treet<br />fra bærekraftige skoger.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="w-full grid" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 24,
      }}>
        {products.map((p, i) => (
          <motion.div
            key={p.label}
            className="flex flex-col"
            variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1 } } }}
          >
            {/* Изображение — без зума, только opacity */}
            <motion.div
              style={{ height: 'clamp(280px, 35vw, 500px)', overflow: 'hidden' }}
              whileHover={{ opacity: 0.88 }}
              transition={{ duration: 0.3 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Info */}
            <div className="flex flex-col" style={{ gap: 8, paddingTop: 24 }}>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 4, color: '#C4A265' }}>
                {p.label}
              </span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 400, fontStyle: 'italic', color: '#2A2826' }}>
                {p.title}
              </span>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, letterSpacing: 1, color: '#2A2826', opacity: 0.5 }}>
                {p.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
