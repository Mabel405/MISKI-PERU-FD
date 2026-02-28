"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RestaurantCarousel from "@/components/ui/restaurant-carousel";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h1 className="text-4xl font-bold">Nuestra historia</h1>
        <p className="text-muted-foreground max-w-3xl">
          Miski Perú nace del amor por la gastronomía peruana y la unión de los
          sabores de la costa, sierra y selva. Nuestra cocina representa años de
          experiencia, tradición y pasión.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RestaurantCarousel />
      </motion.div>

      <Separator />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Misión</CardTitle>
          </CardHeader>
          <CardContent>
            Brindar una experiencia gastronómica auténtica y de calidad.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visión</CardTitle>
          </CardHeader>
          <CardContent>
            Ser un referente digital de la cocina peruana.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Valores</CardTitle>
          </CardHeader>
          <CardContent>
            Pasión, respeto, calidad y compromiso.
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}