import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  const authStub: any = {
    authState: {},
    auth: {
      signInWithEmailAndPassword() {
        return Promise.resolve();
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig), //Inicializar la conexión con firebase
        AngularFireAuthModule]
    });
    service = TestBed.inject(AuthService);

    authStub.authState = of(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create new user', () => {
    const email = 'ann@gmail.com';
    const password = 'todos1234';

    const mock = TestBed.get(AngularFireAuth);
    const spy = spyOn(authStub.auth, 'signInWithEmailAndPassword').and.callThrough();
    mock.auth = authStub.auth;

    service.login(email, password);

    expect(spy).toHaveBeenCalledWith(email, password);  

  });

});
