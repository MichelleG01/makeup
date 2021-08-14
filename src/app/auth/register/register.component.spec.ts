import { ComponentFixture, getTestBed, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from '../services/auth.service';


const fireStub = {
  auth: {
    createUserWithEmailAndPassword(): Promise<void> {
      return new Promise<void>(resolve => resolve());
    },
    currentUser: {
      uid: 'blub',
      sendEmailVerification(): Promise<void> {
        return new Promise<void>(resolve => resolve());
      },
    }
  }
};

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule,  
        AngularFireModule.initializeApp(environment.firebaseConfig), //Inicializar la conexión con firebase
        AngularFireAuthModule, RouterTestingModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    service = injector.inject(AuthService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create user onRegister', () => {
    expect(component).toBeTruthy();
  });
});
