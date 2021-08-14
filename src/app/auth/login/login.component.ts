import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authSvc:AuthService, private router: Router,
    private menu: MenuController) {
    this.menu.enable(false); 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: [],
        password: []
      }
    );
  }

  async onLogin() {
    const {email, password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.menu.enable(true);
        this.router.navigate(['/task']);
      } else {
        console.log("mal");
      }
    } catch (error) {
      console.log(error);
    }
  }

}
