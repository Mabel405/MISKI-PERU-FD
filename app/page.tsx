
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import Contacto from "@/components/contacto";
import FeaturedProducts from "@/components/featured-products";
import Nosotros from "@/components/nosotros";




export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      {/* Quienes SOMOS */}
      <section id="about">
        <Nosotros />
      </section>
      {/* PRODUCTOS DESTACADOS */}
      <section id="destacados">
        <FeaturedProducts />
      </section>
      {/* CATEGORÍA FAVORITA */}
      <section id="favoritos">
        <ChooseCategory />
      </section>
      {/* Contacto */}
      <section id="contacto">
        <Contacto />
      </section>
    </main>
  );
}