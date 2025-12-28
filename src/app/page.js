import About from '@/components/Homepage/About';
import Hero from '@/components/Homepage/Hero';
export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Hero />
      <About />
    </div>
  );
}
