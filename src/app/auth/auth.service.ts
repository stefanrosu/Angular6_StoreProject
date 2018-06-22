import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
  constructor(private router: Router) {}
  token: string;
  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        alert("Account created! Please login.");
        this.router.navigate(["/"]);
      })
      .catch(error => console.log(error));
  }
  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(["/"]);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
      })
      .catch(error => alert("Enter a valid email or password!"));
  }
  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
