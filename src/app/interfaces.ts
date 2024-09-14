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

export interface ProductView {
  id: number;
  name: string;
  category: string;
  reviews: Review[];
  rating: number;
  totalUserRated: number;
  description: string;
  brand: string;
  relatedProduct: Product[];
  inBox: string;
  defaultColor: string;
  defaultSize: string;
  variants: ProductVariant[]
}

export interface Review {
  id: number;
  email?: string | null;
  fullName: string;
  rating: number;
  message: string;
  images: string[];
  sellerReply?: string | null;
  profileImage: string;
}

export interface ProductVariant {
  productId: number;
  color: string;
  size: string;
  newPrice: number;
  oldPrice?: number | null;
  images: string[];
  quantity: number;
}
