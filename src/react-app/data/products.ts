export type ProductCondition = "Nova" | "Nova com pequeno defeito" | "Coleção antiga" | "Usada" | "Com defeito";
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
    image: ["/fotos/tshirt-treino-verde.jpeg", "/fotos/tshirt-treino-verdeatras.jpeg", "/fotos/tshirt-treino-verdenova.jpeg"]
  },
  {
    id: "35",
    name: "Culote Branco e Preto - Major Horse",
    category: "Culote",
    size: "8",
    condition: "Nova",
    observations: "Novo, nunca usado e ainda na etiqueta.",
    price: 170,
    originalPrice: 190,
    status: "Disponível",
    image: ["/fotos/culote-35.jpeg", "/fotos/culote-35.2.jpeg"]
  },
  {
    id: "38",
    name: "Camisa de Prova com Renda Verde - Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova",
    observations: "Nova, nunca usada.",
    price: 115,
    originalPrice: 135,
    status: "Disponível",
    image: ["/fotos/camisa-38.jpeg", "/fotos/camisa-38.2.jpeg"]
  },
  {
    id: "39",
    name: "Camisa de Prova com Renda Azul - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Nova",
    observations: "Nova, nunca usada.",
    price: 115,
    originalPrice: 135,
    status: "Disponível",
    image: ["/fotos/camisa-39.jpeg", "/fotos/camisa-39.2.jpeg"]
  },
  {
    id: "40",
    name: "Camisa de Prova Lilás - Major Horse",
    category: "Camisa de Prova",
    size: "12",
    condition: "Nova",
    observations: "Nova, nunca usada.",
    price: 95,
    originalPrice: 115,
    status: "Disponível",
    image: ["/fotos/camisa-40.jpeg"]
  },
  {
    id: "41",
    name: "Camisa de Prova Roxa - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Nova com pequeno defeito",
    observations: "Nova, nunca usada mas com pequeno rasgo na costura das costas.",
    price: 90,
    originalPrice: 120,
    status: "Disponível",
    image: ["/fotos/camisa-roxa-frente.jpeg", "/fotos/camisa-roxa-costas.jpeg", "/fotos/camisa-roxa-rasgo.jpeg"]
  },
  {
    id: "42",
    name: "Camisa de Prova Branca com Brilho e Manga Longa- Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova com pequeno defeito",
    observations: "Nova, nunca usada mas com algumas manchas de etiqueta (cola).",
    price: 160,
    originalPrice: 290,
    status: "Disponível",
    image: ["/fotos/camisa-42-frente.jpeg", "/fotos/camisa-42-mancha.jpeg","/fotos/camisa-42-costas.jpeg", "/fotos/camisa-42-manchas.jpeg"]
  },
  {
    id: "43",
    name: "Camisa de Prova Salmão- Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova com pequeno defeito",
    observations: "Nova, nunca usada mas com algumas mancha de caneta na cintura (Frente).",
    price: 120,
    originalPrice: 190,
    status: "Disponível",
    image: ["/fotos/camisa-43-frente.jpeg", "/fotos/camisa-43-mancha.jpeg","/fotos/camisa-43-costas.jpeg"]
  },
  {
    id: "44",
    name: "Camisa de Prova Branca e Salmão- Major Horse",
    category: "Camisa de Prova",
    size: "GG",
    condition: "Nova com pequeno defeito",
    observations: "Nova, nunca usada mas com algumas manchas de etiqueta (cola) na gola.",
    price: 100,
    originalPrice: 190,
    status: "Disponível",
    image: ["/fotos/camisa-44-frente.jpeg", "/fotos/camisa-44-mancha.jpeg","/fotos/camisa-44-costas.jpeg", "/fotos/camisa-44-manchas.jpeg","/fotos/camisa-44-manchass.jpeg"]
  },
  {
    id: "45",
    name: "Camisa de Prova Branca e Salmão- Major Horse",
    category: "Camisa de Prova",
    size: "G",
    condition: "Nova",
    observations: "Nova, nunca usada.",
    price: 130,
    originalPrice: 190,
    status: "Disponível",
    image: ["/fotos/camisa-45-frente.jpeg", "/fotos/camisa-45-costas.jpeg"]
  },
  {
    id: "46",
    name: "Camisa de Prova Branca com Brilho- Major Horse",
    category: "Camisa de Prova",
    size: "M",
    condition: "Nova, com pequeno defeito",
    observations: "Nova, nunca usada mas com manchas de etiqueta (cola) na cintura.",
    price: 140,
    originalPrice: 230,
    status: "Disponível",
    image: ["/fotos/camisa-46-frente.jpeg", "/fotos/camisa-46-costas.jpeg", "/fotos/camisa-46-mancha.jpeg", "/fotos/camisa-46-manchas.jpeg"]
  },
  {
    id: "47",
    name: "Culote Masculino- Major Horse",
    category: "Culote",
    size: "G",
    condition: "Nova, com pequeno defeito",
    observations: "Novo, nunca usado mas com manchas de etiqueta (cola) na barra e no bolso.",
    price: 250,
    originalPrice: 399,
    status: "Disponível",
    image: ["/fotos/culotemasc-frente.jpeg", "/fotos/culotemasc-costas.jpeg", "/fotos/culotemasc-frentee.jpeg", "/fotos/culotemasc-mancha.jpeg","/fotos/culotemasc-manchass.jpeg"]
  },
  {
    id: "48",
    name: "Culote Branco - Major Horse",
    category: "Culote",
    size: "PP",
    condition: "Nova, com pequeno defeito",
    observations: "Novo, nunca usado mas com pequenas manchas no joelho e na barra.",
    price: 250,
    originalPrice: 399,
    status: "Disponível",
    image: ["/fotos/culote-frente.jpeg", "/fotos/culote-costas.jpeg", "/fotos/culote-mancha.jpeg","/fotos/culote-manchass.jpeg"]
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
