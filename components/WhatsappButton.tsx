"use client";

import dynamic from 'next/dynamic';

const FloatingWhatsApp = dynamic(
  () => import('@digicroz/react-floating-whatsapp').then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp 
      phoneNumber="51907426378"
      accountName="Miski Perú" 
      chatMessage="¡Bienvenido! 😄 ¿Quieres ver nuestro menú o hacer un pedido?"
      statusMessage="En línea"
      placeholder="Escribe un mensaje..."
      allowClickAway={false} 
      allowEsc={true} 
      notification={true}
      notificationSound={true}
    />
  );
}