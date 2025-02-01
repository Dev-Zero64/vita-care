import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/lib/slides";

// Componente reutilizável para os controles de navegação
const CarouselControls = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </>
  );
};

// Componente reutilizável para os indicadores de slides
const CarouselIndicators = ({
  currentSlide,
  slidesCount,
  onChange,
}: {
  currentSlide: number;
  slidesCount: number;
  onChange: (index: number) => void;
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            currentSlide === index ? "bg-white" : "bg-white/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Função para voltar ao slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Configuração do autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Controles de navegação */}
      <CarouselControls onPrev={prevSlide} onNext={nextSlide} />

      {/* Indicadores de slides */}
      <CarouselIndicators
        currentSlide={currentSlide}
        slidesCount={slides.length}
        onChange={setCurrentSlide}
      />
    </div>
  );
};

export default Carousel;
