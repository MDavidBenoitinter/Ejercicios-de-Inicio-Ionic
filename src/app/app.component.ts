import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Costumers', url: '/costumers', icon: 'people' },
    { title: 'Grid', url: '/grid', icon: 'grid' },
    { title: 'Countries', url: '/countries', icon: 'map' },
    { title: 'Toast & Alert', url: '/toasty-alert', icon: 'alert-circle' },
    { title: 'Login', url: '/login', icon: 'log-in' },

  ];
  constructor() {}
}
