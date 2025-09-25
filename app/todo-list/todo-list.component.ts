import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
task=" ";
taskList:{id:number,task:string}[]=[];
addTask(){
  this.taskList.push({id: this.taskList.length +1,task:this.task})
  this.task=' ';
  console.log(this.taskList);
}
Deletee(taskId:number){
  this.taskList=this.taskList.filter((item)=>item.id!=taskId);
  console.log(this.taskList);
}
}
