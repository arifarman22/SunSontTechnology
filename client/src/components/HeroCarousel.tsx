import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    id: 1,
    title: ["BANKNOTE", "AND COIN", "DISPENSER", "ATM"],
    highlight: "DISPENSER",
    description: "Banknote and Coin Dispenser ATM System SKT-D1059A is specially designed for indoor or lobby scenarios where banknote and metal coin withdrawals are necessary.",
    model: "SKT-D1059A",
    background: "bg-gradient-to-r from-blue-900 to-blue-700",
    textColor: "text-blue-100",
    highlightColor: "text-accent",
    buttonColor: "bg-accent hover:bg-accent/90",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: ["HEALTH", "SCREENING", "KIOSK"],
    highlight: "SCREENING",
    description: "Health Screening Kiosk SKT-D1007 is one of our patent products in the Medical industry. We design and development from hardware to software.",
    model: "SKT-D1007",
    background: "bg-gradient-to-r from-green-900 to-teal-700",
    textColor: "text-green-100",
    highlightColor: "text-green-300",
    buttonColor: "bg-green-500 hover:bg-green-600",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: ["INNOVATION", "FOR A", "BETTER", "FUTURE"],
    highlight: "BETTER",
    description: "With secure and customized self-service solutions",
    background: "bg-gradient-to-r from-purple-900 to-indigo-800",
    textColor: "text-purple-100",
    highlightColor: "text-purple-300",
    isInnovation: true
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex h-screen">
          {slides.map((slide) => (
            <div key={slide.id} className={`embla__slide flex-none w-full ${slide.background} flex items-center`}>
              <div className="container mx-auto px-4">
                {slide.isInnovation ? (
                  <div className="text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                        {slide.title.map((line, index) => (
                          <span key={index}>
                            {line === slide.highlight ? (
                              <span className={slide.highlightColor}>{line}</span>
                            ) : (
                              line
                            )}
                            {index < slide.title.length - 1 && <br />}
                          </span>
                        ))}
                      </h1>
                      <p className={`text-2xl ${slide.textColor} max-w-2xl mx-auto`}>
                        {slide.description}
                      </p>
                      <div className="flex justify-center space-x-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors cursor-pointer" data-testid="button-watch-film">
                          <Play className="h-8 w-8 text-white mb-4 mx-auto" />
                          <div className="text-white font-semibold">Watch Short Film</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors cursor-pointer" data-testid="button-vr-view">
                          <div className="h-8 w-8 text-white mb-4 mx-auto">🥽</div>
                          <div className="text-white font-semibold">360° VR View</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6">
                      <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        {slide.title.map((line, index) => (
                          <span key={index}>
                            {line === slide.highlight ? (
                              <span className={slide.highlightColor}>{line}</span>
                            ) : (
                              line
                            )}
                            {index < slide.title.length - 1 && <br />}
                          </span>
                        ))}
                      </h1>
                      <p className={`text-xl ${slide.textColor} max-w-lg`}>
                        {slide.description}
                      </p>
                      <div className="flex space-x-4">
                        <button className={`${slide.buttonColor} text-white px-8 py-4 rounded-lg font-semibold transition-colors`} data-testid="button-learn-more">
                          LEARN MORE
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors" data-testid="button-view-specs">
                          VIEW SPECS
                        </button>
                      </div>
                    </div>
                    {slide.image && (
                      <div className="relative">
                        <img src={slide.image} alt={slide.title.join(" ")} className="rounded-2xl shadow-2xl" />
                        {slide.model && (
                          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{slide.model}</div>
                              <div className="text-sm text-muted-foreground">Model</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`}
            onClick={() => scrollTo(index)}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors"
        onClick={scrollPrev}
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors"
        onClick={scrollNext}
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </section>
  );
}
