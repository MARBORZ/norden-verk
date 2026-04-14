import './App.css';
import { Header, Hero, Kolleksjonen, Materialer, Verkstedet, FooterCTA, Footer } from './components/sections';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <main className="w-full">
        <Header />
        <Hero />

        <div className="section-divider" />
        <Kolleksjonen />
        <div className="section-divider" />

        <Materialer />
        <Verkstedet />
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
