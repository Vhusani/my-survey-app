import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TabserviceService {
  
  tabSubject : BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  setTabSelected(tabIndex : number){
    this.tabSubject.next(tabIndex);
   }

   getTabSelected() {
    this.tabSubject.asObservable();
   }
}
