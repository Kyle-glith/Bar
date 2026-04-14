import { useEffect, useRef, useState } from "react";
import bground4 from "../assets/bground4.jpg";

const ReservationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "6:00 PM", guests: "1 Guest", requests: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.date) e.date = "Please select a date";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-card border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors font-sans ${
      errors[field] ? "border-red-500/70 focus:border-red-500" : "border-border focus:border-primary"
    }`;

  return (
    <section id="reservations" ref={ref} className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Secure Your Spot</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Reservations</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`min-h-0 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={bground4} alt="Luxurious bar interior" loading="lazy" className="w-full h-[450px] object-cover rounded-sm border border-border" />
          </div>

          {submitted ? (
            <div className={`flex flex-col items-center justify-center text-center space-y-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center">
                <span className="text-primary text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-2">Reservation Received</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Thank you, <span className="text-primary">{form.name}</span>. We'll confirm your reservation at <span className="text-primary">{form.email}</span> shortly.
                </p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", date: "", time: "6:00 PM", guests: "1 Guest", requests: "" }); }}
                className="text-xs tracking-widest uppercase text-primary border border-primary/30 px-6 py-2 hover:bg-primary/10 transition-colors font-sans"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form className={`space-y-5 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Name</label>
                  <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputClass("name")} placeholder="Your name" />
                  {errors.name && <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={inputClass("email")} placeholder="Email address" />
                  {errors.email && <p className="text-red-400 text-xs mt-1 font-sans">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Date</label>
                  <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className={inputClass("date")} />
                  {errors.date && <p className="text-red-400 text-xs mt-1 font-sans">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Time</label>
                  <select value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors font-sans">
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Guests</label>
                <select value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))} className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors font-sans">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">Special Requests</label>
                <textarea rows={3} value={form.requests} onChange={e => setForm(f => ({ ...f, requests: e.target.value }))} className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none font-sans" placeholder="Any special requests or occasions?" />
              </div>
              <button type="submit" className="w-full py-3 gold-gradient text-primary-foreground font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90">
                Reserve Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
