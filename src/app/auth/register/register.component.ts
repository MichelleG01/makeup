import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  showFrom=false;
  constructor(private formBuilder: FormBuilder, private authSvc:AuthService, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        email: [],
        password: []
      }
    );
    this.showFrom=true;
  }

  async onRegister() {
    const {email, password} = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['/login']);
      }else {
        console.log("No se pudo registrar el usuario");
      }
    } catch (error) {
      console.log(error);
    }
  }

}
