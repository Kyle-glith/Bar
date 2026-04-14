import { MapPin, Phone, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="section-padding bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Visit Us</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <MapPin className="w-5 h-5 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-lg text-foreground mb-2">Location</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Seminyak, Jl Kayu Aya No.5<br />
              Bali, Indonesia 80361
            </p>
          </div>
          <div className="text-center">
            <Clock className="w-5 h-5 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-lg text-foreground mb-2">Hours</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Tue - Thu: 5 PM - 12 AM<br />
              Fri - Sat: 5 PM - 2 AM<br />
              Sun - Mon: Closed
            </p>
          </div>
          <div className="text-center">
            <Phone className="w-5 h-5 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-lg text-foreground mb-2">Contact</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              <a href="tel:0123456789" className="hover:text-primary transition-colors">012 345 6789</a><br />
              <a href="mailto:hello@thegoldensip.com" className="hover:text-primary transition-colors">hello@thegoldensip.com</a>
            </p>
          </div>
        </div>

        <div className="gold-divider-wide mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg gold-text-gradient">THE GOLDEN SIP</p>
          <p className="text-xs text-muted-foreground font-sans tracking-wider">© 2026 The Golden Sip. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><FaFacebookF size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter / X"><FaXTwitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
