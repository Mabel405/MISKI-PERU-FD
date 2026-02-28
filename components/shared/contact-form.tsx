"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form
      className="grid gap-4 max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Formulario enviado (demo). Luego lo conectamos a email 😉");
      }}
    >
      <Input placeholder="Tu nombre" required />
      <Input type="email" placeholder="Tu correo" required />
      <Textarea placeholder="Tu mensaje" rows={4} required />

      <Button type="submit" className="w-fit">
        Enviar mensaje
      </Button>
    </form>
  );
}