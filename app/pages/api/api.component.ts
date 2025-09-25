import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { employee, Iemployee } from '../../model/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  imports: [FormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {

  http =inject(HttpClient);
  userList:Iemployee[]=[];
  filterData: any[]=[]

  employeeObj :employee=new employee();
  ngOnInit(): void {
    this.getAPI();
  }
  searchInput($event:Event){
const input=$event.target as HTMLInputElement;
console.log(input.value);
this.filterData=this.employeeObj.filter(e => {
  if(e.name.includes(input.value)){
    return e;
  }
})
}
  getAPI(){
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees").subscribe((res:any)=>{
      this.userList=res;
    });
  }
  savchange(){
    this.http.post("https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee",this.employeeObj).subscribe((res:any)=>{
      this.getAPI();
    })
  }
   change(data:any){
    this.http.put("https://api.freeprojectapi.com/api/EmployeeApp/UpdateEmployee/"+data.employeeObj.employeeId,this.employeeObj.employeeId).subscribe((res:any)=>{
      this.getAPI();
    })
  }
ddelete(data:any){
  const isDelete=confirm("Are you sure want to delete");
  if(isDelete){
    this.http.delete("https://api.freeprojectapi.com/api/EmployeeApp/DeleteEmployee/" + data.employeeId).subscribe((res:any)=>{
      this.getAPI();
    });
  }
  }
  // Edit(empId:number){
  //   this.http.put("https://api.freeprojectapi.com/api/EmployeeApp/" + empId).subscribe((res:any)=>{
  //   this.employeeObj=res;
  //   });
  // }
}
