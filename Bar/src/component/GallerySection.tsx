import { useEffect, useRef, useState } from "react";
import Gallery from "../assets/Gallery.jpg";
import Gallery1 from "../assets/Gallery1.jpg";
import Gallery2 from "../assets/Gallery2.jpg";
import Gallery3 from "../assets/Gallery3.jpg";
import Gallery4 from "../assets/Gallery4.jpg";
import Gallery5 from "../assets/Gallery5.jpg";
import Gallery6 from "../assets/Gallery6.jpg";
import Gallery7 from "../assets/Gallery7.jpg";
import Gallery8 from "../assets/Gallery8.jpg";
import Gallery9 from "../assets/Gallery9.jpg";
import Gallery10 from "../assets/Gallery10.jpg";
import Gallery11 from "../assets/Gallery11.jpg";
import Gallery12 from "../assets/Gallery12.jpg";

const photos = [
  { src: Gallery, alt: "Cocktail" },
  { src: Gallery1, alt: "Drinks" },
  { src: Gallery2, alt: "Bar" },
  { src: Gallery3, alt: "Cocktail" },
  { src: Gallery4, alt: "Drinks" },
  { src: Gallery5, alt: "Bar" },
  { src: Gallery6, alt: "Cocktail" },
  { src: Gallery7, alt: "Drinks" },
  { src: Gallery8, alt: "Bar" },
  { src: Gallery9, alt: "Cocktail" },
  { src: Gallery10, alt: "Drinks" },
  { src: Gallery11, alt: "Bar" },
  { src: Gallery12, alt: "Cocktail" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Behind the Bar</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Gallery</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setSelected(photo.src)}
              className={`relative overflow-hidden cursor-pointer group aspect-square transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i < 8 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs tracking-widest uppercase text-foreground font-sans">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain border border-border"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors text-2xl font-light"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
