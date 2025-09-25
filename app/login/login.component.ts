import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {
  
  // //3-7-2025
  username = '';
  password = '';
  loading: boolean | undefined;
  // error: string | undefined;
  error="";

  constructor(private router: Router) {}
 async login() {
    this.loading = true;
    // this.error = null;
    try {
      const data = encodeURIComponent(JSON.stringify({
        userid: this.username,
        password: this.password
      }));
      const url = `https://novaoffice.novasoftwares.com/service.aspx?ApiVer=1&DeviceId=ANG&AppId=NV02&Lat=0&Lng=0&Control=auth&data=${data}`;
      const response = await fetch(url, {
        method: 'GET'
      });

      //if (!response.ok) throw new Error('Invalid credentials');

      // Optionally, check the response body for actual authentication result
       const result = await response.json();
        console.log(result.Result);
             if (result.Result=="ok" )
             {          
              this.router.navigate(['/home']);
             }
             else
             {
               console.log(result.Result);
              this.router.navigate(['/login']);
              this.error = 'Invalid username or password.';
              // alert("Login Failed");
             }  
            }catch (err: any) {
             console.error(err);
      this.error = err.message || 'Login failed';
}
    // } catch (err: any) {
    //   this.error = err.message || 'Login failed';
    finally {
      this.loading = false;
    }
}
  // email = '';
  // password = '';

  // constructor(private authService: AuthService, private router: Router) {}

  // onLogin() {
  //   this.authService.login(this.email, this.password).subscribe({
  //     next: (response) => {
  //       console.log('Login success:', response);
  //       // Save token, redirect, etc.
  //       localStorage.setItem('token', response.token); // Optional
  //       this.router.navigate(['/home']); // Adjust as needed
  //     },
  //     error: (error) => {
  //       console.error('Login error:', error);
  //       alert('Login failed');
  //     }
  //   });
  // }
  onSwitch(){
    this.router.navigate(['/signup']);
  }
}
