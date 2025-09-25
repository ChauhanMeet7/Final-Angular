import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-invoiceeeeeee',
  imports: [CommonModule,FormsModule],
  templateUrl: './invoiceeeeeee.component.html',
  styleUrl: './invoiceeeeeee.component.css'
})
export class InvoiceeeeeeeComponent {
   customers = [
    { id: 1, name: 'Meet Chauhan', address: '69,bharuch' },
    { id: 2, name: 'Sneh Patel', address: '68,bharuch' }
  ];

  products = [
    { name: 'Product A', price: 100 },
    { name: 'Product B', price: 200 },
    { name: 'Product C', price: 150 }
  ];

  selectedCustomer: any = null;
  selectedProduct: any = null;
  selectedQuantity: number = 1;
  invoiceItems: any[] = [];

  invoiceDate: string = new Date().toISOString().substring(0, 10);
  invoiceNumber: string = 'INV-' + Math.floor(1000 + Math.random() * 9000);

  gstRate: number = 18; // %
  discountRate: number = 0; // %

  addProduct() {
    if (this.selectedProduct && this.selectedQuantity > 0) {
      const existing = this.invoiceItems.find(p => p.name === this.selectedProduct.name);
      if (existing) {
        existing.quantity += this.selectedQuantity;
        existing.amount = existing.quantity * existing.price;
      } else {
        this.invoiceItems.push({
          ...this.selectedProduct,
          quantity: this.selectedQuantity,
          amount: this.selectedProduct.price * this.selectedQuantity
        });
      }
      this.selectedProduct = null;
      this.selectedQuantity = 1;
    }
  }

  removeItem(index: number) {
    this.invoiceItems.splice(index, 1);
  }

  getSubTotal() {
    return this.invoiceItems.reduce((sum, item) => sum + item.amount, 0);
  }

  getDiscountAmount() {
    return (this.getSubTotal() * this.discountRate) / 100;
  }

  getGSTAmount() {
    return ((this.getSubTotal() - this.getDiscountAmount()) * this.gstRate) / 100;
  }

  getFinalTotal() {
    return this.getSubTotal() - this.getDiscountAmount() + this.getGSTAmount();
  }

  printPage() {
    window.print();
  }

  downloadPDF() {
    const data = document.getElementById('invoice');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${this.invoiceNumber}.pdf`);
      });
    }
  }

  resetForm() {
    this.selectedCustomer = null;
    this.selectedProduct = null;
    this.selectedQuantity = 1;
    this.invoiceItems = [];
    this.invoiceDate = new Date().toISOString().substring(0, 10);
    this.invoiceNumber = 'INV-' + Math.floor(1000 + Math.random() * 9000);
    this.gstRate = 18;
    this.discountRate = 0;
  }
}
