import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import WhatsappButton from "@/components/WhatsappButton";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miski Perú | Sabores de la Costa, Sierra y Selva",
  description:
    "Miski Perú es un restaurante que reúne los sabores de la costa, sierra y selva del Perú. Descubre nuestra carta y disfruta de la diversidad gastronómica peruana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
        <ClientLayout>
          {children}
          <WhatsappButton />
        </ClientLayout>
      </body>
    </html>
  );
}