const Services = () => {
  const services = [
    {
      category: "Manicure Services (Women - Men)",
      treatments: [
        { name: "Classic Manicure", duration: "35 min", price: "$10 – $15" },
        { name: "Deluxe Manicure", duration: "60 min", price: "$25 – $30" },
        { name: "Russian Manicure (+ Polish)", duration: "45 min", price: "$13 – $18" },
        { name: "Gelish / Rubber Color Hands", duration: "60 min", price: "$25 - $28" },
      ]
    },
    {
      category: "Pedicure Services (Women - Men)",
      treatments: [
        { name: "Classic Pedicure", duration: "45 min", price: "$15 – $20" },
        { name: "Deluxe Pedicure", duration: "75 min", price: "$30 – $35" },
        { name: "Russian Pedicure (+ Polish)", duration: "55 min", price: "$18 – $23" },
        { name: "Medical Pedicure (Ingrown Nails)", duration: "60 min", price: "$25 – $30" },
      ]
    },
    {
      category: "Nail Extensions & Repair",
      treatments: [
        { name: "Full Set Gel", duration: "120 min", price: "$50" },
        { name: "Full Set Gel + Gelish", duration: "120 min", price: "$70" },
        { name: "Full Set Mousse (Victoria Vynn)", duration: "120 min", price: "$55" },
        { name: "Acrylic Full Set / Refill", duration: "90–120 min", price: "$35 – $70" },
        { name: "Nail Repair (Gel, Gelish or Polygel)", duration: "15 min", price: "$6 – $10" },
      ]
    },
    {
      category: "Lashes",
      treatments: [
        { name: "Lashes Full Set", duration: "90 min", price: "$60" },
        { name: "1–3 Week Refill", duration: "30–60 min", price: "$25 – $40" },
        { name: "Lash Lift + Tint", duration: "60 min", price: "$40" },
        { name: "Brow Lamination (+ Tint)", duration: "60 min", price: "$40 – $45" },
      ]
    },
    {
      category: "Make Up",
      treatments: [
        { name: "Full Make Up", duration: "90 min", price: "$70" },
        { name: "Eye Make Up", duration: "45 min", price: "$50" },
        { name: "Fake Lashes", duration: "15 min", price: "$10" },
      ]
    },
    {
      category: "Threading",
      treatments: [
        { name: "Eyebrow", duration: "10 min", price: "$6" },
        { name: "Upper Lip", duration: "5 min", price: "$3" },
        { name: "Chin", duration: "10 min", price: "$3" },
        { name: "Sideburns", duration: "15 min", price: "$6" },
        { name: "Full Face", duration: "20 min", price: "$15" },
      ]
    },
    {
      category: "Waxing",
      treatments: [
        { name: "Full Bikini", duration: "30 min", price: "$15" },
        { name: "Brazilian (Bikini Line)", duration: "30 min", price: "$7" },
        { name: "Full Legs / Half Legs", duration: "45–60 min", price: "$10 – $18" },
        { name: "Full Arms / Half Arms", duration: "30–45 min", price: "$7 – $12" },
        { name: "Under Arms", duration: "15 min", price: "$5" },
        { name: "Back / Belly", duration: "20–30 min", price: "$7 – $9" },
        { name: "Full Face", duration: "30 min", price: "$20" },
        { name: "Full Waxing (Arms, Legs, Underarms, Bikini)", duration: "90 min", price: "$42" },
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
              Explore our complete range of beauty and nail care services designed 
              to leave you feeling confident, elegant, and refreshed.
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

          
        </div>
      </div>
    </section>
  );
};

export default Services;