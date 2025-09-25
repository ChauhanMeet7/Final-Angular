import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map, of, switchMap } from 'rxjs';
import { MasterService } from '../master.service';
import { ajax, AjaxResponse } from 'rxjs/ajax';


@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {
  @ViewChild('search',{static:true}) searchBox?: ElementRef<HTMLInputElement>
  @ViewChild('ref',{static:true}) ref?: ElementRef<HTMLButtonElement>

  users:any=[];
  public count=0;
  increment(){ 
        this.count= this.count +1;
        }
    Decrement(){
      if(this.count>0){
        this.count= this.count -1;
      }
  }
  constructor(private master:MasterService){
  }
  ngOnInit(){
  const searchObs=fromEvent(this.searchBox!.nativeElement,"input").pipe(
    debounceTime(1000),
    filter((e:any)=>e.target.value!=""),
    switchMap((e:any)=>{
      return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
    }),
    map(ajaxResponse=>ajaxResponse.response)
  )
  searchObs.subscribe((value:any)=>{
    console.log(value)
    this.users=value
  })
  const result=this.master.getsum(15,25);
  // console.log(result);
  }
angular:string='Hi my name is meet chauhan,Today i am going to explore built in pipes';
userdata={
  id:1,
  name:'meet',
  email:'meet@gmail.com'
};
currentDate:Date=new Date;
items = of(['Apple','Banana','Mango']);

}
