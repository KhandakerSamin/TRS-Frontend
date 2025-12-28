import About from '@/components/Homepage/About';
import Hero from '@/components/Homepage/Hero';
import Beyond from '@/components/Homepage/Beyond';
import Team from '@/components/Homepage/Team';
import Newspaper from '@/components/Homepage/Newspaper';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Hero />
      <About />
      <Beyond />
      <Team />
      <Newspaper />
    </div>
  );
}
