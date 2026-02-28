"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useRef } from "react";



export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const originalTitleRef = useRef<string>("");

  useEffect(() => {
    originalTitleRef.current = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "¡Tenemos novedades! 👀";
      } else {
        document.title = originalTitleRef.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitleRef.current;
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl
        showSpinner
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        zIndex={1600}
        showAtBottom={false}
      />

      <Navbar />
      {children}
      <Toaster />
      <Footer />

    </ThemeProvider>
  );
}