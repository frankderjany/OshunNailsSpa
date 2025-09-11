import { Instagram, Facebook, MessageCircle, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: 'https://www.instagram.com/oshunnailsspa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      facebook: 'https://facebook.com/oshunnailsspa',
      tiktok: 'https://tiktok.com/@oshunnailsspa',
      whatsapp: 'https://wa.me/+96170599348?text=Hi! I found you through your website.'
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
  <h3 className="text-3xl font-serif font-bold mb-4">
    Oshun Nails Spa
  </h3>
  <p className="text-background/80 mb-6 leading-relaxed">
    Where beauty meets tranquility. Experience the perfect blend of 
    luxury nail care and peaceful ambiance in our minimalist sanctuary.
  </p>
  <div className="flex space-x-4">
    <Button
      variant="outline"
      size="icon"
      className="border-background/30 hover:bg-background smooth-transition"
      onClick={() => handleSocialClick('instagram')}
    >
      <Instagram size={20} className="text-black" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      className="border-background/30 hover:bg-background smooth-transition"
      onClick={() => handleSocialClick('facebook')}
    >
      <Facebook size={20} className="text-black" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      className="border-background/30 hover:bg-background smooth-transition"
      onClick={() => handleSocialClick('tiktok')}
    >
      <Music size={20} className="text-black" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      className="border-background/30 hover:bg-background smooth-transition"
      onClick={() => handleSocialClick('whatsapp')}
    >
      <MessageCircle size={20} className="text-black" />
    </Button>
  </div>
</div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-serif font-medium mb-4">Quick Links</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-background/80 hover:text-background smooth-transition"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-background/80 hover:text-background smooth-transition"
                >
                  About Us
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-background/80 hover:text-background smooth-transition"
                >
                  Services
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-background/80 hover:text-background smooth-transition"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-serif font-medium mb-4">Contact</h4>
              <div className="space-y-3 text-background/80">
                <p>123 Oshun Street</p>
                <p>Beauty District, BD 12345</p>
                <p>+961 70 599 348</p>
                <p>hello@oshunnailsspa.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-background/20 place-items-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-background/60 text-sm mb-4 md:mb-0">
                © {currentYear} Powered by Omnivation
              </p>
            </div>
          </div>

          {/* WhatsApp Float Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              onClick={() => handleSocialClick('whatsapp')}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 elegant-shadow smooth-transition"
              size="icon"
            >
              <MessageCircle size={24} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;