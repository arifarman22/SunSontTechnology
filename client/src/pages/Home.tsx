import Navbar from "@/components/navigation/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <ProductCategories />
      <AboutSection />
      <Footer />
    </div>
  );
}
