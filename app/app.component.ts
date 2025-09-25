import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./pages/data-binding/data-binding.component";
import { UserComponent } from "./pages/user/user.component";
import { AddComponent } from './pages/add/add.component';
import { AngularComponent } from './pages/angular/angular.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
@Component({
  selector: 'app-root',
  imports: [RouterLink, DataBindingComponent, UserComponent, AddComponent, AngularComponent, RouterOutlet, RouterModule, HttpClientModule, HeaderComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularJs';
  router: any;
isLoggedIn: any;
authService: any;
  constructor() {}

//   onLogout(){
//   localStorage.clear();
//   alert("Logged Out Succesfully");
//   this.router.navigate(['/signup']);
// }
onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
