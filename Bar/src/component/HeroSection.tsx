import bground3 from "../assets/bground3.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bground3} alt="Premium cocktail on dark marble bar" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase text-primary mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Premium Cocktail Experience
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <span className="gold-text-gradient">The Golden Sip</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 opacity-0 animate-fade-in font-sans" style={{ animationDelay: "0.8s" }}>
          Where artistry meets alchemy. Discover handcrafted cocktails in an atmosphere of refined elegance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          <a href="#reservations" className="px-8 py-3 gold-gradient text-primary-foreground font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90">
            Reserve a Table
          </a>
          <a href="#menu" className="px-8 py-3 border border-primary/40 text-primary font-sans text-sm tracking-widest uppercase hover:border-primary hover:bg-primary/5 transition-all duration-300">
            Explore Menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent mx-auto mb-2" />
        <p className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
