// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// export interface NavItem {
//   id?: number;
//   label: string;
//   path: string;
// }

// @Injectable({ providedIn: 'root' })
// export class NavService {
//   private apiUrl = 'https://localhost:44329/api/Navigation';

//   constructor(private http: HttpClient) {}

//   getNavItems(): Observable<NavItem[]> {
//     return this.http.get<NavItem[]>(this.apiUrl);
//   }

//   addNavItem(item: NavItem): Observable<NavItem> {
//     return this.http.post<NavItem>(this.apiUrl, item);
//   }
// }
