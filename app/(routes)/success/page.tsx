"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-8 sm:flex-row items-center">
                <div className="flex justify-center md:min-w-[400px]">
                    {/* Asegúrate de tener una imagen que represente comida o éxito en tu carpeta public */}
                    <Image 
                        src="/banners/chefs.jpg" 
                        alt="Pedido Exitoso" 
                        width={400} 
                        height={600} 
                        className="rounded-lg shadow-lg" 
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-green-600">¡Pedido Recibido! 🍴</h1>
                    
                    <p className="my-4 text-lg">
                        ¡Gracias por elegirnos! Nuestro equipo de cocina ya recibió tu orden y está seleccionando los ingredientes más frescos para empezar a preparar tus platos con todo el sabor que nos caracteriza.
                    </p>
                    
                    <p className="my-3">
                        En breve, tu pedido estará listo para salir. Siéntate, relájate y prepárate para disfrutar de una experiencia culinaria increíble directamente en tu mesa.
                    </p>
                    
                    <p className="my-3 font-semibold italic">
                        ¡Gracias por confiar en nuestra sazón!
                    </p>

                    <div className="mt-6">
                        <Button 
                            className="px-8 py-6 text-lg" 
                            onClick={() => router.push("/")}
                        >
                            Volver al Menú
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;