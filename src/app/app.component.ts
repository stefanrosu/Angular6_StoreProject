import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "StoreProject";
  loadedFeature = "recipe";

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDynU6Dc6sLijlA3HDEW-0lgGdVxJSuNKQ",
      authDomain: "ng-recipe-book-f3de0.firebaseapp.com"
    });
  }
}
