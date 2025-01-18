import {  Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";
import serv1 from "@/assets/images/serv_01.jpg"
import serv2 from "@/assets/images/serv_02.jpg"
import serv3 from "@/assets/images/serv_03.jpg"

interface Service {
  id: number;
  title: string;
  duration: number;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Engine Service",
    duration: 30,
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Donec cursus hendrerit eros, in pharetra lacus lobortis eu.",
    features: [
      "Seats washing",
      "Vacuum cleaning",
      "Interior wet cleaning",
      "Window wiping",
    ],
    image:
      serv1,
  },
  {
    id: 2,
    title: "Interior Detailing",
    duration: 45,
    description:
      "Professional interior detailing service that deep cleans and restores your vehicle's cabin to pristine condition.",
    features: [
      "Deep fabric cleaning",
      "Leather conditioning",
      "Dashboard polishing",
      "Air vent cleaning",
    ],
    image: serv2,
  },
  {
    id: 3,
    title: "Exterior Washing",
    duration: 25,
    description:
      "Complete exterior washing service that removes dirt, grime, and protects your vehicle's paint.",
    features: [
      "Pressure washing",
      "Hand drying",
      "Wheel cleaning",
      "Paint protection",
    ],
    image:serv3,
  },

];

export default function ServiceSlider() {
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 6000); // Auto-slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-[1200px] mx-auto bg-white rounded-lg overflow-hidden"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id}>
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-3/5 h-[300px] md:h-[500px]">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Navigation Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <CarouselPrevious className="relative left-0 right-auto h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white" />
                  <div className="text-white text-sm">
                    {current} / {count}
                  </div>
                  <CarouselNext className="relative left-0 right-auto h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 p-8 bg-white">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span>{service.duration} min</span>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full text-lg font-medium">
                  Get plan
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
