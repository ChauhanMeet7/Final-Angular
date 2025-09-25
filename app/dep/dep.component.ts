import { CommonModule } from '@angular/common';
import { COMPILER_OPTIONS, Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { employee } from '../model/employee';
import { FilterPipe } from "../filter.pipe";
@Component({
  selector: 'app-dep',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet, FilterPipe],
  templateUrl: './dep.component.html',
  styleUrl: './dep.component.css'
})
export class DepComponent {
  
// searchDeptId: number | null = null;
departments = [
    { id: 1, name: 'HR', code: '' },
    { id: 2, name: 'Finance', code: '' },
    { id: 3, name: 'Engineering', code: '' }
  ];
searchtext:any;
  editDepartment(dept: any) {
    // console.log('Editing:', dept);
  }

  deleteDepartment(id: number) {
    // console.log('Deleting ID:', id);
    // this.departments = this.departments.filter(d => d.id !== id);
  }
  searchDepartment() {
   
}
    router=inject(Router)

onLogout(){
  localStorage.clear();
  alert("Logged Out Succesfully");
  this.router.navigate(['/login']);
}
homee(){
  this.router.navigate(['/home']);
}
converteer(){
  this.router.navigate(['/converter']);
}
Department(){
    this.router.navigate(['/dep']);
}
reactiveform(){
  this.router.navigate(['/reactive-form']);
}
}
