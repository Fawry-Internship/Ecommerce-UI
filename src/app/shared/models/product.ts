export interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  categoryName: string;
  brand: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}
