"use client";

import { Separator } from "@/components/ui/separator";

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="container mx-auto px-4 py-32 space-y-24 scroll-mt-40"
    >
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
          Visítanos o contáctanos
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl">
          Estamos en el corazón de Lima. Pasa a visitarnos o escríbenos para
          reservas y consultas.
        </p>
      </div>

      <Separator />

      {/* Contenido principal */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Mapa */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Ubicación</h3>

          <div className="w-full h-[520px] rounded-3xl overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Av.%20Abancay%20123%20Lima%20Peru&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold">Dónde estamos</h3>

          <div className="rounded-3xl bg-muted/30 p-10 space-y-6 text-base sm:text-lg">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Dirección
              </p>
              <p className="font-semibold text-xl">
                Av. Abancay 123, Lima, Perú
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Horarios de atención
              </p>
              <p>Lunes a Viernes: 12:00 pm – 10:00 pm</p>
              <p>Sábados: 12:00 pm – 11:00 pm</p>
              <p>Domingos y feriados: 12:00 pm – 9:00 pm</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                WhatsApp
              </p>
              <p className="font-semibold text-xl">+51 907 426 378</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Correo
              </p>
              <p className="font-semibold text-xl">contacto@miskiperu.pe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;