import { HttpClient } from '@angular/common/http';
import { Component, inject, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 

isVisible=true;
Message =' ';
 CourseName =" Computer science";
 CourseDuration="2 Hours";
 isActive:boolean=true;
 myCOLOR="bg-success";
 slectedCity:string=' ';
 showAlert(){
  alert("Hiii");
 }
 changeName(name:string){
this.CourseName=name;
 }
CityChange(){
  alert("city changed");
}
Show(){
  this.isVisible=true;
}
Hide(){
  this.isVisible=false;
}
Messagee(){
  this.showAlert();
}
}
