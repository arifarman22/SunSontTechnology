import { useCallback, useEffect, useRef, useState } from 'react';

export interface EmblaCarouselOptions {
  loop?: boolean;
  align?: 'start' | 'center' | 'end';
  dragFree?: boolean;
  containScroll?: 'trimSnaps' | 'keepSnaps' | false;
  slidesToScroll?: number;
  skipSnaps?: boolean;
  inViewThreshold?: number;
}

export interface EmblaCarouselApi {
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  canScrollNext: () => boolean;
  canScrollPrev: () => boolean;
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
  destroy: () => void;
}

export default function useEmblaCarousel(
  options: EmblaCarouselOptions = {}
): [React.RefObject<HTMLDivElement>, EmblaCarouselApi | undefined] {
  const emblaRef = useRef<HTMLDivElement>(null);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselApi | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaRef.current) return;
    const slides = emblaRef.current.querySelectorAll('.embla__slide');
    const nextIndex = (selectedIndex + 1) % slides.length;
    setSelectedIndex(nextIndex);
    
    // Scroll to the next slide
    slides.forEach((slide, index) => {
      const slideElement = slide as HTMLElement;
      if (index === nextIndex) {
        slideElement.style.transform = 'translateX(0%)';
        slideElement.style.opacity = '1';
      } else {
        slideElement.style.transform = `translateX(${(index - nextIndex) * 100}%)`;
        slideElement.style.opacity = '0';
      }
    });
  }, [selectedIndex]);

  const scrollPrev = useCallback(() => {
    if (!emblaRef.current) return;
    const slides = emblaRef.current.querySelectorAll('.embla__slide');
    const prevIndex = selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    
    // Scroll to the previous slide
    slides.forEach((slide, index) => {
      const slideElement = slide as HTMLElement;
      if (index === prevIndex) {
        slideElement.style.transform = 'translateX(0%)';
        slideElement.style.opacity = '1';
      } else {
        slideElement.style.transform = `translateX(${(index - prevIndex) * 100}%)`;
        slideElement.style.opacity = '0';
      }
    });
  }, [selectedIndex]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaRef.current) return;
    const slides = emblaRef.current.querySelectorAll('.embla__slide');
    if (index >= 0 && index < slides.length) {
      setSelectedIndex(index);
      
      // Scroll to the specified slide
      slides.forEach((slide, slideIndex) => {
        const slideElement = slide as HTMLElement;
        if (slideIndex === index) {
          slideElement.style.transform = 'translateX(0%)';
          slideElement.style.opacity = '1';
        } else {
          slideElement.style.transform = `translateX(${(slideIndex - index) * 100}%)`;
          slideElement.style.opacity = '0';
        }
      });
    }
  }, []);

  const selectedScrollSnap = useCallback(() => selectedIndex, [selectedIndex]);

  const scrollSnapList = useCallback(() => {
    if (!emblaRef.current) return [];
    const slides = emblaRef.current.querySelectorAll('.embla__slide');
    return Array.from({ length: slides.length }, (_, i) => i);
  }, []);

  const canScrollNextValue = useCallback(() => canScrollNext, [canScrollNext]);
  const canScrollPrevValue = useCallback(() => canScrollPrev, [canScrollPrev]);

  const on = useCallback((event: string, callback: () => void) => {
    // Simple event handling - in a real implementation this would be more robust
    if (event === 'select') {
      // Store the callback for later use
    }
  }, []);

  const off = useCallback((event: string, callback: () => void) => {
    // Remove event listener - in a real implementation this would be more robust
  }, []);

  const destroy = useCallback(() => {
    // Cleanup - in a real implementation this would clean up all resources
  }, []);

  useEffect(() => {
    if (emblaRef.current) {
      const slides = emblaRef.current.querySelectorAll('.embla__slide');
      const totalSlides = slides.length;
      
      setCanScrollPrev(selectedIndex > 0);
      setCanScrollNext(selectedIndex < totalSlides - 1);
      
      if (options.loop) {
        setCanScrollPrev(true);
        setCanScrollNext(true);
      }

      // Initialize the carousel by showing the first slide
      slides.forEach((slide, index) => {
        const slideElement = slide as HTMLElement;
        slideElement.style.position = 'absolute';
        slideElement.style.top = '0';
        slideElement.style.left = '0';
        slideElement.style.width = '100%';
        slideElement.style.height = '100%';
        slideElement.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        
        if (index === 0) {
          slideElement.style.transform = 'translateX(0%)';
          slideElement.style.opacity = '1';
        } else {
          slideElement.style.transform = `translateX(${index * 100}%)`;
          slideElement.style.opacity = '0';
        }
      });

      const api: EmblaCarouselApi = {
        scrollNext,
        scrollPrev,
        scrollTo,
        selectedScrollSnap,
        scrollSnapList,
        canScrollNext: canScrollNextValue,
        canScrollPrev: canScrollPrevValue,
        on,
        off,
        destroy
      };

      setEmblaApi(api);
    }
  }, [scrollNext, scrollPrev, scrollTo, selectedScrollSnap, scrollSnapList, canScrollNextValue, canScrollPrevValue, on, off, destroy, options.loop]);

  return [emblaRef, emblaApi];
}
