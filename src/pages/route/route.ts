import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@IonicPage()
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

constructor(private nav: NavController, private auth: AuthServiceProvider){
  }

  
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

}
