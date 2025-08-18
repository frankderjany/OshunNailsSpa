import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-spa.jpg';

const Hero = () => {
  const handleBookNow = () => {
    window.open('https://wa.me/1234567890?text=Hi! I would like to book an appointment at Serenity Nails Spa.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
          Serenity
          <span className="block text-4xl md:text-6xl mt-2 text-gold">Nails Spa</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience luxury and tranquility in our minimalist sanctuary. 
          Where beauty meets serenity.
        </p>

        <Button 
          onClick={handleBookNow}
          size="lg"
          className="bg-foreground text-background hover:bg-gold hover:text-foreground smooth-transition elegant-shadow text-lg px-8 py-6 font-medium"
        >
          Book Now
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-foreground/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;