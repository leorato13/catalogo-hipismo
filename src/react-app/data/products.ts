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
  },
  {
    id: "12",
    name: "Camisa de Prova - Major Horse",
    category: "Camisa de Prova",
    size: "PP",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, com pequena e leve mancha na barra.",
    price: 135,
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
    price: 100,
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
    price: 80,
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
    price: 70,
    status: "Disponível",
    image: ["/fotos/camisa-15.jpeg", "/fotos/camisa-14.2.jpeg"]
  },
  {
    id: "16",
    name: "Camisa de Prova Rose - Major Horse",
    category: "Camisa de Prova",
    size: "M",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequenas manchas no ombro (cola, deve sair) e nas golas.",
    price: 49,
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
    price: 80,
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
    price: 70,
    status: "Disponível",
    image: ["/fotos/camisa-18.jpeg", "/fotos/camisa-18.2.jpeg", "/fotos/camisa-18.3.jpeg"]
  },
  {
    id: "19",
    name: "Camisa de Prova Rose - Major Horse",
    category: "Camisa de Prova",
    size: "P",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha na gola.",
    price: 55,
    status: "Disponível",
    image: ["/fotos/camisa-19.jpeg", "/fotos/camisa-19.2.jpeg"]
  },
  {
    id: "20",
    name: "Camisa de Treino Rose - Major Horse",
    category: "Camisa de Treino",
    size: "8",
    condition: "Nova com pequeno defeito",
    observations: "Nunca usada, mas com pequena mancha na cintura.",
    price: 85,
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
    price: 110,
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
    price: 95,
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
    price: 135,
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
    price: 80,
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
    price: 80,
    status: "Disponível",
    image: ["/fotos/camisa-25.jpeg"]
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

export const sizes = ["PP", "P", "M", "G", "GG", "8", "12", "14"];

export const conditions: ProductCondition[] = [
  "Nova com pequeno defeito",
  "Coleção antiga",
  "Usada",
  "Com defeito"
];

export const statuses: ProductStatus[] = ["Disponível", "Reservado", "Vendido"];
