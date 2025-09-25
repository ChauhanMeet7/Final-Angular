import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../../service/auth.service';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
email: string = '';
  password: string = '';
  firstname: string ='';
  lastname: string ='';


  constructor(private router: Router) {}
onLogin(){
  this.router.navigate(['/login']);
}
 onSignup() {
    // const signupData = {
    //   firstname: this.firstname,
    //   lastname: this.lastname,
    //   email: this.email,
    //   password: this.password
    // };

    // this.authService.signup(signupData).subscribe({
    //   next: (res) => {
    //     console.log('Signup successful:', res);
    //     // Navigate to login or dashboard
    //     this.router.navigate(['/login']);
    //   },
    //   error: (err) => {
    //     console.error('Signup failed:', err);
    //     alert('Signup failed. Please try again.');
    //   }
    // });
  }
}
