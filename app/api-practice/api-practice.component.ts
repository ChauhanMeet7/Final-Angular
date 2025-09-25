import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-practice',
  imports: [FormsModule],
  templateUrl: './api-practice.component.html',
  styleUrl: './api-practice.component.css'
})
export class ApiPracticeComponent {
http=inject(HttpClient);
post:any[]=[];
newPost:any={ 
    "userId": 0,
    "id": 0,
    "title": "",
    "body": ""
}
ngOnInit(){
this.onGetdata();
}
onGetdata(){
  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{
this.post=res;
  });
}
onSave(){
this.http.post("https://jsonplaceholder.typicode.com/posts",this.newPost).subscribe((newData:any)=>{
  debugger;
  alert('data enterd');
  this.newPost=newData;
  debugger;
  this.onGetdata();
})
}
onEdit(da:any){
  this.newPost=da;
}
onUpdate(){
  this.http.put("https://jsonplaceholder.typicode.com/posts/"+this.newPost.userId,this.newPost).subscribe((r:any)=>{
    debugger;
    alert('data updated');

    this.onGetdata();
    debugger;
  })
}
onDelete(id:number){
this.http.delete("https://jsonplaceholder.typicode.com/posts/"+id).subscribe((r:any)=>{
    debugger;
    alert('data Deleted');

    this.onGetdata();
    debugger;
  })
}
}
