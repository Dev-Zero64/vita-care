import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import ActionButtons from "@/components/ActionButtons";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Carousel />
        <ActionButtons />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
