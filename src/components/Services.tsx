const Services = () => {
  const services = [
    {
      category: "Manicure Services",
      treatments: [
        { name: "Classic Manicure", duration: "45 min", price: "$35" },
        { name: "Gel Manicure", duration: "60 min", price: "$45" },
        { name: "French Manicure", duration: "50 min", price: "$40" },
        { name: "Luxury Spa Manicure", duration: "75 min", price: "$60" },
      ]
    },
    {
      category: "Pedicure Services",
      treatments: [
        { name: "Classic Pedicure", duration: "60 min", price: "$45" },
        { name: "Gel Pedicure", duration: "75 min", price: "$55" },
        { name: "Luxury Spa Pedicure", duration: "90 min", price: "$75" },
        { name: "Medical Pedicure", duration: "60 min", price: "$65" },
      ]
    },
    {
      category: "Nail Art & Extensions",
      treatments: [
        { name: "Nail Art Design", duration: "30 min", price: "$15+" },
        { name: "Acrylic Extensions", duration: "120 min", price: "$65" },
        { name: "Gel Extensions", duration: "90 min", price: "$70" },
        { name: "Nail Repair", duration: "15 min", price: "$10" },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Indulge in our comprehensive range of nail care services, 
              each designed to leave you feeling beautiful and serene.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((category, index) => (
              <div key={index} className="bg-card rounded-lg elegant-shadow overflow-hidden">
                <div className="bg-primary p-6">
                  <h3 className="text-2xl font-serif font-medium text-primary-foreground text-center">
                    {category.category}
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.treatments.map((treatment, treatmentIndex) => (
                      <div key={treatmentIndex} className="flex justify-between items-start border-b border-border pb-4 last:border-b-0 last:pb-0">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">
                            {treatment.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {treatment.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-medium text-gold">
                            {treatment.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-accent p-8 rounded-lg elegant-shadow max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                Special Packages Available
              </h3>
              <p className="text-muted-foreground mb-6">
                Ask about our monthly membership packages and special occasion packages 
                for bridal parties, birthdays, and corporate events.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>• Group discounts available</span>
                <span>• Loyalty rewards program</span>
                <span>• Gift certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;