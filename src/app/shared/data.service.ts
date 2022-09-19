import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Response } from '../model/response';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userList: AngularFireList<any>;

  constructor(private afs: AngularFirestore, private firebase: AngularFireDatabase ) {
    this.userList = this.firebase.list('users');
   }

   getUserDetails(){
      return this.userList;
   }

   addUserDetails(user:Response){
      this.userList.push(user);
   }

   deleteDetails($key: string){
      this.userList.remove($key);
   }

}
