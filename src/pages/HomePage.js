import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Retreats from '../components/Retreats';
import Stats from '../components/Stats';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Philosophy from '../components/Philosophy';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Stats />
      <About />
      <Philosophy />
      <Services />
      <Team />
      <Testimonials />
      <Retreats />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
};

export default HomePage;
