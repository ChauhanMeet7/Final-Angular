import { Component, computed, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  firsName: string = "Meet";
  courseName = signal<string>("Angular");
  courseDuration = signal("Angular 15 videos");

courseDetail=computed(()=>this.courseName() + "-" +this.courseDuration());

  constructor() {
    this.firsName = "Manav";
    console.log(this.firsName);
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set("React");
    }, 5000);
    console.log(this.courseName());
  }
}
