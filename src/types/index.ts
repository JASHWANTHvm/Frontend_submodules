export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  colors: string[];
  sizes: string[];
  type: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomDesign {
  color: string;
  size: string;
  texture: string;
  design: string;
}

export interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
}