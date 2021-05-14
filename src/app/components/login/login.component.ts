import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public menuCtrl: MenuController) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {}

  showAlert() {
    alert("Datos vacios");
  }

}
