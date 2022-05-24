export interface IPizza {
  id: number;
  category: number;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: Array<number>;
  title: string;
  types: Array<number>;
}
