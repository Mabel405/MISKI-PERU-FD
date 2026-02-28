"use client";

import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useState } from "react";

interface CartItemProps {
  product: ProductType & { quantity: number };
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeItem, updateQuantity } = useCart();
  const [localQty, setLocalQty] = useState(product.quantity);

  const increase = () => {
    const newQty = localQty + 1;
    setLocalQty(newQty);
    updateQuantity(product.id, newQty);
  };

  const decrease = () => {
    if (localQty > 1) {
      const newQty = localQty - 1;
      setLocalQty(newQty);
      updateQuantity(product.id, newQty);
    } else {
      removeItem(product.id);
    }
  };

  return (
    <li className="flex py-6 border-b">
      <ProductImageMinuature slug={product.slug} url={product.images[0].url} />

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>

          <ProductTasteOrigin taste={product.taste} origin={product.origin} />

          {/* Stepper de cantidad */}
          <div className="flex items-center mt-2 border rounded-md overflow-hidden w-max">
            <button
              onClick={decrease}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-4 py-1">{localQty}</span>
            <button
              onClick={increase}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;