"use client";

import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 rounded-md hover:bg-accent transition">
          <Menu className="h-7 w-7" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="end"
        className="w-56 space-y-3 p-4"
      >
        <Link
          href="/category/selva"
          className="block text-base font-medium hover:underline"
        >
          Platos de la Selva
        </Link>

        <Link
          href="/category/sierra"
          className="block text-base font-medium hover:underline"
        >
          Platos de la Sierra
        </Link>

        <Link
          href="/category/costa"
          className="block text-base font-medium hover:underline"
        >
          Platos de la Costa
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;