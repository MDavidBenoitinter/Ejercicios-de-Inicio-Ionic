import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// esto se importa para poder leer un json
import {HttpClient} from '@angular/common/http';
//esto se importa para poder mapear nuestro json
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  countries : any = [];
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getCountries().subscribe(res=>{
      //imprimimos en consola nuestro JSON para pruebas
      console.log("Res",res)
      this.countries = res;
    });
  }

  getCountries(){
    return this.http.get("assets/Files/Cities.json").pipe(
      map((res:any)=> {return res.Countries;})
    )
  }

}
