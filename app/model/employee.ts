export interface Iemployee {
  employeeId: number
  fullName: string
  email: string
  phone: string
  gender: string
  dateOfJoining: string
  employeeType: string
  salary: number
  departmentName: string
  designationName: string
}
export class employee {
  filter(arg0: (e: any) => any): any[] {
    throw new Error('Method not implemented.')
  }
  employeeId: number
  fullName: string
  email: string
  phone: string
  gender: string
  dateOfJoining: string
  departmentId: number
  designationId: number
  employeeType: string
  salary: number


  constructor(){
      this.employeeId=0;
      this.fullName="";
      this.email=" ";
      this.phone=" ";
      this.gender=" ";
      this.dateOfJoining=' ';
      this.employeeType=' ';
      this.salary=0;
      this.departmentId=0;
      this.designationId=0;
  }
}