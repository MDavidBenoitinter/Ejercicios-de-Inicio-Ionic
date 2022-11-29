import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Button } from 'protractor';


@Component({
  selector: 'app-toasty-alert',
  templateUrl: './toasty-alert.page.html',
  styleUrls: ['./toasty-alert.page.scss'],
})
export class ToastyAlertPage implements OnInit {

  constructor(public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: "Esto es un Toast",
      duration: 1000,
      position: "bottom"
    });
    toast.present();
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header:"Título",
      message: "Ésto es un Mensaje en un Alert",
      buttons: ["OK"],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header:"Título",
      message: "Ésto es un Mensaje en un Alert con 2 opciones",
      buttons: [
      {
       text: "No",
       handler: () => {
        console.log("No, Cancelar")
       }, 
      },
      {
        text: "Si",
        handler: () => {
         console.log("Siuuuuu")
        }, 
       },
      ],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
