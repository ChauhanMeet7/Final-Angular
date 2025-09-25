import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { employee, Iemployee } from '../../model/employee';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  http =inject(HttpClient);
  userList:Iemployee[]=[];
  user:any[]=[];
  employeForm: FormGroup =new FormGroup({
  employeeId: new FormControl(0),
  fullName: new FormControl(""),
  email: new FormControl(""),
  phone:  new FormControl(""),
  gender: new FormControl(""),
  dateOfJoining: new FormControl(""),
  departmentId: new FormControl(0),
  designationId: new FormControl(0),
  employeeType: new FormControl(""),
  salary: new FormControl(0),
  })
  // employeeObj :employee=new employee();
  url="https://api.freeprojectapi.com/api/EmployeeApp/";
  ngOnInit(): void {
    this.getAPI();
  }
  
  getAPI(){
    this.http.get(this.url+"GetEmployees").subscribe((res:any)=>{
      this.userList=res;
    });

  }
  Deletee(data:any){
    const isDelete=confirm("Are you sure you want to delete");
    if(isDelete){
      this.http.delete("https://api.freeprojectapi.com/api/EmployeeApp/DeleteEmployee/"+data.employeeId).subscribe((res:any)=>{
        this.getAPI();
      })
    }
  }

  save(){
    const formValue= this.employeForm.value;
    this.http.post<employee>(this.url + "CreateEmployee",formValue).subscribe((res:employee)=>{
    this.getAPI();
    });
  }
  Getuser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.user=res;
    })
  }
}
