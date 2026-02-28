
import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
  slug: string;
  url: string;
}

const ProductImageMiniature = ({ slug, url }: ProductImageMiniatureProps) => {
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

  return (
    <div
      onClick={() => router.push(`/product/${slug}`)}
      className="cursor-pointer flex-shrink-0" // Añadimos flex-shrink-0 para que no se aplaste
    >
      <img
        src={`${BASE_URL}${url}`}
        alt="Product"

        className="w-32 h-32 object-cover overflow-hidden rounded-md shadow-sm"
      />
    </div>
  );
};

export default ProductImageMiniature;