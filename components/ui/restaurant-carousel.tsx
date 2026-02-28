"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const images = [
  "/about/restaurant.jpg",
  "/about/kitchen.jpg",
  "/about/team.jpg",
];

export default function RestaurantCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src) => (
            <div className="min-w-full" key={src}>
              <Image
                src={src}
                alt="Restaurante Miski Perú"
                width={800}
                height={500}
                className="h-[400px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <Button variant="outline" onClick={() => emblaApi?.scrollPrev()}>
          ◀
        </Button>
        <Button variant="outline" onClick={() => emblaApi?.scrollNext()}>
          ▶
        </Button>
      </div>
    </div>
  );
}