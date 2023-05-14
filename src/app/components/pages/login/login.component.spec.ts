import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/service/auth/auth.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub: any;
  let estadosUiServiceStub: any;

  beforeEach((() => {
    authServiceStub = {
      login: jasmine.createSpy('login')
    };

    estadosUiServiceStub = {
      toast$: of({ msg: 'Test message' })
    };

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: EstadosUIService, useValue: estadosUiServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.login() when onSubmit() is called', () => {
    const testEmail = 'test@test.com';
    const testPassword = 'testPassword';
    component.email = testEmail;
    component.password = testPassword;
    component.onSubmit({ email: testEmail, password: testPassword });
    expect(authServiceStub.login).toHaveBeenCalledWith(testEmail, testPassword);
  });

  it('should set isToast to true and display message when toast$ event is triggered', () => {
    expect(component.isToast).toBeFalse();
    expect(component.msg).toBeUndefined();
    estadosUiServiceStub.toast$.next({ msg: 'Test message' });
    fixture.detectChanges();
    expect(component.isToast).toBeTrue();
    expect(component.msg).toEqual('Test message');
  });
});