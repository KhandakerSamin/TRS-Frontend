import About from '@/components/Homepage/About';
import Hero from '@/components/Homepage/Hero';
import Beyond from '@/components/Homepage/Beyond';
import Team from '@/components/Homepage/Team';
import Newspaper from '@/components/Homepage/Newspaper';
import Peoplesay from '@/components/Homepage/Peoplesay';
import Footer from '@/components/Global/Footer';
import Cta from '@/components/Homepage/Cta';
import SocialBrands from '@/components/Homepage/SocialBrands';
import ImageSlider from '@/components/Homepage/ImageSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Hero />
      <SocialBrands/>
      <About />
      <ImageSlider />
      <Peoplesay />
      <Beyond />
      <Team />
      <Newspaper />
      <Cta />
      <Footer />
    </div>
  );
}
