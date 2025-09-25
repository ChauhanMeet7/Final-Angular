import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  imports: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
router: any;
home(){
  this.router.navigate(['/home']);
}
converter(){
  this.router.navigate(['/converter']);
}
onLogout(){
  localStorage.clear();
  alert("Logged Out Succesfully");
  this.router.navigate(['/login']);
}
}
