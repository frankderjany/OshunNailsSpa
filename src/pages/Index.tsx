import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GallerySection from '@/components/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <GallerySection />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
