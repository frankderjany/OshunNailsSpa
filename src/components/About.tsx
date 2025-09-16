const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            About Oshun
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-6">
                Where Beauty Meets Tranquility
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Oshun Nails Spa, we believe that nail care is an art form. Our minimalist 
                sanctuary provides the perfect escape from the everyday, where you can indulge 
                in premium treatments designed to rejuvenate both your nails and your spirit.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our skilled technicians use only the finest products and techniques to ensure 
                that every visit leaves you feeling pampered, polished, and perfectly serene.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-serif font-bold text-foreground">Always Sterilized</div>
                  
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-serif font-bold text-foreground">Pure Elegance</div>
                  
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg elegant-shadow">
                <h4 className="text-xl font-serif font-medium text-foreground mb-3">
                  Premium Products
                </h4>
                <p className="text-muted-foreground">
                  We use only the highest quality, non-toxic nail products that are 
                  gentle on your nails while delivering exceptional results.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg elegant-shadow">
                <h4 className="text-xl font-serif font-medium text-foreground mb-3">
                  Expert Technicians
                </h4>
                <p className="text-muted-foreground">
                  Our certified nail technicians are passionate artists with years 
                  of experience in creating beautiful, lasting nail designs.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg elegant-shadow">
                <h4 className="text-xl font-serif font-medium text-foreground mb-3">
                  Serene Environment
                </h4>
                <p className="text-muted-foreground">
                  Our carefully designed space promotes relaxation and tranquility, 
                  making every visit a peaceful retreat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;