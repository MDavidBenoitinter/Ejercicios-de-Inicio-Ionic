import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// esto se importa para poder leer un json
import {HttpClient} from '@angular/common/http';
//esto se importa para poder mapear nuestro json
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  id:any;
  countries : any = [];
  name: string;
  capital: string;
  description: string;
  image: string;

  constructor(private activatedRoute:ActivatedRoute,private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.getCountries().subscribe(res=>{
      //imprimimos en consola nuestro JSON para pruebas
      // console.log("Res",res)
      this.countries = res;
      for( let i = 0; i<res.length; i++){
        if(this.countries[i].id == this.id){
          this.name = this.countries[i].name;
          this.capital = this.countries[i].capital;
          this.description = this.countries[i].description;
          this.image = this.countries[i].image;
        }
      }
    });
  }

  getCountries(){
    return this.http.get("assets/Files/Cities.json").pipe(
      map((res:any)=> {return res.Countries;})
    )
  }

}
