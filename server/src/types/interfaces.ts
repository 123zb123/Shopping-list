export interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Item {
    id: string;
    name: string;
    quantity: number;
    categoryId: string;
    orderId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Order {
  id: string;
  totalItems: number;
  createdAt: Date;
  updatedAt: Date;
}