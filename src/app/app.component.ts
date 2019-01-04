import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor () {
    
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXt4S_CGc0ZS6GGnrubkgAzuiY-CdUuYg",
    authDomain: "fpaprojet.firebaseapp.com",
    databaseURL: "https://fpaprojet.firebaseio.com",
    projectId: "fpaprojet",
    storageBucket: "fpaprojet.appspot.com",
    messagingSenderId: "466902299886"
  };
  firebase.initializeApp(config);

  }
}
