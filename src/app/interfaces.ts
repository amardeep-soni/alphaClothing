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

export interface CartView {
  // in C 'cart table' P 'with product it fetch from product'
  productId: number; // C
  image: string;  // P
  name: string;  // P
  quantity: number; // C
  price: number;  // P
  color: string;  // C
  size: string;  // C
  productQuantity: number;  // P
}

export interface ShippingAddress {
  id: number,
  name: string,
  state: string;
  city: string,
  address: string;
  phoneNumber1: string;
  phoneNumber2: string;
  isDefault: boolean;
}