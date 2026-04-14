import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">404</p>
        <h1 className="font-serif text-4xl md:text-5xl gold-text-gradient mb-4">Page Not Found</h1>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-8">
          Halaman yang kamu cari tidak ditemukan.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 gold-gradient text-primary-foreground font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
