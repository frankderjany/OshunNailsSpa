import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const GallerySection = () => {
  const galleryImages = [
    {
      src: gallery1,
      alt: "Professional haircut service in progress"
    },
    {
      src: gallery2,
      alt: "Expert beard trimming and grooming"
    },
    {
      src: gallery3,
      alt: "Traditional straight razor shave"
    },
    {
      src: gallery4,
      alt: "Modern stylish haircut result"
    },
    {
      src: gallery5,
      alt: "Professional barber tools and equipment"
    },
    {
      src: gallery6,
      alt: "Satisfied client after premium service"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Gallery</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square bg-card"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;