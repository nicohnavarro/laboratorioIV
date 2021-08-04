import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public user;
  constructor(
    public afAuth:AngularFireAuth,
    public db:DatabaseService,
    private router:Router,
    private afs:AngularFirestore,
  ) { }

  async signIn(user:User){
      try{
        const result = await this.afAuth.signInWithEmailAndPassword(user.email,user.password);
        this.user = result.user;
        return result;
      }
      catch(err){
        throw err;
      }
  }

  signUp(user:User){
      return this.afAuth.createUserWithEmailAndPassword(user.email,user.password);
  }

  logout(){
    return this.afAuth.signOut();
  }
}
