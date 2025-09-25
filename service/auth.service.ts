//  import { Injectable } from '@angular/core';
//  import { HttpClient } from '@angular/common/http';
//  import { Observable } from 'rxjs';

//  @Injectable({
//    providedIn: 'root'
// })
//  export class AuthService {
//    private apiUrl = 'https://.novasoftwares.com/service.aspx?ApiVer=1&DeviceId=ANG&AppId=NV02&Lat=0&Lng=0&Control=auth&data=${data}`'; 
//   private signupUrl = ''; 

//   constructor(private http: HttpClient) {}

//    login(email: string, password: string): Observable<any> {
//     return this.http.post(this.apiUrl, { email, password });
//   }
//    signup(data: { firstname: string; lastname: string; email: string; password: string }): Observable<any> {
//      return this.http.post(this.signupUrl, data);
//    }
  
//   isLoggedIn(): boolean {
//      return !!localStorage.getItem('token'); // adjust if your token key is different
//    }

//    logout(): void {
//     localStorage.removeItem('token');
//   }
//  }
