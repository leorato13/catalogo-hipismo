import { useState, useMemo } from "react";
import { products, ProductCategory, ProductCondition, ProductStatus } from "@/react-app/data/products";
import { ProductCard } from "@/react-app/components/ProductCard";
import { Filters } from "@/react-app/components/Filters";
import { HorseIcon } from "@/react-app/components/HorseIcon";
import { Input } from "@/react-app/components/ui/input";
import { Button } from "@/react-app/components/ui/button";
import { Search, MessageCircle } from "lucide-react";

// Configure your WhatsApp number here (with country code, no + or spaces)
const WHATSAPP_NUMBER = "5511996135855";

export default function HomePage() {
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
    return products.filter((product) => {
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
  }, [searchQuery, selectedCategory, selectedSize, selectedCondition, selectedStatus, priceRange]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {/* Title Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HorseIcon className="w-8 h-8 text-primary opacity-70" />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold text-foreground">
                    OUTLET - Catálogo de Peças
                  </h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    Hipismo
                  </p>
                </div>
              </div>
              
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 shadow-sm"
              >
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Oi! Gostaria de mais informações sobre as peças.")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Falar no WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Peças únicas (sem reposição). Pagamento e frete combinados via WhatsApp. 
              Envio para todo o Brasil.
            </p>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar peças..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card"
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
