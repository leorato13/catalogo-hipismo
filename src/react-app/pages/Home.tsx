import { useState, useMemo } from "react";
import { products, Product, ProductCategory, ProductCondition, ProductStatus } from "@/react-app/data/products";
import { ProductCard } from "@/react-app/components/ProductCard";
import { Filters } from "@/react-app/components/Filters";
import { HorseIcon } from "@/react-app/components/HorseIcon";
import { Input } from "@/react-app/components/ui/input";
import { Button } from "@/react-app/components/ui/button";
import { Search, MessageCircle } from "lucide-react";

// Configure your WhatsApp number here (with country code, no + or spaces)
const WHATSAPP_NUMBER = "5511996135855";

// Logo no header: coloque a imagem em public/ (ex: public/logo.png) e use "/logo.png". Deixe "" para manter o ícone do cavalo.
const HEADER_LOGO = "/logo.png";

/** Embaralha o array (Fisher-Yates). A ordem muda a cada visita da página. */
function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function HomePage() {
  /** Produtos em ordem aleatória, definida uma vez ao carregar a página. */
  const [shuffledProducts] = useState<Product[]>(() => shuffleArray(products));

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [selectedSize, setSelectedSize] = useState<string | "all">("all");
  const [selectedCondition, setSelectedCondition] = useState<ProductCondition | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus | "all">("Disponível");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const hasActiveFilters = 
    selectedCategory !== "all" ||
    selectedSize !== "all" ||
    selectedCondition !== "all" ||
    selectedStatus !== "Disponível" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 10000 ||
    searchQuery !== "";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSize("all");
    setSelectedCondition("all");
    setSelectedStatus("Disponível");
    setPriceRange([0, 10000]);
  };

  const filteredProducts = useMemo(() => {
    return shuffledProducts.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.observations.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSize = selectedSize === "all" || product.size === selectedSize;
      const matchesCondition = selectedCondition === "all" || product.condition === selectedCondition;
      const matchesStatus = selectedStatus === "all" || product.status === selectedStatus;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesSize && matchesCondition && matchesStatus && matchesPrice;
    });
  }, [shuffledProducts, searchQuery, selectedCategory, selectedSize, selectedCondition, selectedStatus, priceRange]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-4">
          <div className="flex flex-col gap-2 sm:gap-4">
            {/* Title Section */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                {HEADER_LOGO ? (
                  <img src={HEADER_LOGO} alt="Logo" className="w-12 h-12 sm:w-20 sm:h-20 object-contain shrink-0" />
                ) : (
                  <HorseIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-70 shrink-0" />
                )}
                <div className="min-w-0">
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-tight">
                    OUTLET - Catálogo de Peças
                  </h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    Hipismo
                  </p>
                </div>
              </div>
              
              <Button
                asChild
                size="sm"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-1.5 sm:gap-2 shadow-sm shrink-0 text-xs sm:text-sm h-8 sm:h-9 px-2.5 sm:px-4"
              >
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Oi! Gostaria de mais informações sobre as peças.")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="hidden sm:inline">Falar no WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Subtitle - mais compacto no mobile */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-snug sm:leading-relaxed max-w-2xl">
              Peças únicas (sem reposição). Pagamento e frete via WhatsApp. Envio para todo o Brasil.
            </p>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar peças..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 sm:pl-10 bg-card h-9 sm:h-10 text-sm"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="mb-6">
          <Filters
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            selectedCondition={selectedCondition}
            selectedStatus={selectedStatus}
            priceRange={priceRange}
            onCategoryChange={setSelectedCategory}
            onSizeChange={setSelectedSize}
            onConditionChange={setSelectedCondition}
            onStatusChange={setSelectedStatus}
            onPriceRangeChange={setPriceRange}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? "peça encontrada" : "peças encontradas"}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                whatsappNumber={WHATSAPP_NUMBER}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <HorseIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">Nenhuma peça encontrada com os filtros selecionados.</p>
            <Button
              variant="outline"
              onClick={clearFilters}
              className="mt-4"
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <HorseIcon className="w-5 h-5 opacity-50" />
              <span className="text-sm">
                Venda informal de peças únicas. Pagamento e envio combinados via WhatsApp.
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Oi! Gostaria de mais informações sobre as peças.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
