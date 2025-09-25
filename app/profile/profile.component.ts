import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { SericeDataService } from '../serice-data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  dummyData:any;
  user:any;
constructor(private service:SericeDataService){
this.dummyData=this.service.userData;
}
@ViewChild('pp',{static:false}) el!:ElementRef
  ngOnInit(): void {
this.getApi();
  }
  // download(){
  //   let PDF=new jsPDF('p','px','a4')
  //   PDF.html(this.el.nativeElement,{
  //     callback:(pdf)=>{
  //       pdf.save("demo.pdf")
  //     }
  //   })
  // }
  download() {
    const doc = new jsPDF('p', 'pt','a4'); // A4 in mm
    // const pdfWidth = doc.internal.pageSize.getWidth();
    // const pdfHeight = doc.internal.pageSize.getHeight();
// Temporarily show content before capturing
    this.el.nativeElement.style.display = 'block';

    doc.html(this.el.nativeElement, {
      callback: (doc) => {
        doc.save('invoice.pdf');
         this.el.nativeElement.style.display = 'none'; // Hide again after export
      },
      margin: [10, 10, 10, 10], // top, left, bottom, right
      autoPaging: 'text',
      x: 0,
      y: 0,
      html2canvas: {
        scale: 0.75, // shrink to fit A4
        scrollY: 0,
      },
      // width: pdfWidth, // match the A4 width
      windowWidth: this.el.nativeElement.scrollWidth, // ensures proper scaling
    });
  }
   navItems: string[] = ['Home', 'About', 'Contact']; // Default items
  newNavItem: string = '';

  addNavItem() {
    if (this.newNavItem.trim()) {
      this.navItems.push(this.newNavItem.trim());
      this.newNavItem = '';
    }
  }
   editDepartment(dept: any) {
    // console.log('Editing:', dept);
  }

  deleteDepartment(id: number) {
    // console.log('Deleting ID:', id);
    // this.departments = this.departments.filter(d => d.id !== id);
  }
  searchDepartment() {
   
}
    router=inject(Router)

onLogout(){
  localStorage.clear();
  alert("Logged Out Succesfully");
  this.router.navigate(['/login']);
}
homee(){
  this.router.navigate(['/home']);
}
converteer(){
  this.router.navigate(['/converter']);
}
Department(){
    this.router.navigate(['/dep']);
}
reactiveform(){
  this.router.navigate(['/reactive-form']);
}
getApi(){
  this.service.getData().subscribe(res=>{
    this.user=res;
  })
}
}
