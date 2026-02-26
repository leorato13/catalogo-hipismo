import { useState } from "react";
import { Product } from "@/react-app/data/products";
import { Badge } from "@/react-app/components/ui/badge";
import { Button } from "@/react-app/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const statusColors = {
    "Disponível": "bg-green-100 text-green-800 border-green-200",
    "Reservado": "bg-amber-100 text-amber-800 border-amber-200",
    "Vendido": "bg-gray-100 text-gray-500 border-gray-200"
  };

  const conditionColors = {
    "Nova com pequeno defeito": "bg-blue-50 text-blue-700",
    "Coleção antiga": "bg-purple-50 text-purple-700",
    "Usada": "bg-stone-100 text-stone-700",
    "Com defeito": "bg-amber-50 text-amber-800"
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(price);
  };

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Oi! Tenho interesse na peça ${product.id}: ${product.name}. Tamanho: ${product.size}. Preço: ${formatPrice(product.price)}. Ainda está disponível?`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const isAvailable = product.status === "Disponível";
  const images = Array.isArray(product.image) ? product.image : [product.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted group">
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          className={`w-full h-full object-cover ${!isAvailable ? "opacity-60 grayscale-[30%]" : ""}`}
        />
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.preventDefault(); setCurrentImageIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute top-3 left-3">
          <Badge className={`${statusColors[product.status]} border font-medium`}>
            {product.status}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className={conditionColors[product.condition]}>
            {product.condition}
          </Badge>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-foreground leading-tight">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="px-2 py-1 bg-secondary rounded text-secondary-foreground font-medium">
            Tam. {product.size}
          </span>
          <span className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
        </div>

        {product.observations && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.observations}
          </p>
        )}

        <Button
          asChild
          className={`w-full gap-2 ${
            isAvailable 
              ? "bg-[#25D366] hover:bg-[#20BD5A] text-white" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          disabled={!isAvailable}
        >
          {isAvailable ? (
            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Quero essa peça
            </a>
          ) : (
            <span>
              <MessageCircle className="w-4 h-4" />
              {product.status}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
