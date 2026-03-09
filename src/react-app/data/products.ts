export type ProductCondition = "Nova com pequeno defeito" | "Coleção antiga" | "Usada" | "Com defeito";
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
  /** Preço original antes do desconto. Se informado e maior que price, mostra riscado no card. */
  originalPrice?: number;
  status: ProductStatus;
  /** Uma foto: use string. Várias fotos: use array de strings.
   *  Exemplos: "/fotos/peca.jpg"  ou  ["/fotos/peca1.jpg", "/fotos/peca2.jpg"]
   */
  image: string | string[];
}

export const products: Product[] = [
  {
    id: "2",
    name: "Camisa Azul Major Horse",
    category: "Camisa de Prova",
    size: "12",
    condition: "Nova",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 99,
    originalPrice: 120,
    status: "Disponível",
    image: ["/fotos/camisa-azul-majorhorse1.jpeg", "/fotos/camisa-azul-majorhorse2.jpeg"]
  },
  {
    id: "3",
    name: "Camisa Azul Major Horse com Brilho",
    category: "Camisa de Prova",
    size: "14",
    condition: "Nova",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 140,
    originalPrice: 170,
    status: "Disponível",
    image: "/fotos/camisa-tamanho14.jpeg"
  },
  {
    id: "4",
    name: "Camisa Verde - Major Horse",
    category: "Camisa de Treino",
    size: "P",
    condition: "Usada",
    observations: "Usada poucas vezes, em ótimo estado.",
    price: 70,
    originalPrice: 90,
    status: "Disponível",
    image: ["/fotos/camisa-verde-escuro.jpeg", "/fotos/camisa-verde-escuro2.jpeg"]
  },
  {
    id: "5",
    name: "Camisa Laranja - Major Horse",
    category: "Camisa de Treino",
    size: "P",
    condition: "Nova",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 65,
    originalPrice: 80,
    status: "Disponível",
    image: "/fotos/camisa-laranja.jpeg"
  },
  {
    id: "6",
    name: "Camisa Vermelha - Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 59,
    originalPrice: 70,
    status: "Disponível",
    image: "/fotos/camisa-vermelha.jpeg"
  },
  {
    id: "7",
    name: "Camisa Branca - Major Horse",
    category: "Camisa de Prova",
    size: "GG",
    condition: "Nova",
    observations: "Nunca usada, ainda na etiqueta.",
    price: 90,
    originalPrice: 110,
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
    price: 110,
    originalPrice: 120,
    status: "Disponível",
    image: ["/fotos/culote-usadoantigo.jpeg", "/fotos/culote-usadoantigo2.jpeg"]
  },
  {
    id: "10",
    name: "Camisa - Major Horse",
    category: "Camisa de Treino",
    size: "P",
    condition: "Usada",
    observations: "Usada poucas vezes, em ótimo estado.",
    price: 80,
    originalPrice: 100,
    status: "Disponível",
    image: ["/fotos/camisa-verdeclaro3.jpeg", "/fotos/camisa-verdeclaro.jpeg", "/fotos/camisa-verdeclaro2.jpeg"]
  },
  {
    id: "12",
    name: "Camisa de Prova - Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, com pequena e leve mancha na barra.",
    price: 120,
    originalPrice: 140,
    status: "Disponível",
    image: ["/fotos/camisa-brancamancha.jpeg", "/fotos/camisa-brancamancha2.jpeg"]
  },
  {
    id: "13",
    name: "Camisa de Prova Verde Militar - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Usada",
    observations: "Usada poucas vezes, em bom estado.",
    price: 90,
    originalPrice: 110,
    status: "Disponível",
    image: ["/fotos/camisa-prova-verdemilitar.jpeg"]
  },
  {
    id: "14",
    name: "Camisa de Prova Verde Militar - Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequenas manchas na gola e no ombro.",
    price: 70,
    originalPrice: 90,
    status: "Disponível",
    image: ["/fotos/camisa-14.jpeg", "/fotos/camisa-14.1.jpeg", "/fotos/camisa-14.2.jpeg"]
  },
  {
    id: "15",
    name: "Camisa de Prova Azul Marinho - Major Horse",
    category: "Camisa de Prova",
    size: "GG",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha na gola.",
    price: 65,
    originalPrice: 80,
    status: "Disponível",
    image: ["/fotos/camisa-15.jpeg", "/fotos/camisa-15.2.jpeg"]
  },
  {
    id: "16",
    name: "Camisa de Prova Rose - Major Horse",
    category: "Camisa de Prova",
    size: "M",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequenas manchas no ombro (cola, deve sair) e nas golas.",
    price: 59,
    originalPrice: 60,
    status: "Disponível",
    image: ["/fotos/camisa-16.jpeg", "/fotos/camisa-16.2.jpeg", "/fotos/camisa-16.3.jpeg"]
  },
  {
    id: "17",
    name: "Camisa de Prova Rose - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha no ombro.",
    price: 70,
    originalPrice: 100,
    status: "Disponível",
    image: ["/fotos/camisa-17.jpeg", "/fotos/camisa-17.2.jpeg"]
  },
  {
    id: "18",
    name: "Camisa de Prova Rose - Major Horse",
    category: "Camisa de Prova",
    size: "G",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha no ombro e cintura.",
    price: 59,
    originalPrice: 90,
    status: "Disponível",
    image: ["/fotos/camisa-18.jpeg", "/fotos/camisa-18.2.jpeg", "/fotos/camisa-18.3.jpeg"]
  },
  {
    id: "20",
    name: "Camisa de Treino Rose - Major Horse",
    category: "Camisa de Treino",
    size: "8",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha na cintura.",
    price: 75,
    originalPrice: 90,
    status: "Disponível",
    image: ["/fotos/camisa-20.jpeg", "/fotos/camisa-20.2.jpeg"]
  },
  {
    id: "21",
    name: "Camisa de Prova Azul - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Nova",
    observations: "Nova, nunca usada.",
    price: 100,
    originalPrice: 120,
    status: "Disponível",
    image: ["/fotos/camisa-21.jpeg"]
  },
  {
    id: "22",
    name: "Culote Bege - Major Horse",
    category: "Culote",
    size: "8",
    condition: "Nova",
    observations: "Novo, nunca usada e SEM GRIP.",
    price: 85,
    originalPrice: 95,
    status: "Disponível",
    image: ["/fotos/culote-22.jpeg", "/fotos/culote-22.2.jpeg"]
  },
  {
    id: "23",
    name: "Camisa de Prova Branca - Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha na barra.",
    price: 115,
    originalPrice: 135,
    status: "Disponível",
    image: ["/fotos/camisa-23.jpeg", "/fotos/camisa-23.2.jpeg"]
  },
  {
    id: "24",
    name: "Camisa de Prova Off-White - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Usada",
    observations: "Usada poucas vezes, em bom estado.",
    price: 70,
    originalPrice: 90,
    status: "Disponível",
    image: ["/fotos/camisa-24.jpeg"]
  },
  {
    id: "25",
    name: "Camisa de Treino Laranja - Major Horse",
    category: "Camisa de Treino",
    size: "P",
    condition: "Usada",
    observations: "Usada poucas vezes, em bom estado.",
    price: 70,
    originalPrice: 80,
    status: "Disponível",
    image: ["/fotos/camisa-25.jpeg"]
  },
  {
    id: "26",
    name: "Camisa de Prova Branca - Major Horse",
    category: "Camisa de Prova",
    size: "M",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha na gola/ombro.",
    price: 110,
    originalPrice: 130,
    status: "Disponível",
    image: ["/fotos/camisa-26.jpeg", "/fotos/camisa-26.2.jpeg"]
  },
  {
    id: "29",
    name: "Regata de Viscolaycra Lilás - Major Horse",
    category: "Camisa de Treino",
    size: "PP",
    condition: "Nova",
    observations: "Nunca usada.",
    price: 45,
    originalPrice: 50,
    status: "Disponível",
    image: ["/fotos/regata-lilas.jpeg", "/fotos/regata-lilás.2.jpeg"]
  },
  {
    id: "30",
    name: "Camisa de Prova Terracota - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Usada",
    observations: "Usada, mas em bom estado.",
    price: 65,
    originalPrice: 80,
    status: "Disponível",
    image: ["/fotos/camisa-terracota.jpeg"]
  },
  {
    id: "31",
    name: "Culote Branco MASCULINO - Major Horse",
    category: "Culote",
    size: "GG",
    condition: "Nova com pequeno defeito",
    observations: "Novo ainda na etiqueta, mas com pequena mancha no cós.",
    price: 79,
    originalPrice: 90,
    status: "Disponível",
    image: ["/fotos/culote-brancomasc3.jpeg", "/fotos/culote-brancomasc2.jpeg", "/fotos/culote-brancomasc.jpeg"]
  },
  {
    id: "32",
    name: "Regata Branca - Major Horse",
    category: "Camisa de Treino",
    size: "PP",
    condition: "Nova",
    observations: "Nova, nunca usada.",
    price: 79,
    originalPrice: 100,
    status: "Disponível",
    image: ["/fotos/regata-branca.jpeg"]
  },
  {
    id: "34",
    name: "T-shirt Treino - Major Horse",
    category: "Camisa de Treino",
    size: "6",
    condition: "Nova",
    observations: "Nova, nunca usada.",
    price: 39,
    originalPrice: 50,
    status: "Disponível",
    image: ["/fotos/tshirt-treino-verde.jpeg"]
  }
];

export const categories: ProductCategory[] = [
  "Culote",
  "Camisa de Prova", 
  "Camisa de Treino"
];

export const sizes = ["PP", "P", "M", "G", "GG", "6", "8", "12", "14"];

export const conditions: ProductCondition[] = [
  "Nova com pequeno defeito",
  "Nova",
  "Usada"
];

export const statuses: ProductStatus[] = ["Disponível", "Reservado", "Vendido"];
