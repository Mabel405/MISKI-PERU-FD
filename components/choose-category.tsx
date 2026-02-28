/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();

  return (
    <section
      id="favoritos"
      className="w-full py-32 scroll-mt-40"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight">
            Elige tu categoría favorita
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Sabores de la costa, sierra y selva del Perú 🇵🇪
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            result?.map((category: CategoryType) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Imagen */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainimage?.url}`}
                  alt={category.categoryName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* Texto */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {category.categoryName}
                  </h3>
                  <p className="text-white/80 mt-2">
                    Explorar categoría →
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseCategory;
