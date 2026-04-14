import { useEffect, useRef, useState } from "react";
import about1 from "../assets/about1.jpg";
import about from "../assets/about.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Crafted with Soul</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={about1} alt="Bar interior" loading="lazy" className="w-full h-80 object-cover rounded-sm border border-border" />
            <img src={about} alt="Bartender crafting" loading="lazy" className="absolute -bottom-6 -right-6 w-48 h-48 object-cover rounded-sm border-2 border-primary/40 hidden md:block" />
          </div>

          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              Born from a passion for the art of mixology, The Golden Sip was founded with one belief — that a great cocktail is more than a drink. It's an experience, a memory, a moment.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Nestled in the heart of Seminyak, our bar blends old-world elegance with contemporary craft. Every detail, from the amber lighting to the hand-selected spirits, is curated to make your evening unforgettable.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div className="text-center">
                <p className="font-serif text-2xl gold-text-gradient mb-1">120+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Curated Spirits</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl gold-text-gradient mb-1">8</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Years of Craft</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl gold-text-gradient mb-1">4.9★</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
