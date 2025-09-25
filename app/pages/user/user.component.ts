import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  http =inject(HttpClient);
  user:any[]=[];
  ngOnInit(): void {
    this.getApi();
  }
getApi(){
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
    this.user=result;
  });
}
}
