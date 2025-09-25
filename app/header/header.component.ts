import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterOutlet,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
      router=inject(Router)

  onConverter(){
    this.router.navigate(['/converter']);
  }
onLogout(){
  localStorage.clear();
  alert("Logged Out Succesfully");
  this.router.navigate(['/login']);
}
home(){
  this.router.navigate(['/home']);
}
converter(){
  this.router.navigate(['/converter']);
}
Department(){
  this.router.navigate(['/dep']);
}
Profile(){
  this.router.navigate(['/profile']);
}
built(){
  this.router.navigate(['/built-in-pipes']);
}
}
