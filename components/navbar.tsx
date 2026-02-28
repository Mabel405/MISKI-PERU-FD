"use client";

import { ShoppingCart, User, Heart, BaggageClaim } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toogle-theme";
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between w-full px-6 md:px-12 py-6">
        {/* IZQUIERDA: BRAND */}
        <div className="flex justify-start pl-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight cursor-pointer leading-none"
            onClick={() => router.push("/")}
          >
            Miski <span className="text-primary">Perú</span>
          </h1>
        </div>

        {/* CENTRO: MENU */}
        <div className="hidden sm:flex justify-center flex-1">
          <MenuList />
        </div>

        {/* DERECHA: ICONOS */}
        <div className="flex items-center justify-end gap-4 pr-4">
          {cart.items.length === 0 ? (
            <ShoppingCart
              strokeWidth={1.5}
              className="cursor-pointer hover:scale-110 transition"
              onClick={() => router.push("/cart")}
            />
          ) : (
            <div
              className="flex items-center gap-1 cursor-pointer hover:scale-110 transition"
              onClick={() => router.push("/cart")}
            >
              <BaggageClaim strokeWidth={1.5} />
              <span className="text-sm font-semibold">
                {cart.items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          )}

          

          <User
            strokeWidth={1.5}
            className="cursor-pointer hover:scale-110 transition"
          />

          <ToggleTheme />
        </div>

        {/* MOBILE */}
        <div className="flex sm:hidden">
          <ItemsMenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
