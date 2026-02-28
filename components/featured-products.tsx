"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import SkeletonSchema from "./skeletonSchema";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

const FeaturedProducts = () => {
  const { result, loading }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <section
      id="destacados"
      className="w-full py-32 scroll-mt-40"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight">
            Productos destacados
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Los favoritos de nuestros clientes 
          </p>
        </div>

        <Carousel>
          <CarouselContent className="-ml-6">
            {loading && <SkeletonSchema grid={3} />}

            {result?.map((product: ProductType) => {
              const { id, slug, images, productName, taste, origin } = product;

              return (
                <CarouselItem
                  key={id}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group rounded-3xl overflow-hidden border shadow-md hover:shadow-2xl transition-all duration-300">
                    <CardContent className="relative p-0">
                      {/* Imagen grande */}
                      <div
                        className="w-full h-[420px] bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}${images?.[0]?.url})`,
                        }}
                      />

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-8">
                        <IconButton
                          onClick={() => router.push(`/product/${slug}`)}
                          icon={<Expand size={24} />}
                          className="bg-white/95 hover:bg-white"
                        />
                        <IconButton
                          onClick={() => addItem(product)}
                          icon={<ShoppingCart size={24} />}
                          className="bg-white/95 hover:bg-white"
                        />
                      </div>
                    </CardContent>

                    {/* Info */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold leading-tight">
                        {productName}
                      </h3>

                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-black text-white dark:bg-white dark:text-black">
                          {taste}
                        </span>

                        <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-yellow-900 text-white">
                          {origin}
                        </span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="-left-16" />
          <CarouselNext className="-right-16 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProducts;