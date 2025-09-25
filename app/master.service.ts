import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  getsum(num1:number,num2:number){
    const result=num1+num2;
    console.log(result);
    return result;
  }
}
