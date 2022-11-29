import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token ="$jasidce98s4ad"

  constructor() { }

  ngOnInit() {
  }

  //localstorage
  login(){
    //para guardar una variable
    localStorage.setItem("Token",this.token)
    //para eliminar una variable
      //localStorage.removeItem("Token");
    //para eliminar tood el localStorage
      //localStorage.clear();

  }

}
