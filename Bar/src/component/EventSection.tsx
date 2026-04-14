import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, Music } from "lucide-react";
import bground2 from "../assets/bground2.jpg";

const events = [
  {
    icon: Music,
    title: "Live Jazz Fridays",
    date: "Every Friday",
    time: "8:00 PM - 11:00 PM",
    desc: "Enjoy smooth jazz from acclaimed local artists while savoring our curated cocktail pairings.",
  },
  {
    icon: Calendar,
    title: "Ladies Night",
    date: "April 19, 2026",
    time: "6:00 PM - 8:00 PM",
    desc: "Where the night belongs to the ladies. Sip, shine, and sparkle all night long.",
  },
  {
    icon: Clock,
    title: "Golden Hour",
    date: "Tue - Thu",
    time: "5:00 PM - 7:00 PM",
    desc: "Enjoy select signature cocktails at special pricing during our exclusive happy hour.",
  },
];

const EventsSection = () => {
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
    <section id="events" ref={ref} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={bground2} alt="Elegant bar event" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">What's Happening</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Upcoming Events</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <div
              key={ev.title}
              className={`p-8 bg-card/80 backdrop-blur-sm border border-border rounded-sm transition-all duration-700 hover:border-primary/40 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <ev.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-serif text-lg text-foreground mb-2">{ev.title}</h3>
              <p className="text-xs tracking-wider uppercase text-primary mb-1 font-sans">{ev.date} · {ev.time}</p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-3">{ev.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
