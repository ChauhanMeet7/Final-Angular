export interface InvoiceItem {
  Items: string;
  quantity: number;
  price: number;
}

export interface Invoice {
  customerName: string;
  date: string;
  items: InvoiceItem[];
  taxRate: number;
}
