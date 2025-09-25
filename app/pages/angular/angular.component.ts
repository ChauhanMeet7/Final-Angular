import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular',
  imports: [RouterModule,RouterLink],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent implements OnInit {
employeeList:any[]=[];
employeeObj: any={
  "employeeId":0,
      "fullName":"",
      "email":" ",
      "phone":" ",
      "gender":" ",
      "dateOfJoining":"" ,
      "employeeType":"",
      "salary":0,
      "departmentId":0,
      "designationId":0,
}
  http=inject (HttpClient);
  router=inject(Router)
  navigate(){
    this.router.navigate(['/add']);
    this.router.navigate(['/api']);
  }
 ngOnInit():void{
 this.getEmployee();
 }
getEmployee(){
  this.http.get("https://localhost:44329/api/Employees").subscribe((res:any)=>{
    this.employeeList=res;
  });
}

}
