import AboutSection from "../component/AboutSection";
import EventsSection from "../component/EventSection";
import Footer from "../component/Footer";
import GallerySection from "../component/GallerySection";
import HeroSection from "../component/HeroSection";
import MenuSection from "../component/MenuSection";
import Navbar from "../component/Navbar";
import ReservationSection from "../component/ReservationSection";
import SignatureSection from "../component/SignatureSection";
import TestimonialSection from "../component/TestimonialSection";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SignatureSection />
        <GallerySection />
        <EventsSection />
        <TestimonialSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
