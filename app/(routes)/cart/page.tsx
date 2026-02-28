"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import { makePaymentRequest } from "@/api/payment";
import { useRouter } from "next/navigation";

export default function Page() {
  const { items, removeAll } = useCart();
  const router = useRouter();

  // CÁLCULO CORREGIDO: Precio x Cantidad
  const totalPrice = items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const buyMercadoPago = async () => {
    try {
      const res = await makePaymentRequest.post("/api/orders", {
        products: items.map((item) => ({
          id: item.id,
          quantity: item.quantity, // ENVIAMOS LA CANTIDAD REAL
        })),
      });

      const { init_point } = res.data;

      if (init_point) {
        window.open(init_point, '_blank');

        setTimeout(() => {
          removeAll();
          router.push("/success");
        }, 2000); 
      }
    } catch (error) {
      console.error("Error en la compra:", error);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:min-h-[80vh]">
      <h1 className="mb-5 text-3xl font-bold text-foreground">
        Carrito de Compras
      </h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && (
            <p className="text-muted-foreground">No hay productos en el carrito</p>
          )}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-card border border-border">
            <p className="mb-3 text-lg font-semibold text-foreground">
              Resumen del Pedido
            </p>
            <Separator className="bg-border" />
            <div className="flex justify-between gap-5 my-4">
              <p className="text-muted-foreground">Total del pedido</p>
              {/* AHORA MOSTRARÁ S/ 54.00 SI HAY 2 CHAUFAS */}
              <p className="font-semibold text-foreground">{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button 
                className="w-full"
                onClick={buyMercadoPago}
                disabled={items.length === 0}
                variant="default"
              >
                Pagar pedido
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}