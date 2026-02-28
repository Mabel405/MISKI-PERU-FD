"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Nosotros = () => {
  return (
    <section id="nosotros" className="w-full py-32 scroll-mt-40">
      <div className="max-w-[1400px] mx-auto px-8 space-y-32">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="text-sm px-5 py-1.5">
              Sobre nosotros
            </Badge>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
              Tradición peruana en cada plato
            </h1>

            <p className="text-muted-foreground text-xl lg:text-2xl leading-relaxed max-w-2xl">
              En <strong>Miski Perú</strong> creemos que la comida no solo
              alimenta, sino que cuenta historias. Nuestra propuesta nace del
              amor por la gastronomía peruana y del deseo de reunir en un solo
              lugar los sabores de la costa, sierra y selva.
            </p>

            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl">
              Buscamos que cada visita sea una experiencia cálida, donde puedas
              reconectar con los sabores de casa o descubrir nuevas
              combinaciones que te sorprendan.
            </p>
          </div>

        {/* Imagen grande */}
        <div>
          <Image
            src="/about/food-v-2.jpg"
            alt="Comida Peruana"
            width={900}
            height={600}
            className="rounded-3xl object-cover shadow-xl h-[520px] w-full"
          />
          </div>
        </div>

        <Separator />

        {/* BLOQUE EXTRA */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Image
            src="/about/tradition.png"
            alt="Tradición culinaria peruana"
            width={900}
            height={600}
            className="rounded-3xl object-cover shadow-xl h-[520px] w-full"
          />

          <div className="space-y-8 max-w-2xl">
            <Badge variant="secondary" className="text-sm px-5 py-1.5">
              Nuestra tradición
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Sabores que cuentan historias
            </h2>

            <p className="text-muted-foreground text-xl leading-relaxed">
              Cada plato que servimos nace de recetas heredadas, técnicas
              tradicionales y el cariño por la cocina peruana.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Cocinamos con paciencia, dedicación y orgullo por nuestras raíces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
