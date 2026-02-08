import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Globe } from "lucide-react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    id: 1,
    title: "Powering the Future of Banking",
    subtitle: "Advanced ATM and CDM Solutions",
    description: "Transform your banking operations with our intelligent cash management systems designed for security, efficiency, and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Explore Banking Solutions",
    ctaLink: "/products/banking",
    theme: "dark"
  },
  {
    id: 2,
    title: "Healthcare Innovation at Your Fingertips",
    subtitle: "Smart Kiosk Solutions for Modern Healthcare",
    description: "Streamline patient check-ins, reduce wait times, and enhance healthcare delivery with our cutting-edge self-service kiosks.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Discover Healthcare Tech",
    ctaLink: "/products/healthcare",
    theme: "light"
  },
  {
    id: 3,
    title: "Secure Payment Infrastructure",
    subtitle: "PCI-Compliant Security Solutions",
    description: "Protect your transactions with our certified encryption pin pads and full metal keyboards built for maximum security.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "View Security Products",
    ctaLink: "/products/security",
    theme: "dark"
  },
  {
    id: 4,
    title: "Next-Generation Self-Service",
    subtitle: "Customizable Kiosk Solutions",
    description: "From payment terminals to information kiosks, we deliver tailored solutions that enhance customer experience across industries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Learn More",
    ctaLink: "/about",
    theme: "light"
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  ];

  const changeLanguage = (langCode: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
    setShowLangMenu(false);
  };

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
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-[600px] mt-[104px] overflow-hidden">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Custom Language Selector */}
      <div className="absolute top-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center space-x-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm border border-gray-300 rounded-md hover:border-[#049fd9] hover:bg-white transition-all shadow-sm text-sm font-medium text-gray-700"
          >
            <Globe className="h-4 w-4 text-gray-600" />
            <span>Translate</span>
            <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors text-sm border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-gray-700">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex h-[600px]">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-none w-full relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  slide.theme === 'dark' 
                    ? 'bg-gradient-to-r from-black/80 via-black/60 to-transparent' 
                    : 'bg-gradient-to-r from-white/90 via-white/70 to-transparent'
                }`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto px-6 flex items-center">
                <div className="max-w-2xl space-y-6">
                  <div className={`text-sm font-semibold tracking-wider uppercase ${
                    slide.theme === 'dark' ? 'text-[#00bceb]' : 'text-[#049fd9]'
                  }`}>
                    {slide.subtitle}
                  </div>
                  <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                    slide.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {slide.title}
                  </h1>
                  <p className={`text-lg lg:text-xl max-w-xl ${
                    slide.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {slide.description}
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <Link href={slide.ctaLink}>
                      <button className="group flex items-center space-x-2 px-6 py-3 bg-[#049fd9] text-white font-semibold rounded hover:bg-[#00bceb] transition-all" data-testid="button-learn-more">
                        <span>{slide.cta}</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className={`px-6 py-3 font-semibold rounded border-2 transition-all ${
                        slide.theme === 'dark'
                          ? 'border-white text-white hover:bg-white hover:text-gray-900'
                          : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                      }`} data-testid="button-view-specs">
                        Contact Sales
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex ? 'w-8 bg-[#049fd9]' : 'w-2 bg-white/50 hover:bg-white'
            }`}
            onClick={() => scrollTo(index)}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all z-10"
        onClick={scrollPrev}
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all z-10"
        onClick={scrollNext}
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
