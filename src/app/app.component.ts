import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[AuthService]
})
export class AppComponent {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Tarea',
      url: '/task',
      icon: 'mail'
    }
  ]

  public user: any;
  public email: any;

  constructor(private authSvc:AuthService, private router: Router, public menuCtrl: MenuController) {
  }

  ngOnInit() {}

  getEmail() {
    this.user = this.authSvc.getCurrentUser();
    if (this.user){
      this.email = this.user.getEmail;
    }
    return this.email;
  }

  isSelected() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      const index = this.appPages.findIndex(page => {
        const p = page.url.split('/')[1].toLowerCase();
        return p === path.toLowerCase();
      });
      return index;
    }
  }

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.menuCtrl.enable(false);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
