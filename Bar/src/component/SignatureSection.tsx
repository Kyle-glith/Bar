import { useEffect, useRef, useState } from "react";
import sig from "../assets/Signature.jpg";
import sig4 from "../assets/Signature4.jpg";
import sig14 from "../assets/Signature14.jpg";
import sig5 from "../assets/Signature5.jpg";
import sig8 from "../assets/Signature8.jpg";
import sig13 from "../assets/Signature13.jpg";

const drinks = [
  {
    name: "The Golden Sip",
    description: "Our namesake creation — gold-infused aged rum, saffron honey, cardamom bitters, finished with edible gold leaf.",
    note: "House Favorite",
    image: sig,
  },
  {
    name: "Noir Velvet",
    description: "Activated charcoal gin, black sesame orgeat, butterfly pea flower, served in a smoke-filled glass.",
    note: "Most Mysterious",
    image: sig4,
  },
  {
    name: "Crimson Ember",
    description: "Barrel-aged mezcal, hibiscus reduction, blood orange, ancho chile tincture — bold and unforgettable.",
    note: "Bartender's Pick",
    image: sig14,
  },
  {
    name: "Citrus Serenade",
    description: "A refreshing blend of citrus vodka, yuzu, elderflower, and a hint of mint — a bright and lively choice.",
    note: "Guest Favorite",
    image: sig5,
  },
  {
    name: "Midnight Reverie",
    description: "A decadent mix of blackstrap rum, espresso, chocolate bitters, and a touch of vanilla — perfect for late-night indulgence.",
    note: "Seasonal Special",
    image: sig8,
  },
  {
    name: "Saffron Sunset",
    description: "A vibrant blend of saffron-infused gin, blood orange, and a splash of sparkling wine — a golden hour in a glass.",
    note: "New Arrival",
    image: sig13,
  },
];

const SignatureSection = () => {
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
    <section id="signature" ref={ref} className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Crafted with Passion</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Signature Creations</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {drinks.map((drink, i) => (
            <div
              key={drink.name}
              className={`border border-border bg-card/50 rounded-sm overflow-hidden transition-all duration-700 hover:border-primary/30 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-xl text-foreground">{drink.name}</h3>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-primary border border-primary/30 px-2 py-0.5 mb-3 inline-block">
                  {drink.note}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans mt-2">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
