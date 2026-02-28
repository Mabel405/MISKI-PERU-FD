"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  { id: 1, image: "/banners/banner-1.jpg", link: "#" },
  { id: 2, image: "/banners/banner-2.jpg", link: "#" },
  { id: 3, image: "/banners/banner-3.jpg", link: "#" },
  { id: 4, image: "/banners/banner-4.jpg", link: "#" },
  { id: 5, image: "/banners/banner-5.jpg", link: "#" },
];

const CarouselImageBanner = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, image, link }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div className="w-full h-[220px] sm:h-[360px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-xl">
                
                {/* AQUÍ SE MUESTRA TU IMAGEN */}
                <img
                  src={image}
                  alt="Banner promocional"
                  className="w-full h-full object-cover"
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselImageBanner;