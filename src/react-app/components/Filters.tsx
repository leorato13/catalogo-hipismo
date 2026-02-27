import { categories, sizes, conditions, statuses, ProductCategory, ProductCondition, ProductStatus } from "@/react-app/data/products";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/react-app/components/ui/select";
import { Label } from "@/react-app/components/ui/label";
import { Button } from "@/react-app/components/ui/button";
import { X } from "lucide-react";

interface FiltersProps {
  selectedCategory: ProductCategory | "all";
  selectedSize: string | "all";
  selectedCondition: ProductCondition | "all";
  selectedStatus: ProductStatus | "all";
  priceRange: [number, number];
  onCategoryChange: (value: ProductCategory | "all") => void;
  onSizeChange: (value: string | "all") => void;
  onConditionChange: (value: ProductCondition | "all") => void;
  onStatusChange: (value: ProductStatus | "all") => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const priceRanges: { label: string; value: [number, number] }[] = [
  { label: "Todas", value: [0, 10000] },
  { label: "Até R$ 50", value: [0, 50] },
  { label: "R$ 50 - R$ 100", value: [50, 100] },
  { label: "R$ 100 - R$ 150", value: [100, 150] },
  { label: "R$ 150 - R$ 200", value: [150, 200] },
  { label: "Acima de R$ 200", value: [200, 10000] }
];

export function Filters({
  selectedCategory,
  selectedSize,
  selectedCondition,
  selectedStatus,
  priceRange,
  onCategoryChange,
  onSizeChange,
  onConditionChange,
  onStatusChange,
  onPriceRangeChange,
  onClearFilters,
  hasActiveFilters
}: FiltersProps) {
  return (
    <div className="bg-card rounded-xl p-4 border border-border/50 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-foreground">Filtros</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground gap-1 h-8"
          >
            <X className="w-3 h-3" />
            Limpar
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Categoria</Label>
          <Select value={selectedCategory} onValueChange={(v) => onCategoryChange(v as ProductCategory | "all")}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Tamanho</Label>
          <Select value={selectedSize} onValueChange={(v) => onSizeChange(v as string | "all")}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Condição</Label>
          <Select value={selectedCondition} onValueChange={(v) => onConditionChange(v as ProductCondition | "all")}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {conditions.map((cond) => (
                <SelectItem key={cond} value={cond}>{cond}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Faixa de Preço</Label>
          <Select 
            value={`${priceRange[0]}-${priceRange[1]}`} 
            onValueChange={(v) => {
              const [min, max] = v.split("-").map(Number);
              onPriceRangeChange([min, max]);
            }}
          >
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.label} value={`${range.value[0]}-${range.value[1]}`}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Status</Label>
          <Select value={selectedStatus} onValueChange={(v) => onStatusChange(v as ProductStatus | "all")}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Disponível" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>{status}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
