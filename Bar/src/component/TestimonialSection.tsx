import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ariana W.",
    role: "Regular Guest",
    quote: "The Golden Sip is unlike any bar I've been to. The cocktails are works of art and the atmosphere is absolutely electric.",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Food Critic",
    quote: "Crimson Ember alone is worth the visit. The bartenders here are true craftsmen — every detail is intentional.",
    stars: 5,
  },
  {
    name: "Sofia R.",
    role: "Event Planner",
    quote: "We hosted our client dinner here and it was flawless. The team was professional, the ambiance was perfect.",
    stars: 5,
  },
];

const TestimonialSection = () => {
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
    <section id="testimonials" ref={ref} className="section-padding bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">What Guests Say</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Reviews</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 bg-card border border-border rounded-sm transition-all duration-700 hover:border-primary/40 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-serif text-foreground">{t.name}</p>
                <p className="text-xs tracking-widest uppercase text-primary mt-0.5 font-sans">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
