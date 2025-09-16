import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+96170599348?text=Hi! I would like to get in touch with Oshun Nails Spa.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Visit Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to experience tranquility? We're here to help you look and feel your best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg elegant-shadow">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        123 Oshun Street<br />
                        Beauty District, BD 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                      +961 70 599 348
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white smooth-transition"
                  >
                    Message us on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg elegant-shadow">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Booking Information
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Advance Booking:</strong> We recommend booking 
                    at least 24 hours in advance to secure your preferred time slot.
                  </p>
                  <p>
                    <strong className="text-foreground">Cancellation Policy:</strong> Please provide 
                    at least 4 hours notice for cancellations to avoid fees.
                  </p>
                  <p>
                    <strong className="text-foreground">Walk-ins:</strong> Welcome based on availability, 
                    but appointments take priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-lg elegant-shadow overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin size={48} className="mx-auto mb-4 opacity-75" />
                  <h3 className="text-xl font-serif font-medium mb-2">Find Us Here</h3>
                  <p className="opacity-75">Interactive map coming soon</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-foreground mb-4">
                  Easy to Find
                </h3>
                <p className="text-muted-foreground mb-4">
                  Located in the heart of the Beauty District, we're easily accessible 
                  by public transport and offer convenient parking options.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-primary/10 text-primary-foreground px-3 py-1 rounded-full">
                    Free Parking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;