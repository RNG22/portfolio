import Nav from './components/Nav';
import { About, Contact, Education, Experience, Footer, Hero, Impact, Projects, Stack, TechStrip } from './components/Sections';
import { useTheme } from './hooks';

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <TechStrip />
        <About />
        <Impact />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
