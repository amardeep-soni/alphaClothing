export interface Product {
  image: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  category: string;
  rating: number;
  totalUserRated: number;
}
export interface FilterApplied {
  type: string,
  value: string
}
