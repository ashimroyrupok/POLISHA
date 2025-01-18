import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/constant";

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => resolve(slide.image);
          img.onerror = reject;
        });
      });

      const loadedImages = await Promise.all(imagePromises);
      setLoadedImages(loadedImages);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || loadedImages.length !== slides.length) return;

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    timerRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, loadedImages.length]);

  const nextSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (loadedImages.length !== slides.length) {
    return (
      <div className="h-screen w-full bg-gray-900 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all transition-opacity duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-red-500 text-xl font-semibold tracking-wider  mb-2"
            >
              {slides[currentSlide].title}
            </motion.p>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-8xl font-bold text-white mb-6"
            >
              {slides[currentSlide].heading}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-200 max-w-xl mb-8"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 mt-6"
            >
              <button className="  text-white  transition-all duration-500  flex justify-center  items-center gap-3  font-semibold px-12 py-5 bg-[#E81C2E] rounded-full">
                <span> Read more</span>
                <button
                  onClick={prevSlide}
                  className=" p-[2px] ml-2   rounded-full border border-white bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronRight className=" size-4" />
                </button>
              </button>


              <button className="  text-black  transition-all duration-500  flex justify-center items-center  gap-3  font-semibold px-12 py-5 bg-[#CCB686] rounded-full">
                <span> Order now</span>
                <button
                  onClick={prevSlide}
                  className=" p-[2px] ml-2   rounded-full border border-black bg-white/10 text-black hover:bg-white/20 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronRight className=" size-4" />
                </button>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute hidden lg:block left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border-2 border-white bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className=" size-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden lg:block right-4 top-1/2 -translate-y-1/2 p-3 border-2 border-white rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="size-7" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
    </div>
  );
}
