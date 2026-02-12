import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');
const productsFile = path.join(dataDir, 'products.json');
const ordersFile = path.join(dataDir, 'orders.json');

// Helper to ensure data directory exists
const ensureDataDir = () => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Order {
  id: string;
  date: string;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    zip: string;
  };
  items: {
    productId: number;
    quantity: number;
    priceConfirm: number; // Snapshot of price at purchase time
  }[];
  total: number;
  status: 'pending' | 'paid' | 'shipped';
}

export const getProducts = (): Product[] => {
  ensureDataDir();
  if (!fs.existsSync(productsFile)) return [];
  const fileData = fs.readFileSync(productsFile, 'utf-8');
  try {
    return JSON.parse(fileData);
  } catch (e) {
    return [];
  }
};

export const saveProducts = (products: Product[]) => {
  ensureDataDir();
  fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
};

export const getOrders = (): Order[] => {
  ensureDataDir();
  if (!fs.existsSync(ordersFile)) return [];
  const fileData = fs.readFileSync(ordersFile, 'utf-8');
  try {
    return JSON.parse(fileData);
  } catch (e) {
    return [];
  }
};

export const saveOrders = (orders: Order[]) => {
  ensureDataDir();
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
};

export const addOrder = (order: Order) => {
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
};

