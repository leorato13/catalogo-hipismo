export type ProductCondition = "Nova com pequeno defeito" | "Coleção antiga" | "Usada";
export type ProductStatus = "Disponível" | "Reservado" | "Vendido";
export type ProductCategory = "Culote" | "Camisa de Prova" | "Camisa de Treino" | "Colete" | "Jaqueta" | "Acessório";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  size: string;
  condition: ProductCondition;
  observations: string;
  price: number;
  status: ProductStatus;
  /** Uma foto: use string. Várias fotos: use array de strings.
   *  Exemplos: "/fotos/peca.jpg"  ou  ["/fotos/peca1.jpg", "/fotos/peca2.jpg"]
   */
  image: string | string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Culote Feminino - Ar Equestrian",
    category: "Culote",
    size: "G",
    condition: "Usada",
    observations: "Usado poucas vezes, em ótimo estado.",
    price: 180,
    status: "Disponível",
    image: "/fotos/culote-ar-equestrian.jpeg"
  },
  {
    id: "2",
    name: "Camisa Azul Major Horse",
    category: "Camisa de Prova",
    size: "12",
    condition: "Coleção antiga",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 110,
    status: "Disponível",
    image: ["/fotos/camisa-azul-majorhorse1.jpeg", "/fotos/camisa-azul-majorhorse2.jpeg"]
  },
  {
    id: "3",
    name: "Camisa Azul Major Horse com Brilho",
    category: "Camisa de Prova",
    size: "14",
    condition: "Coleção antiga",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 160,
    status: "Disponível",
    image: "/fotos/camisa-tamanho14.jpeg"
  },
  {
    id: "4",
    name: "Camisa Verde - Major Horse",
    category: "Camisa de Treino",
    size: "P",
    condition: "Usado",
    observations: "Usada poucas vezes, em ótimo estado.",
    price: 90,
    status: "Disponível",
    image: ["/fotos/camisa-verde-escuro.jpeg", "/fotos/camisa-verde-escuro2.jpeg"]
  },
  {
    id: "5",
    name: "Camisa Laranja - Major Horse",
    category: "Camisa de Treino",
    size: "P",
    condition: "Coleção antiga",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 80,
    status: "Disponível",
    image: "/fotos/camisa-laranja.jpeg"
  },
  {
    id: "6",
    name: "Camisa Vermelha - Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Coleção antiga",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 80,
    status: "Disponível",
    image: "/fotos/camisa-vermelha.jpeg"
  },
  {
    id: "7",
    name: "Camisa Branca - Major Horse",
    category: "Camisa de Prova",
    size: "GG",
    condition: "Coleção antiga",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 100,
    status: "Disponível",
    image: "/fotos/camisa-branca.jpeg"
  },
  {
    id: "8",
    name: "Culote - Major Horse",
    category: "Culote",
    size: "P",
    condition: "Usada",
    observations: "Usado mas em bom estado.",
    price: 120,
    status: "Disponível",
    image: ["/fotos/culote-usadoantigo.jpeg", "/fotos/culote-usadoantigo2.jpeg"]
  },
  {
    id: "9",
    name: "Culote - Major Horse",
    category: "Culote",
    size: "P",
    condition: "Usada",
    observations: "Usado mas em bom estado.",
    price: 170,
    status: "Disponível",
    image: ["/fotos/culote-usadonovo1.jpeg", "/fotos/culote-usadonovo2.jpeg"]
  },
  {
    id: "10",
    name: "Camisa - Major Horse",
    category: "Camisa de Treino",
    size: "P",
    condition: "Usada",
    observations: "Usada poucas vezes, em ótimo estado.",
    price: 90,
    status: "Disponível",
    image: ["/fotos/camisa-verdeclaro3.jpeg", "/fotos/camisa-verdeclaro.jpeg", "/fotos/camisa-verdeclaro2.jpeg"]
  },
  {
    id: "11",
    name: "Culote - Major Horse",
    category: "Culote",
    size: "P",
    condition: "Usada",
    observations: "Usado em bom estado, com gripe um pouco gasto.",
    price: 140,
    status: "Disponível",
    image: ["/fotos/culote-gripegasto.jpeg", "/fotos/culote-gripegasto2.jpeg"]
  }
];

export const categories: ProductCategory[] = [
  "Culote",
  "Camisa de Prova", 
  "Camisa de Treino",
  "Colete",
  "Jaqueta",
  "Acessório"
];

export const sizes = ["PP", "P", "M", "G", "GG", "34", "36", "38", "40", "42", "44", "46"];

export const conditions: ProductCondition[] = [
  "Nova com pequeno defeito",
  "Coleção antiga",
  "Usada"
];

export const statuses: ProductStatus[] = ["Disponível", "Reservado", "Vendido"];
