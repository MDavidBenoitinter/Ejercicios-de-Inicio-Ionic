import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// esto se importa para poder leer un json
import {HttpClient} from '@angular/common/http';
//esto se importa para poder mapear nuestro json
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.page.html',
  styleUrls: ['./costumers.page.scss'],
})
export class CostumersPage implements OnInit {

  users : any = [];
  permision: boolean;
  searcheduser: any;

  constructor(private router: Router, private http: HttpClient){}

  ngOnInit() {
    this.permision = true;
    console.log("Hola Mundo");
    this.getusers().subscribe(res=>{
      //imprimimos en consola nuestro JSON para pruebas
      console.log("Res",res)
      this.users = res;
      this.searcheduser = this.users;
    });
  }

  gotohome(){
    this.router.navigate(['/home'])
  }

  //función para leer y mapear JSON
  getusers(){
    return this.http.get("assets/Files/Costumers.json").pipe(
      map((res:any)=> {return res.data;})
    )
  }

  searchCustomer(event){
    const text = event.target.value;
    this.searcheduser = this.users;
    if(text && text.trim() != ''){
      this.searcheduser = this.searcheduser.filter((user:any) => {
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) >-1 ) 
      })
    }
  }

  handleRefresh(event) {
    this.getusers();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

}
