import { Component, NgModule, Pipe } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';
@Component({
  selector: 'app-invoice',
  imports: [FormsModule,CommonModule ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
   // Customer list
 
  date = new Date().toISOString().split('T')[0];
  taxRate = 18;
  items = [{ description: '', quantity: 1, price: 0 }];
  customerName: string = '';
  showSuggestions = false;

  customers: string[] = [
    'Ankit Patel', 'Bhavin Shah', 'Chirag Mehta', 'Diksha Jain', 'Esha Sharma'
  ];
   Items: string[] = [
    'Ball', 'Bat','Football'
  ];

  filteredCustomers: string[] = [];

  filterCustomers() {
    const query = this.customerName.toLowerCase();
    this.filteredCustomers = this.customers.filter(c =>
      c.toLowerCase().includes(query)
    );
  }

  selectCustomer(name: string) {
    this.customerName = name;
    this.filteredCustomers = [];
    this.showSuggestions = false;
  }

  hideSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200); // slight delay to allow mousedown to register
  }

  addItem() {
    this.items.push({ description: '', quantity: 1, price: 0 });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  get subtotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get tax() {
    return (this.subtotal * this.taxRate) / 100;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  downloadPDF() {
    const element = document.getElementById('invoice-content');
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`invoice-${this.customerName}.pdf`);
      });
    }
  }
}
