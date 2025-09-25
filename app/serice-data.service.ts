import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SericeDataService {

  constructor(private http:HttpClient){}
    userData={
      id:1,
      name:'meet',
      email:'chauhanmeet9979@gmail.com',
      subscribe:'basic'
    }
    API_URL="https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees";
    getData(){
      return this.http.get(this.API_URL);
    }
    iseligiblesubscription(){
      if(this.userData.subscribe=='basic' && this.userData.email.endsWith('gmail.com')){
        return true;
      }else{
        return false;
      }
    }

   }

