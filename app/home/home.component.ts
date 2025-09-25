import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SericeDataService } from '../serice-data.service';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  data:any;
  isEligible:boolean;
  constructor(private service:SericeDataService,private master:MasterService){
this.data=this.service.userData;
this.isEligible=this.service.iseligiblesubscription();
  }
progress: number = 0;
  isConverting: boolean = false;
  isPaused: boolean = false;
  status: string = 'Idle';
  private intervalId: any;
  private interval: any;

  startConversion() {
    if (!this.isConverting) {
      this.isConverting = true;
      this.status = 'Converting...';
      this.progress = 0;
      this.isPaused = false;

      this.intervalId = setInterval(() => {
        if (!this.isPaused && this.progress < 100) {
          this.progress += 1;
          if (this.progress === 100) {
            this.isConverting = false;
            this.status = 'Completed';
            clearInterval(this.intervalId);
          }
        }
      }, 100);
    }
  }
  cancelConversion() {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
  this.progress = 0;
  this.isConverting = false;
  this.isPaused = false;
  this.status = 'Cancelled';
  this.clearStateFromLocalStorage();
}
private saveStateToLocalStorage() {
  const state = {
    progress: this.progress,
    isConverting: this.isConverting,
    isPaused: this.isPaused,
    status: this.status
  };
  localStorage.setItem('conversionState', JSON.stringify(state));
}

private clearStateFromLocalStorage() {
  localStorage.removeItem('conversionState');
}
  togglePause() {
    this.isPaused = !this.isPaused;
    this.status = this.isPaused ? 'Paused' : 'Converting...';
  }

  ngOnDestroy() { 
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
 
    router=inject(Router)
resetProgress() {
    this.isConverting = false;
    this.isPaused = false;
    this.progress = 0;
    this.status = 'Idle';
    clearInterval(this.interval);
  }

  onConverter(){
    this.router.navigate(['/converter']);
  }
onLogout(){
  localStorage.clear();
  alert("Logged Out Succesfully");
  this.router.navigate(['/login']);
}
home(){
  this.router.navigate(['/home']);
}
converter(){
  this.router.navigate(['/converter']);
}
Department(){
  this.router.navigate(['/dep']);
}
Profile(){
  this.router.navigate(['/profile']);
}
built(){
  this.router.navigate(['/built-in-pipes']);
}
}
