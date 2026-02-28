"use client"

import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-16">
        
        {/* Contenedor */}
        <div className="flex flex-col md:flex-row md:justify-between gap-20 text-center md:text-left">

          {/* IZQUIERDA: Información de contacto */}
          <div className="max-w-md mx-auto md:mx-0">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">
              INFORMACIÓN DE CONTACTO
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-8">
              Av. Abancay 123,<br />
              Lima – Perú.<br /><br />
              Telf.: 907 426 378 <br />
              Delivery: 980 022 311
            </p>
          </div>

          {/* DERECHA: Atención al cliente */}
          <div className="max-w-md mx-auto md:mx-0 md:text-right">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">
              ATENCIÓN AL CLIENTE
            </h3>
            <ul className="text-base sm:text-lg text-muted-foreground space-y-5">
              <li>
                <Link href="#" className="hover:underline">
                  Comprobante electrónico
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Libro de reclamaciones
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="my-12" />

        <span className="block text-center text-sm sm:text-base text-muted-foreground">
          &copy; 2026 <span className="font-semibold">Miski Perú</span>. Todos los derechos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer