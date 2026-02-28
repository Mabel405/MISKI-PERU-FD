"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        
        {/* USAMOS asChild PARA QUE NavigationMenuLink FUNCIONE CON Link DE NEXT.JS */}
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-xl font-semibold px-5 py-3")}>
            <Link href="/#about">Quiénes somos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-xl font-semibold px-5 py-3")}>
            <Link href="/#destacados">Productos destacados</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-xl font-semibold px-5 py-3")}>
            <Link href="/#favoritos">Categoría favorita</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-xl font-semibold px-5 py-3")}>
            <Link href="/#contacto">Contacto</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl font-semibold px-5 py-3">
            Regiones
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[440px] gap-4 p-6 md:w-[560px] md:grid-cols-2 lg:w-[680px]">
              <ListItem title="Costa" href="/category/costa">
                Platos frescos y marinos como ceviches, arroces y sudados.
              </ListItem>
              <ListItem title="Sierra" href="/category/sierra">
                Sabores andinos con carnes, tubérculos y recetas tradicionales.
              </ListItem>
              <ListItem title="Selva" href="/category/selva">
                Cocina amazónica con plátano, cecina y recetas de la selva peruana.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuList;



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-xl p-5 leading-none no-underline outline-none transition hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-semibold">{title}</div>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";