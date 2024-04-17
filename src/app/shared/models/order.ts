export interface Order {
  productCode: string;
  customerEmail: string;
  price: number;
  cardNumber: string;
  couponCode?: string;
}
