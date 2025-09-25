import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  navItems: string[] = ['Home', 'About'];
  newItem: string = '';

  addNavItem() {
    if (this.newItem.trim()) {
      this.navItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  getRouterLink(item: string): string {
    return item.toLowerCase().replace(/\s+/g, '');
  }
}
